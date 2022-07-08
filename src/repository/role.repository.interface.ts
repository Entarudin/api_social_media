import { Role } from 'src/entity/Role/role.entity';

/**
 * @interface IRoleRepository
 */

export interface IRoleRepository {
  save(role: Role): Promise<void>;
  findByName(name: string): Promise<Role | undefined>;
  findAll(): Promise<Role[]>;
  findByIds(ids: number[]): Promise<Role[]>;
  update(role: Role): Promise<void>;
  removeById(id: number): Promise<void>;
  getOneById(id: number): Promise<Role>;
}
