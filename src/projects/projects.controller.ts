import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, Req } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FilterDto } from 'src/helpers/pagination/dto/filter.dto';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { Console } from 'console';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    console.log(createProjectDto);
    const username = request.user?.username;
    return this.projectsService.create(username, createProjectDto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(@Req() request, @Query() filter?: FilterDto) {
    const username = request.user?.username;
    return this.projectsService.findAllPaginated(username, filter);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  findOne(@Req() request, @Param('id') id: number) {
    const username = request.user?.username;    
    return this.projectsService.findOne(username, id);
  }

  @Patch(':id')
  update(@Req() request, @Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    const username = request.user?.username;    
    return this.projectsService.update(username, id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.remove(id);
  }
}
