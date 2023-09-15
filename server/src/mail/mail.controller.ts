import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { Mail } from './mail.dto';

@Controller('email')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  async sendEmail(@Body() mailData: Mail): Promise<any> {
    try {
      await this.mailService.sendMail(mailData);
      console.log(mailData)
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
