import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CreateAuthorDto {

    @ApiProperty({ description: 'Name of the Author', example: 'John' })
    @IsNotEmpty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Last Name of the Author', example: 'Doe Dalas' })
    @IsNotEmpty()
    @IsNotEmpty()
    lastName: string;
}