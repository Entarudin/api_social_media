import { Injectable } from '@nestjs/common';
import { Role } from 'src/entity/Role/role.entity';
import { Connection, Repository, In } from 'typeorm';
import { IRoleRepository } from '../role.repository.interface';

/**
 * @class SqlRoleRepository
 */

@Injectable()
export class SqlRoleRepository implements IRoleRepository {
  public readonly repository: Repository<Role> =
    this.connection.getRepository(Role);

  public constructor(private readonly connection: Connection) {}

  async findByName(name: string): Promise<Role> {
    const role = await this.repository.findOne({
      where: {
        _name: name,
      },
    });

    return role;
  }

  async findAll(): Promise<Role[]> {
    const roles = await this.repository.find({});
    return roles;
  }

  async findByIds(ids: number[]): Promise<Role[]> {
    const roles = await this.repository.find({
      where: {
        _id: ids.length ? In(ids) : 0,
      },
    });

    return roles;
  }

  async update(role: Role): Promise<void> {
    await this.repository.save(role);
  }

  async removeById(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async getOneById(id: number): Promise<Role> {
    try {
      const role = await this.repository.findOneOrFail({
        where: { _id: id },
      });
      return role;
    } catch (e) {
      throw new Error('Role not found.');
    }
  }

  async save(role: Role): Promise<void> {
    await this.repository.save(role);
  }
}
