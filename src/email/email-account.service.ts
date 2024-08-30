import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailAccountDto } from './dto/create-email-account.dto';
import { EmailAccount } from '../database/entities/email-account.entity';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailAccountService {
  constructor(
    @InjectRepository(EmailAccount)
    private emailAccountRepository: Repository<EmailAccount>,
  ) {}

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

  // async getLatest(): Promise<EmailAccount> {
  //   return this.emailAccountRepository.findOne({
  //     where: {}, 
  //     order: { id: 'DESC' },
  //   });
  // }

  async getLatest(): Promise<EmailAccount> {
    const accounts = await this.emailAccountRepository.find({
      order: { id: 'DESC' },
      take: 1, // Limit the result to 1
    });
    return accounts[0];
  }
  
}
