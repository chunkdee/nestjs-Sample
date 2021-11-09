import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagaService } from './paga.service';
import { CreatePagaDto } from './dto/create-paga.dto';
import { UpdatePagaDto } from './dto/update-paga.dto';

@Controller('paga')
export class PagaController {
  constructor(private readonly pagaService: PagaService) {}

  @Post()
  create(@Body() createPagaDto: CreatePagaDto) {
    return this.pagaService.create(createPagaDto);
  }

  @Get()
  findAll() {
    return this.pagaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagaDto: UpdatePagaDto) {
    return this.pagaService.update(+id, updatePagaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagaService.remove(+id);
  }
}
