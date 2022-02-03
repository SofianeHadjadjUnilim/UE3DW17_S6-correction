import { InputType, Field, ObjectType, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
}

@ObjectType()
export class CreateUserDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly firstname: string;
  @Field()
  readonly lastname: string;
  @Field()
  readonly email: string;
}