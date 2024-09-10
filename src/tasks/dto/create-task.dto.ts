import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TaskStatus } from "../entities/task.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {

    @IsNotEmpty({ message: 'O nome da tarefa não pode ser vazio'})
    @IsString({ message: 'O nome precisa ser string'})
    @ApiProperty()
    name: string;

    @IsEnum(TaskStatus, { message: 'O status precisa ser pending ou completed'})
    @ApiProperty()
    status: TaskStatus;

    @IsNotEmpty({ message: 'O código do projeto não pode ser vazio'})
    @IsNumber()
    @ApiProperty()
    projectId: number
}
