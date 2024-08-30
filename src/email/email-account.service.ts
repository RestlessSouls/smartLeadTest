import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailAccountDto } from './dto/create-email-account.dto';
import { EmailAccount } from '../database/entities/email-account.entity';
import * as nodemailer from 'nodemailer';

/* Email Account Service Class */
@Injectable()
export class EmailAccountService {
  constructor(
    @InjectRepository(EmailAccount)
    private emailAccountRepository: Repository<EmailAccount>,
  ) {}

  /* Create method to validate the transpoter details and save it to db if all fine */
  async create(createEmailAccountDto: CreateEmailAccountDto): Promise<EmailAccount> {

    const transporter = nodemailer.createTransport({
      host: createEmailAccountDto.smtpHost,
      port: createEmailAccountDto.smtpPort,
      secure: true,
      auth: {
        user: createEmailAccountDto.userName,
        pass: createEmailAccountDto.password,
      },
    });

    try {
      await transporter.verify();
    } catch (error) {
      throw new BadRequestException('SMTP credentials are invalid.');
    }

    const emailAccount = this.emailAccountRepository.create(createEmailAccountDto);
    return this.emailAccountRepository.save(emailAccount);
  }

  /* Method to fetch the latest entry in db to get the details for from param before sending email */
  async getLatest(): Promise<EmailAccount> {
    const accounts = await this.emailAccountRepository.find({
      order: { id: 'DESC' },
      take: 1, // Limit the result to 1
    });
    return accounts[0];
  }
  
}
