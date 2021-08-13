import { UsersRepository } from '../users.repository';
import { IUseCase } from '../../base/usecase.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserSerializer } from '../serializers/user.serializer';

export class CreateUserUseCase implements IUseCase {
  private readonly usersRepository: UsersRepository = new UsersRepository();
  private readonly createUserDto: CreateUserDto;

  constructor(createUserDto: CreateUserDto) {
    this.createUserDto = createUserDto;
  }

  execute(): any {
    const user = this.usersRepository.createUser(this.createUserDto);
    return new UserSerializer(user).serialize();
  }

  getInstance(): IUseCase {
    return new CreateUserUseCase(this.createUserDto);
  }

  getName(): string {
    return 'CreateUserUseCase';
  }
}
