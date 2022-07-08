import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/config/database.config';
import { User } from 'src/entity/user.entity';
import { Role } from 'src/entity/Role/role.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: DatabaseConfig,
    }),
    TypeOrmModule.forFeature([User, Role]),
  ],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class DataModule {}
