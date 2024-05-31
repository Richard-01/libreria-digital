import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";


export class CreateSalesDto {

    @ApiProperty({ description: 'Customer of the sale', example: 'Jean Preat' })
    @IsString()
    @IsNotEmpty()
    client: string;

    @ApiProperty({ description: 'Date of the sale (format YYYYY-MM-DD)', example: '2024-05-31' })
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    dateSale: string;

    @ApiProperty({ description: 'ID of book sold', example: 1 })
    @IsNumber()
    @IsNotEmpty()
    bookId: number;

}