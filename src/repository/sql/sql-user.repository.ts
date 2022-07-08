import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { IFindUserOptions } from 'src/options/find-user.options.interface';
import { IUserRepository } from '../user.repository.interface';

/**
 * @class SqlUserRepository
 */

@Injectable()
export class SqlUserRepository implements IUserRepository {
  save(user: User): Promise<void> {
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
  change(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
