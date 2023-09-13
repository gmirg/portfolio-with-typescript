import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [MailModule], 
  providers: [AuthService],
})
export class AuthModule {}