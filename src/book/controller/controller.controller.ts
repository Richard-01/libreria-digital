import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookService } from '../services/services.service';
import { CreateBookDto } from '../dto/createBookDto';
import { UpdateBookDto } from '../dto/updateBookDto';



@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }


    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('search') search?: string,
    ){
        return this.bookService.findAll(page, limit, search);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bookService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        return this.bookService.update(+id, updateBookDto);
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.bookService.remove(+id);
    }
}
