import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from "src/users/entities/user.entity"
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Project {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty({ description: 'Nome do projeto'})
    @Column({name: 'name', nullable: false})
    name: string;

    @ApiProperty({description: 'Descrição do projeto'})
    @Column({name: 'description', nullable: false})
    description: string;
    
    @OneToMany(() => Task, (task) => task.project)
    tasks: Array<Task>

    @ManyToOne(() => User, (user) => user.projects)
    @JoinColumn()
    user : User
}
