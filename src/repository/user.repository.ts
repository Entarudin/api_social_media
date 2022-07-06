import { ChangeUserDto } from 'src/dto/change-user.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/entity/user.entity';
import { IFindUserOptions } from 'src/options/find-user.options.interface';
import { IUserRepository } from './user.repository.interface';

export class UserRepository implements IUserRepository {
  save(dto: CreateUserDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByLogin(login: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findBy(options: IFindUserOptions): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  getList(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  getById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  change(id: number, dto: ChangeUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }

  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
