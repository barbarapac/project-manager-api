import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Project } from 'src/projects/entities/project.entity';
import { PaginationModule } from 'src/helpers/pagination/pagination.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Project]), PaginationModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
