import { Project } from "src/projects/entities/project.entity";
import { Task } from "src/tasks/entities/task.entity";

export class User {
    id: number;
    firtName: string;
    lastName: string;
    email: string;
    password: string;
    projects: Array<Project>;
    tasks: Array<Task>
}
