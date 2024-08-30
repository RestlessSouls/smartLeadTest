import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/* DTO for sending email, capturing all parameters/field of UI page 2 */

export class SendEmailDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email Recepients', example:'satyam.pradhan@gmail.com', required: true })
  to: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email Subject', example:'Smart Lead Takehome Test', required: true })
  subject: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email Body', example:'Hi, This is satyam !', required: true })
  body: string;
}
