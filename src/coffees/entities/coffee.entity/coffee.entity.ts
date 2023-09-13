import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Coffee {
  @Field(() => ID, { description: 'Id of the coffee' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
