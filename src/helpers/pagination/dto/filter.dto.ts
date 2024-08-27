import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsEnum } from "class-validator";

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

export class FilterDto {
    @Transform(({ value }) => parseInt(value))
    @IsNumber({}, { message: 'O atributo "page" precisa ser do um número' })
    public page: number = DEFAULT_PAGE;

    @Transform(({ value }) => parseInt(value))
    @IsNumber({}, { message: 'O atributo "pageSize" precisa ser do um número' })
    public pageSize: number = DEFAULT_PAGE_SIZE;
}