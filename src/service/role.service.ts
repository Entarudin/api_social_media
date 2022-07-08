import { Injectable } from '@nestjs/common';
import { ChangeRoleDto } from 'src/dto/change-role.dto';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { Role } from 'src/entity/Role/role.entity';
import { IRoleRepository } from 'src/repository/role.repository.interface';
import { IRoleService } from './role.service.interface';

@Injectable()
export class RoleService implements IRoleService {
  constructor(private readonly roleRepository: IRoleRepository) {}

  public async fetch(): Promise<Role[]> {
    return await this.roleRepository.findAll();
  }

  public async define(dto: CreateRoleDto): Promise<Role> {
    const exists = await this.roleRepository.findByName(dto.name);
    if (exists) {
      return exists;
    }
    return this.create(dto);
  }

  public async getByIds(ids: number[]): Promise<Role[]> {
    return await this.roleRepository.findByIds(ids);
  }

  public async create(dto: CreateRoleDto): Promise<Role> {
    const role = new Role(dto.name, dto.description);
    await this.roleRepository.save(role);
    return role;
  }

  public async findByName(name: string): Promise<Role | undefined> {
    const role = await this.roleRepository.findByName(name);
    return role;
  }

  public async edit(id: number, dto: ChangeRoleDto): Promise<Role> {
    const role = await this.roleRepository.getOneById(id);
    if (dto.desription) {
      role.changeDescription(dto.desription);
    }
    if (dto.name) {
      role.rename(dto.name);
    }
    await this.roleRepository.update(role);
    return role;
  }

  public async remove(id: number): Promise<void> {
    return await this.roleRepository.removeById(id);
  }
}
