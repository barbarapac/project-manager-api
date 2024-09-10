import { ApiProperty } from "@nestjs/swagger";
import { Project } from "src/projects/entities/project.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn  } from 'typeorm';

export enum TaskStatus{
    pending = 'pending',
    completed = 'completed',
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'Identificado unico da tarefa'})
    id: number;

    @Column({name: 'name', nullable: false})
    @ApiProperty()
    @ApiProperty({ description: 'Nome da tarefa'})
    name: string;
    
    @Column({name: 'status', default: TaskStatus.pending, nullable: false})
    @ApiProperty()
    @ApiProperty({ description: 'Status de execução da tarefa'})
    status: TaskStatus;
    
    @ManyToOne(() => Project, (project) => project.tasks, {
        cascade: true,
        nullable: false,
        })
    project: Project;

    @ManyToOne(() => User, (user) => user.projects)
    @JoinColumn()
    user : User
}