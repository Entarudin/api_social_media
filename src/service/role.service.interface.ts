import { ChangeRoleDto } from 'src/dto/change-role.dto';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { Role } from 'src/entity/Role/role.entity';

export interface IRoleService {
  create(dto: CreateRoleDto): Promise<Role>;
  findByName(name: string): Promise<Role | undefined>;
  edit(id: number, dto: ChangeRoleDto): Promise<Role>;
  remove(id: number): Promise<void>;
}
