import { Module } from '@nestjs/common';
import { SuccesService } from './succes.service';
import { SuccessController } from './succes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SuccessController],
  providers: [SuccesService, PrismaService],
})
export class SuccesModule {}
