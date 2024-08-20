import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TaskStatus } from "../entities/task.entity";

export class CreateTaskDto {

    @IsNotEmpty({ message: 'O nome da tarefa não pode ser vazio'})
    @IsString({ message: 'O nome precisa ser string'})
    name: string;

    @IsEnum(TaskStatus, { message: 'O status precisa ser pending ou completed'})
    status: TaskStatus;

    @IsNotEmpty({ message: 'O código do projeto não pode ser vazio'})
    @IsNumber()
    projectId: number
}
