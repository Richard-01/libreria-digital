import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from '../dto/createAuthorDto';
import { ApiPropertyOptional } from '@nestjs/swagger';


export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {

    @ApiPropertyOptional({ description: 'Author name (optional)', example: 'Richard' })
    name?: string;
  
    @ApiPropertyOptional({ description: 'LastName name (optional)', example: 'Montoya'})
    lastName?: string;
}