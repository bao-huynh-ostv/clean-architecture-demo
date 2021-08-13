import { User } from '../entities/user.entity';
import { UserOut } from './base.serializer';

export class UserSerializer {
  constructor(private userIn: User) {}

  serialize(): UserOut {
    const { id, name, age } = this.userIn;

    return new UserOut(id, name, age);
  }
}
