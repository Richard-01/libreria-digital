import { IsNotEmpty } from "class-validator";


export class CreateAuthorDto {

    @IsNotEmpty()
    @IsNotEmpty()
    name: string;
}