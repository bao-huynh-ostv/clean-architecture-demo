import { UsersRepository } from '../users.repository';
import { IUseCase } from '../../base/usecase.interface';
import { UserListSerializer } from '../serializers/user-list.serializer';

export class GetAllUsersUseCase implements IUseCase {
  private readonly usersRepository: UsersRepository = new UsersRepository();

  execute(): any {
    const users = this.usersRepository.getAllUsers();
    return new UserListSerializer(users).serialize();
  }

  getInstance(): IUseCase {
    return new GetAllUsersUseCase();
  }

  getName(): string {
    return 'GetAllUsersUseCase';
  }
}
