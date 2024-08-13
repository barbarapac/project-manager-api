import { Project } from "src/projects/entities/project.entity";

export class Task {
    id: number;
    name: string;
    status: TaskStatus;
    project: Project;
}

export enum TaskStatus{
    pending = 'pending',
    completed = 'completed',
}