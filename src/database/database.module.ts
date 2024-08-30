import { Module } from '@nestjs/common';
import { EmailAccount } from './entities/email-account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
     TypeOrmModule.forFeature([EmailAccount])
    ],
})
export class DatabaseModule {}
