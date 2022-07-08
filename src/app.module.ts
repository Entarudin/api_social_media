import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { SqlRoleRepository } from './repository/sql/sql-role.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService, SqlRoleRepository],
})
export class AppModule {}
