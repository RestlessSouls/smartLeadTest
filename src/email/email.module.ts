import { Module } from '@nestjs/common';
import { EmailAccountController } from './email-account.controller';
import { EmailAccountService } from './email-account.service';
import { SendEmailController } from './send-email.controller';
import { SendEmailService } from './send-email.service';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailAccount } from '../database/entities/email-account.entity';


@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([
      EmailAccount,
    ])
  ],
  controllers: [EmailAccountController, SendEmailController],
  providers: [EmailAccountService, SendEmailService]
})
export class EmailModule {}
