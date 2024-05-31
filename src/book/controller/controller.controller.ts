import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookService } from '../services/services.service';
import { CreateBookDto } from '../dto/createBookDto';
import { UpdateBookDto } from '../dto/updateBookDto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Books')
@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new book' })
    @ApiCreatedResponse({ description: 'The book has been successfully created' })
    @ApiBadRequestResponse({ description: 'The book has not been created' })
    @ApiInternalServerErrorResponse({ description: 'The book has not been created' })
    @ApiNotFoundResponse({ description: 'The book has not been created' })
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }


    @Get()
    @ApiOperation({ summary: 'Find all books' })
    @ApiOkResponse({ description: 'The books have been successfully found' })
    @ApiBadRequestResponse({ description: 'The books have not been found' })
    @ApiInternalServerErrorResponse({ description: 'The books have not been found' })
    @ApiNotFoundResponse({ description: 'The books have not been found' })
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('search') search?: string,
    ){
        return this.bookService.findAll(page, limit, search);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find one book' })
    @ApiOkResponse({ description: 'The book has been successfully found' })
    @ApiBadRequestResponse({ description: 'The book has not been found' })
    @ApiInternalServerErrorResponse({ description: 'The book has not been found' })
    @ApiNotFoundResponse({ description: 'The book has not been found' })
    findOne(@Param('id') id: string) {
        return this.bookService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a book' })
    @ApiOkResponse({ description: 'The book has been successfully updated' })
    @ApiBadRequestResponse({ description: 'The book has not been updated' })
    @ApiInternalServerErrorResponse({ description: 'The book has not been updated' })
    @ApiNotFoundResponse({ description: 'The book has not been updated' })
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        return this.bookService.update(+id, updateBookDto);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Delete a book' })
    @ApiOkResponse({ description: 'The book has been successfully deleted' })
    @ApiBadRequestResponse({ description: 'The book has not been deleted' })
    @ApiInternalServerErrorResponse({ description: 'The book has not been deleted' })
    @ApiNotFoundResponse({ description: 'The book has not been deleted' })
    remove(@Param('id') id: string) {
        return this.bookService.remove(+id);
    }
}
