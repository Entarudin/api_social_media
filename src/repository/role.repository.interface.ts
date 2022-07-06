import { ChangeRoleDto } from 'src/dto/change-role.dto';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { Role } from 'src/entity/role.entity';

export interface IRoleRepository {
  save(dto: CreateRoleDto): Promise<void>;
  change(id: number, dto: ChangeRoleDto): Promise<Role>;
  remove(id: number): Promise<void>;
}
