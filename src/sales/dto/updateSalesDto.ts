import { PartialType } from "@nestjs/mapped-types";
import { CreateSalesDto } from '../dto/createSalesDto';


export class UpdateBookDto extends PartialType(CreateSalesDto) {}