import { Task } from "src/tasks/entities/task.entity";

export class Project {
    id: number;
    name: string;
    description: string;
    tasks: Array<Task>
}
