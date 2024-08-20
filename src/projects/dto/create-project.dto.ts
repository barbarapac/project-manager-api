import { IsNotEmpty, IsString, isString } from "class-validator";

export class CreateProjectDto {

    @IsNotEmpty({ message: 'O nome do projeto não pode ser vazio'})
    @IsString({ message: 'O nome precisa ser string'})
    name: string;
    
    @IsNotEmpty({ message: 'A descrição do projeto não pode ser vazia'})
    @IsString({ message: 'A descrição precisa ser string'})
    description: string
}
