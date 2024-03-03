// gemini.controller.ts
import { UseGuards,Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { LocalAuthGuard } from 'src/user/auth/local-auth.guard';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  
  @Post('/process')
  async processPrompt(@Body('prompt') prompt: string): Promise<string> {
    try {
      const response = await this.geminiService.chatWithUser(prompt);
      return response;
    } catch (error) {
      console.error(error);
      return 'An error occurred. Please try again.';
    }
  }

  @Post('/clear-history')
  async clearHistory(): Promise<{ message: string }> {
    try {
      this.geminiService.resetPromptHistory();
      return { message: 'Prompt history cleared' };
    } catch (error) {
      console.error(error);
      return { message: 'An error occurred while clearing history' };
    }
  }

  /* @Post('/process-submit')
  async processPromptSubmit(@Body('prompt') prompt: string) {
    return this.geminiService.getPromptResponseSubmit(prompt);
  }*

/*@Post('/clear-history')
  async clearHistory(@Body('num') num:number) {
    await this.geminiService.clearPromptHistory(num);
    return { message: 'Prompt history cleared' };
  }*/
}
