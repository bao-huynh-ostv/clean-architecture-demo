import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseCaseLocator } from '../usecase-locator/usecase.locator';
import { UserAdapter } from './users.adapter';
import { GetAllUsersUseCase } from './usecases/get-all-users.usecase';
import { CreateUserUseCase } from './usecases/create-user.usecase';

@Controller('users')
export class UsersController {
  private useCaseLocator = UseCaseLocator.getInstance();

  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const useCase = this.useCaseLocator.getUseCase(
      new CreateUserUseCase(createUserDto),
    );
    return new UserAdapter(useCase).serialize();
  }

  @Get()
  findAll() {
    const useCase = this.useCaseLocator.getUseCase(new GetAllUsersUseCase());
    return new UserAdapter(useCase).serialize();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
