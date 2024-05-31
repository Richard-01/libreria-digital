import { PartialType } from "@nestjs/mapped-types";
import { CreateBookDto } from "./createBookDto";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateBookDto extends PartialType(CreateBookDto) {

    @ApiPropertyOptional({ description: 'Name of the book to create (optional)', example: 'The Clean Code'})
    title?: string;

    @ApiPropertyOptional({ description: 'Description of the book to create (optional)', example: 'The Basic principles....'})
    description?: string;
}