// email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { welcomeEmailTemplate } from './mails/welcome_mail';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // Transporter configuration
      // For example, using Gmail:
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'bakiriabdelmalek1@gmail.com',
        pass: 'lijxgzuxyxnxdwcd',
      },
    });
  }

  async sendMail(email:string) {
    try {
      const info = await this.transporter.sendMail({
        from: {
          name:"Sytem Medical",
          adress:"bakiri.abdelmalek2@gmail.com"
        },
        to: email,
        subject: 'Welcome to our APP!',
        html: welcomeEmailTemplate(),
      });
      console.log('Message sent: %s', info.messageId);
      
    } catch (error) {
      console.error('Error sending email: ', error);
      
    }
  }
}
