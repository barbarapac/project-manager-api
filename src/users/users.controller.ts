import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/auth-guard/auth-guard.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  @ApiOperation({ description: 'Cadastra um novo usuário'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiBearerAuth()
  @Get()
  @ApiOperation({ description: 'Lista todos os usuários cadastrados'})
  findAll() {
    return this.usersService.findAll();
  }

  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({ description: 'Lista um usuário filtrado por código'})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ description: 'Atualiza um usuário cadastrado'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ description: 'Remove um usuário a partir do código'})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
