import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    firtName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    // @IsStrongPassword()
    password: string;
}
