import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Project } from "src/projects/entities/project.entity";
import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({name: 'firtName', nullable: false})
    @ApiProperty({ description: 'Nome do usuário'})
    firtName: string;

    @Column({name: 'lastName', nullable: false})
    @ApiProperty()
    @ApiProperty({ description: 'Sobrenome do usuário'})
    lastName: string;

    @Column({name: 'email', nullable: false})
    @ApiProperty()
    @ApiProperty({ description: 'E-mail do usuário'})
    email: string;

    @Column({name: 'password', nullable: false})
    @ApiProperty()
    @ApiProperty({ description: 'Senha para autenticação do usuário'})
    password: string;

    @OneToMany(() => Project, (project) => project.user)
    @ApiProperty()
    projects: Array<Project>;
    
    @OneToMany(() => Task, (task) => task.user)
    @ApiProperty()
    tasks: Array<Task>
}
