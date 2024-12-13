import { IsString } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  login: string;
  @IsString()
  password: string;
}
