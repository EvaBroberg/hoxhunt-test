import { Resolver, Query, Arg } from 'type-graphql';

import { User } from '../entities/user';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';

@Resolver(User)
export class UserResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @Query(returns => [User])
  users(): Promise<User[]> {
    return this.userRepository.find({
      take: 1500
    });
  }
}



