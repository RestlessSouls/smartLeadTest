import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateEmailAccountDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name', example: 'Vaibhav Namburi', required: true })
  fromName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'from Email', example:'vnamburi@smartleadscale.org', required: true })
  fromEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'User Name', example:'Vaibhav', required: true })
  userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'User password', example:'sg#2cxEi3Jo@ZX2f!4', required: true })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Mail Transfer Server Host', example:'smtp.zoho.com.au', required: true })
  smtpHost: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Mail Transfer Server Port', example:'465', required: true })
  smtpPort: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Internet Message Access Protocol Host', example:'imap.zoho.com.au', required: true })
  imapHost: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Internet Message Access Protocol Port', example:'22', required: true })
  imapPort: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({description: 'Message Per Day', example:'40', required: true })
  messagePerDay: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  minimumTimeGap: number;
}
