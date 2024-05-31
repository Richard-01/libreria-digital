import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateBookDto {

    @ApiProperty({description: 'Name of the book to create', example: 'Clean Code'})
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({description: 'Description of the book to create', example: 'Basic principles of clean code.'})
    @IsString()
    @IsNotEmpty()
    description: string;
}