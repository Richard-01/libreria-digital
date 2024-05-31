import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from '../dto/createAuthorDto';


export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}