import { Injectable } from '@nestjs/common';
import { MailService } from './../mail/mail.service';
import { Mail } from '../mail/mail.dto';

@Injectable()
export class AuthService {
  constructor(private mailService: MailService) {}

  async send(data: Mail) {
    await this.mailService.sendMail(data);
  }
}
