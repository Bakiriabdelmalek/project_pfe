import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from '../user.service';
import passport from 'passport';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../local.strategy';
import { SessionSerializer } from './session.serializer';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [PrismaModule, PassportModule.register({session:true})],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, SessionSerializer,EmailService],
})
export class AuthModule {}
