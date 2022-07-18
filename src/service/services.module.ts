import { Module, Provider } from '@nestjs/common';
import { SqlRoleRepository } from 'src/repository/sql/sql-role.repository';
import { RoleService } from './role.service';

const repositoriesProvider: Provider[] = [
  {
    provide: 'IRoleRepository',
    useClass: SqlRoleRepository,
  },
];

@Module({
  providers: [RoleService, ...repositoriesProvider],
  exports: [RoleService],
})
export class ServicesModule {}
