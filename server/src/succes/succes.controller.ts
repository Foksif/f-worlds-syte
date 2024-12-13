import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuccesService } from './succes.service';
import { CreateSucceDto } from './dto/create-succe.dto';

@Controller('succes')
export class SuccessController {
  constructor(private readonly succesService: SuccesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createSucceDto: CreateSucceDto) {
    return this.succesService.create(createSucceDto);
  }

  @Get()
  getAll() {
    return this.succesService.getAll();
  }

  @Patch(':id')
  async toggleDone(@Param('id') id: string) {
    return this.succesService.toggleDone(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.succesService.delete(id);
  }
}
