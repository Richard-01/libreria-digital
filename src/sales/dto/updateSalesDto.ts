import { PartialType } from "@nestjs/mapped-types";
import { CreateSalesDto } from '../dto/createSalesDto';
import { ApiPropertyOptional } from "@nestjs/swagger";


export class UpdateBookDto extends PartialType(CreateSalesDto) {
    @ApiPropertyOptional({ description: 'Client of the sale (optional)', example: 'John Doe' })
    client?: string;
  
    @ApiPropertyOptional({ description: 'Date of the sale (format YYYY-MM-DD)', example: '2024-05-31' })
    dateSale?: string;
  
    @ApiPropertyOptional({ description: 'ID of the sold book (optional)', example: 1 })
    bookId?: number;

}