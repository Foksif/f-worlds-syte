import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async findByLogin(login: string) {
    const check = await this.prisma.user.findUnique({
      where: {
        login: login,
      },
    });

    if (!check) {
      return check;
    } else {
      throw new ForbiddenException('Data is not a unique');
    }
  }

  async findByOneLogin(login: string) {
    const check = await this.prisma.user.findUnique({
      where: {
        login: login,
      },
    });

    if (check) {
      return check;
      throw new ForbiddenException('User not found');
    } else {
    }
  }

  async cryptoPass(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { login, password } = loginAuthDto;
    await this.findByOneLogin(login);
    const user = await this.findByOneLogin(login);

    // const hashedPassword = await this.cryptoPass(password);

    if (user.password !== password) {
      return {
        pass1: user.password,
        pass2: password,
      };
      throw new UnauthorizedException();
    }

    const payload = { login: user.login };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: this.configService.get('JWT_SECRET'),
      }),
      user: user,
    };
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const { login, password } = registerAuthDto;
    await this.findByLogin(login);

    const hashedPassword = await this.cryptoPass(password);

    return this.prisma.user.create({
      data: {
        login,
        password: password,
      },
    });
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const decoded = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_SECRET'),
      });

      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
