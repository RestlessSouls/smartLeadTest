import { Controller, Post, Body } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('send-email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @Post()
  async sendEmail(@Body() sendEmailDto: SendEmailDto): Promise<void> {
    await this.sendEmailService.sendEmail(sendEmailDto.to, sendEmailDto.subject, sendEmailDto.body);
  }
}
