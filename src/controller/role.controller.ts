import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ChangeRoleDto } from 'src/dto/change-role.dto';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { Role } from 'src/entity/Role/role.entity';
import { RoleService } from 'src/service/role.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('roles')
export class RolesController {
  constructor(private roleService: RoleService) {}

  @Get('/')
  async findAll(): Promise<Role[]> {
    const roles = await this.roleService.fetch();
    return roles;
  }

  @Post('/')
  async create(@Body() dto: CreateRoleDto): Promise<Role> {
    const role = await this.roleService.create(dto);
    return role;
  }

  @Put('/:id')
  async edit(
    @Param('id') id: number,
    @Body() dto: ChangeRoleDto,
  ): Promise<Role> {
    const role = await this.roleService.edit(id, dto);
    return role;
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.roleService.remove(id);
  }
}
