import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmConfigModule } from './config/type-orm-config.module';
import { HelpersModule } from './helpers/helpers.module';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import * as redisStore from "cache-manager-redis-store";
import { APP_GUARD } from '@nestjs/core';
import { AuthGuardService } from './auth/auth-guard/auth-guard.service';

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
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardService
    }
  ],
})
export class AppModule {}
