import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { SalesService } from '../services/services.service';
import { CreateAuthorDto } from '../dto/createAuthorDto';
import { UpdateAuthorDto  } from '../dto/updateAuthorDto';
@Controller('author')
export class ControllerController {
    constructor(private readonly authorService: SalesService) { }

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    findAll(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('search') search: string,
    ){
        return this.authorService.findAll(page, limit, search);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.authorService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorService.update(+id, updateAuthorDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.authorService.remove(+id);
    }
}
