import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly DEFAULT_SALT_ROUNDS = 10;

  constructor(
    @InjectRepository(User)
    private readonly usersRepository : Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    const hashPassword = hashSync(
      createUserDto.password,
      this.DEFAULT_SALT_ROUNDS
    );

    createUserDto.password = hashPassword;

    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOneByOrFail(criterio: Partial<User>){
    return this.usersRepository.findOneByOrFail(criterio);
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
