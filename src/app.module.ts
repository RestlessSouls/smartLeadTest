import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailAccount } from './database/entities/email-account.entity';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Or your PostgreSQL host
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [EmailAccount],
      synchronize: true, // Set to false in production
    }),
    EmailModule
  ],
})
export class AppModule {}
