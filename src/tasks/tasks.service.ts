import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Project } from 'src/projects/entities/project.entity';
import { FilterDto } from 'src/helpers/pagination/dto/filter.dto';
import { PageService } from 'src/helpers/pagination/page/page.service';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository : Repository<Task>,  

    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    
    private readonly pageService : PageService,
  ){}

  async create(createTaskDto: CreateTaskDto) {
    const project = await this.projectRepository.findOneByOrFail({
      id: createTaskDto.projectId
    });
    return this.taskRepository.save({... createTaskDto, project });
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOne({
      where : { id },
    });
  }

  findAllPaginated(filter?: FilterDto) {
    if (!filter) {
      return this.findAll();
    }

    return this.pageService.paginate(this.taskRepository, {    
      page: filter.page,    
      pageSize: filter.pageSize,
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
