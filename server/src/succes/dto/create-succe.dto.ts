import { IsInt, IsString } from 'class-validator';

export class CreateSucceDto {
  @IsString()
  username: string;
  @IsString()
  age: string;
  @IsString()
  whois: string;
  @IsString()
  plans: string;
  @IsString()
  experience: string;
  @IsString()
  telegram: string;
}
