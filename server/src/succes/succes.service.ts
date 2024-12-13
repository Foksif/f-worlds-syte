import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSucceDto } from './dto/create-succe.dto';
import { PrismaService } from 'src/prisma.service';
import { Rcon } from 'rcon-client';

@Injectable()
export class SuccesService {
  private rcon: Rcon;

  constructor(private prisma: PrismaService) {
    this.rcon = new Rcon({
      host: 'localhost', // адрес сервера Minecraft
      port: 25555, // порт rcon
      password: process.env.RCON_PASSWOR,
    });
  }

  async getById(id: string) {
    const access = await this.prisma.acces.findUnique({
      where: {
        id: +id,
      },
    });

    if (!access) throw new NotFoundException('Data is not a found');

    return access;
  }

  // async rconConnection(command: string) {h
  //   const rcon = await Rcon.connect({
  //     host: 'localhost',
  //     port: 25575,
  //     password: '1234',
  //   });

  //   return rcon.send(command), rcon.end();
  // }

  create(Dto: CreateSucceDto) {
    return this.prisma.acces.create({
      data: Dto,
    });
  }

  getAll() {
    return this.prisma.acces.findMany();
  }

  async toggleDone(id: string) {
    const access = await this.getById(id);
    // const send = await this.rconConnection('easywl add' + access.username);
    try {
      const cmd = 'say' + ' ' + access.username;

      await this.rcon.connect();
      const response = this.rcon.send(cmd);
      await this.rcon.end();

      const updateDb = await this.prisma.acces.update({
        where: {
          id: access.id,
        },

        data: {
          isdone: !access.isdone,
        },
      });

      return { response, updateDb };
    } catch (err) {
      // throw err;
      return {
        status: 2,
        error: err,
      };
    }
  }

  async delete(id: string) {
    const access = await this.getById(id);

    return this.prisma.acces.delete({
      where: {
        id: access.id,
      },
    });
  }
}
