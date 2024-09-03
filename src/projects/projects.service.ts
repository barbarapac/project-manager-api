import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PageService } from 'src/helpers/pagination/page/page.service';
import { FilterDto } from 'src/helpers/pagination/dto/filter.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository : Repository<Project>,
    private readonly usersService : UsersService,
    private readonly pageService : PageService,
  ){}

  async create(username : string, createProjectDto: CreateProjectDto) {
    const user = await this.usersService.findOneByOrFail({
      email: username
    });

    return this.projectRepository.save({ 
      ...createProjectDto, 
      user 
    });
  }

  async findAll(userEmail: string) {
    const user = await this.usersService.findOneByOrFail({ email: userEmail });
    return this.projectRepository.find({ where: { user } })
  }

  async findOne(userEmail: string, id: number) {
    const user = await this.usersService.findOneByOrFail({ email: userEmail });

    return this.projectRepository.findOne({
      where: { id, user },
      relations: { tasks: true },
    });      
  }

  async findAllPaginated(userEmail: string, filter?: FilterDto) {
    if (!filter) {
      return this.findAll(userEmail);
    }

    const user = await this.usersService.findOneByOrFail({ email: userEmail });

    return this.pageService.paginate(
      this.projectRepository, 
      {    
        page: filter.page,    
        pageSize: filter.pageSize,
      },
      { user },
    );
  }

  async update(userEmail: string, id: number, updateProjectDto: UpdateProjectDto) {
    const user = await this.usersService.findOneByOrFail({ email: userEmail });
    const project = this.findOne(user.email, id);
    
    if (!project) {
      throw new NotFoundException();
    }
    
    return this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    await this.projectRepository.softDelete(id);
  }
}
