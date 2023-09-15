import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
      MailerModule.forRootAsync({
          // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
          // or
          useFactory: async (config: ConfigService) => ({
          transport: {
            host: config.get('MAIL_HOST'),
            secure: false,
            auth: {
              user: config.get('MAIL_USER'),
              pass: config.get('MAIL_PASSWORD'),
            },
          },
          defaults: {
            from: '"No Reply" <noreply@example.com>',
          },
          template: {
            dir: join(__dirname, 'templates'),
            adapter: new HandlebarsAdapter(), 
            options: {
              strict: true,
            },
          },
        }),
        inject: [ConfigService],
      }),
      ],
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService],
})
export class MailModule {}
