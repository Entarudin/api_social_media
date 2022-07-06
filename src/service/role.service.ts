import { ChangeRoleDto } from 'src/dto/change-role.dto';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { Role } from 'src/entity/role.entity';
import { IRoleService } from './role.service.interface';

export class RoleService implements IRoleService {
  save(dto: CreateRoleDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  find(value: string): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  change(id: number, dto: ChangeRoleDto): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
