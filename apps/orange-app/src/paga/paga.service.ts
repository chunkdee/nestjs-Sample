import { Injectable } from '@nestjs/common';
import { CreatePagaDto } from './dto/create-paga.dto';
import { UpdatePagaDto } from './dto/update-paga.dto';

@Injectable()
export class PagaService {

  private readonly pagaCollect: any = require('paga-collect');

  create(createPagaDto: CreatePagaDto) {
    return 'This action adds a new paga';
  }

  findAll() {
    return `This action returns all paga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paga`;
  }

  update(id: number, updatePagaDto: UpdatePagaDto) {
    return `This action updates a #${id} paga`;
  }

  remove(id: number) {
    return `This action removes a #${id} paga`;
  }
}
