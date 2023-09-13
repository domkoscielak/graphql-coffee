import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';

@Injectable()
export class CoffeesService {
  async findAll() {
    return [];
  }

  async findOne(id: string) {
    console.log(id);
    return null;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    console.log(createCoffeeInput);
    return null;
  }
}
