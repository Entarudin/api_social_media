import { IFindUserOptions } from 'src/options/find-user.options.interface';
import { ChangeUserDto } from '../dto/change-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

export interface IUserRepository {
  save(dto: CreateUserDto): Promise<void>;
  findByLogin(login: string): Promise<User>;
  findBy(options: IFindUserOptions): Promise<User[]>;
  getList(): Promise<User[]>;
  getById(id: number): Promise<User>;
  change(id: number, dto: ChangeUserDto): Promise<User>;
  remove(id: number): Promise<void>;
}
