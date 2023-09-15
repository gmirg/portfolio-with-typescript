import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Mail } from './mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(data: Mail) {

    await this.mailerService.sendMail({
      from: `Message from yopur Portfolio`,
      // from: '"Support Team" <support@example.com>', // override default from
      to: 'sayhello@gerardomir.dev',
      subject: '🚨🚨 New message from PORTFOLIO gerardomir.dev',
      template: './mailTemplate', 
      context: { // ✏️ filling curly brackets with content
        fullName: data.fullName,
        emailAddress: data.emailAddress,
        subject: data.subject,
        message: data.message
      },
    });
    console.log('Here!')
  }
}
