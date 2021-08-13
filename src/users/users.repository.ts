import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  getAllUsers(): User[] {
    return [new User(1, 'bao', 24, 'abc'), new User(2, 'lionel', 32, 'abc')];
  }

  createUser(userDto: CreateUserDto): User {
    const { name, age, password } = userDto;

    return new User(3, name, age, password);
  }
}
