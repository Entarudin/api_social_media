import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/service/services.module';
import { RolesController } from './role.controller';

@Module({
  imports: [ServicesModule],
  controllers: [RolesController],
})
export class ControllersModule {}
