import { IsString } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  login: string;
  @IsString()
  password: string;
}
