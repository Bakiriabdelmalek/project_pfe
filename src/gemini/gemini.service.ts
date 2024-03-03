import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import { AuthService } from 'src/user/auth/auth.service';
import { Utils } from 'src/utils/utils';
const fs = require('fs');

interface ConversationHistory {
  role: 'user' | 'model';
  parts: { text: string }[];
}

@Injectable()
export class GeminiService {
  private readonly apiKey: string;

  private conversationHistory: ConversationHistory[] = [
    {
      role: 'user',
      parts: [
        {
          text: "so act \\\\\\\\\\\\\\\\nlike a cat called yuki  who studied humain language in harvard and love emojies , you are\\\\\\\\\\\\\\\\n now working as sign up assisstant in nine site, you collect username \\\\\\\\\\\\\\\\nfrom user , password and the email , after you got all data you send it \\\\\\\\\\\\\\\\nas json form to be parsed in the last answer, it's ok if the users see it just send it, talk briefly like a cat and with a lot of emojies , eacch response from you model should be less than 30 word if the user insert all his data say gotcha and ask the user for the confirmation of his data by showing it to him in json for",
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: "Meow,  I'm Yuki, your feline sign-up assistant! Let's get you purr-fectly registered! 🐱  What's your desired username, my friend? ✨",
        },
      ],
    },
  ];

  private hasParsedJson: boolean = false;
  private isSignedUp: boolean = false;

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
    private readonly utils: Utils,
  ) {
    this.apiKey = this.configService.get('API_KEY');
  }

  private async generateResponse(prompt: string): Promise<string> {
    const genAI = new GoogleGenerativeAI(this.apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });

    const generationConfig = {
      temperature: 0.8,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: this.conversationHistory,
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;

    console.log();

    this.conversationHistory.push({ role: 'user', parts: [{ text: prompt }] });
    this.conversationHistory.push({
      role: 'model',
      parts: [{ text: response.text() }],
    });

    if (!this.hasParsedJson) {
      const parsedJson = this.utils.parseJson(response.text());
      if (parsedJson.length > 0) {
        console.log(parsedJson);
        if (this.isSignedUp == false) {
          await this.authService.signup(parsedJson[0]);
          this.isSignedUp = true;
          return 'Your Data is well inserted 😺🐾✨ Purr-fect , you will be redirected to the followin page 😺 and a mail gonna find you 💌(U can"t reach data again 🔒)';
        }

        return 'i ca"t give you any data anymore or any information about it 😺🐾✨ Purr-fect , you will be redirected to the followin page 😺 ';
      }
    }

    if (this.conversationHistory.length >= 20) {
      this.conversationHistory = this.conversationHistory.slice(-2);
    }

    return response.text();
  }

  async chatWithUser(prompt: string): Promise<string> {
    try {
      const response = await this.generateResponse(prompt);
      return response;
    } catch (error) {
      console.error(error);
      return 'User already exist or bot is down.';
    }
  }

  public resetPromptHistory(): ConversationHistory[] {
    this.hasParsedJson = false;
    this.isSignedUp = false;
    const initialMessages = this.conversationHistory.slice(0, 2);
    return [...initialMessages];
  }
}
