import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmConfigModule } from './config/type-orm-config.module';
import { HelpersModule } from './helpers/helpers.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from "cache-manager-redis-store";

@Module({
  imports: [
    ProjectsModule, 
    UsersModule, 
    TasksModule, 
    TypeOrmConfigModule, 
    HelpersModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: 300,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
