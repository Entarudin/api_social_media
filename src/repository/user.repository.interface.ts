import { IFindUserOptions } from 'src/options/find-user.options.interface';
import { User } from '../entity/user.entity';

/**
 * @interface IUserRepository
 */

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByLogin(login: string): Promise<User>;
  findBy(options: IFindUserOptions): Promise<User[]>;
  getList(): Promise<User[]>;
  getById(id: number): Promise<User>;
  change(user: User): Promise<User>;
  remove(id: number): Promise<void>;
}
