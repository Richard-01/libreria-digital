import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateSalesDto {

    @IsString()
    @IsNotEmpty()
    client: string;

    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    dateSale: string;

    @IsNumber()
    @IsNotEmpty()
    bookId: number;

}