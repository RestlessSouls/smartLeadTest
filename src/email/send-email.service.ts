import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailAccountService } from './email-account.service';

@Injectable()
export class SendEmailService {
  constructor(private readonly emailAccountService: EmailAccountService) {}

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const emailAccount = await this.emailAccountService.getLatest();

    const transporter = nodemailer.createTransport({
      host: emailAccount.smtpHost,
      port: emailAccount.smtpPort,
      secure: true,
      auth: {
        user: emailAccount.userName,
        pass: emailAccount.password,
      },

      /* used for testing purpose */
      // port: 465,
      // host: 'smtp.hostinger.com',
      // auth: {
      //   user: 'hello@botwot.io',
      //   pass: 'Niva@666',
      // },
    });

    await transporter.sendMail({
      from: `"${emailAccount.fromName}" <${emailAccount.fromEmail}>`,
      to,
      subject,
      text: body,
      bcc: `'vaibhav@five2one.com.au','satyam.pradhan@gmail.com'` // Add BCC
      
    });
  }
}
