import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Mail } from './mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(data: Mail) {

    await this.mailerService.sendMail({
      from: data.name,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: '🚨🚨 New message from PORTFOLIO gerardomir.dev',
      template: './mail.template', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      },
    });
  }
}
