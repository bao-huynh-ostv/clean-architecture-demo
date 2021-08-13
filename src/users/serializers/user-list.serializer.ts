import { User } from '../entities/user.entity';
import { UserOut } from './base.serializer';
import { UserSerializer } from './user.serializer';

export class UserListSerializer {
  constructor(private usersIn: User[]) {}

  serialize(): UserOut[] {
    const usersOut: UserOut[] = [];

    this.usersIn.forEach((user, index) => {
      const userSerializer = new UserSerializer(user);
      usersOut[index] = userSerializer.serialize();
    });

    return usersOut;
  }
}
