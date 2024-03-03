import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from 'src/user/auth/auth.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/user/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Utils } from 'src/utils/utils';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(), 
  
],
  controllers: [GeminiController],
  providers: [GeminiService,AuthService,UserService,PrismaService,Utils],
})
export class GeminiModule {}
