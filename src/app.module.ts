import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from './controller/controllers.module';
import { DataModule } from './data/data.module';
import { SqlRoleRepository } from './repository/sql/sql-role.repository';
import { ServicesModule } from './service/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataModule,
    ControllersModule,
    ServicesModule,
  ],
  controllers: [],
  providers: [SqlRoleRepository],
})
export class AppModule {}
