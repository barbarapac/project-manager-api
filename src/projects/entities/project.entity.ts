import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from "src/users/entities/user.entity"

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'description', nullable: false})
    description: string;
    
    @OneToMany(() => Task, (task) => task.project)
    tasks: Array<Task>

    @ManyToOne(() => User, (user) => user.projects)
    @JoinColumn()
    user : User
}
