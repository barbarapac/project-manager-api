import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, isString } from "class-validator";

export class CreateProjectDto {

    @ApiProperty({ description: 'Nome do projeto'})
    @IsNotEmpty({ message: 'O nome do projeto não pode ser vazio'})
    @IsString({ message: 'O nome precisa ser string'})
    name: string;
    
    @ApiProperty({ description: 'Descrição do projeto'})
    @IsNotEmpty({ message: 'A descrição do projeto não pode ser vazia'})
    @IsString({ message: 'A descrição precisa ser string'})
    description: string
}
