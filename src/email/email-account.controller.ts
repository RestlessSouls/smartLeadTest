import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { EmailAccountService } from './email-account.service';
import { CreateEmailAccountDto } from './dto/create-email-account.dto';
import { EmailAccount } from '../database/entities/email-account.entity';
import { Response } from 'express';

@Controller('email-account')
export class EmailAccountController {
  constructor(private readonly emailAccountService: EmailAccountService) {}

  @Post()
  async create(@Body() createEmailAccountDto: CreateEmailAccountDto): Promise<EmailAccount> {
    return this.emailAccountService.create(createEmailAccountDto);
  }

}
