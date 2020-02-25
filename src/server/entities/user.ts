import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  department: string;

  @Field({ nullable: true })
  @Column()
  failureRate?: number;
}
