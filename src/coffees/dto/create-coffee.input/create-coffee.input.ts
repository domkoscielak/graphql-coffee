import { InputType } from '@nestjs/graphql';

@InputType({ description: 'New coffee data' })
export class CreateCoffeeInput {
  name: string;
  brand: string;
  flavors: string[];
}
