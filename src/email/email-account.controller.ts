import { Controller, Post, Body, Get, Param, Res, HttpException, HttpStatus } from '@nestjs/common';
import { EmailAccountService } from './email-account.service';
import { CreateEmailAccountDto } from './dto/create-email-account.dto';
import { EmailAccount } from '../database/entities/email-account.entity';

/* Email Account Controller */

@Controller('email-account')
export class EmailAccountController {
  constructor(private readonly emailAccountService: EmailAccountService) {}

  /* Create method to create the email accont */
  @Post()
  async create(@Body() createEmailAccountDto: CreateEmailAccountDto): Promise<EmailAccount> {

    /* check if all params are present or not, if not then throwing exception */
    if(
      !createEmailAccountDto.fromEmail ||
      !createEmailAccountDto.fromName ||
      !createEmailAccountDto.imapHost ||
      !createEmailAccountDto.imapPort ||
      !createEmailAccountDto.messagePerDay ||
      !createEmailAccountDto.minimumTimeGap ||
      !createEmailAccountDto.password ||
      !createEmailAccountDto.smtpHost ||
      !createEmailAccountDto.smtpPort ||
      !createEmailAccountDto.userName )
    {
      throw new HttpException(
        {
          success: false,
          message: 'Mandatory fields are missing',
        },
        HttpStatus.PARTIAL_CONTENT
      );
    }
    return this.emailAccountService.create(createEmailAccountDto);
  }

}
