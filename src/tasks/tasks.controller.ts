import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FilterDto } from 'src/helpers/pagination/dto/filter.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ description: 'Cria uma tarefa associada a um projeto'})
  create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    const username = request.user?.username;

    return this.tasksService.create(username, createTaskDto);
  }

  @Get()
  @ApiOperation({ description: 'Lista todas as tarefas cadastradas'})
  @UseInterceptors(CacheInterceptor)
  findAll(@Req() request, @Query() filter?: FilterDto) {
    const username = request.user?.username;

    return this.tasksService.findAllPaginated(username, filter);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @ApiOperation({ description: 'Lista uma tarefa filtrado por código'})
  findOne(@Req() request, @Param('id') id: number) {
    const username = request.user?.username;

    return this.tasksService.findOne(username, id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Atualiza uma tarefa cadastrada'})
  update(@Req() request, @Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    const username = request.user?.username;

    return this.tasksService.update(username, id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Remove uma tarefa a partir do código'})
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
