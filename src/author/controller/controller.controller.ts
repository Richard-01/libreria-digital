import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { SalesService } from '../services/services.service';
import { CreateAuthorDto } from '../dto/createAuthorDto';
import { UpdateAuthorDto  } from '../dto/updateAuthorDto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Author's")
@Controller('author')
export class ControllerController {
    constructor(private readonly authorService: SalesService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new author' })
    @ApiCreatedResponse({ description: 'The author has been successfully created.' })
    @ApiNotFoundResponse({ description: 'The specified resource could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieve a list of all authors' })
    @ApiOkResponse({ description: 'The authors have been successfully retrieved.' })
    @ApiNotFoundResponse({ description: 'The specified resource could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    findAll(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query('search') search: string,
    ){
        return this.authorService.findAll(page, limit, search);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve an author by ID' })
    @ApiOkResponse({ description: 'The author has been successfully retrieved.' })
    @ApiNotFoundResponse({ description: 'The specified resource could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    findOne(@Param('id') id: number) {
        return this.authorService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update an author by ID' })
    @ApiOkResponse({ description: 'The author has been successfully updated.' })
    @ApiNotFoundResponse({ description: 'The specified resource could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    update(@Param('id') id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorService.update(+id, updateAuthorDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an author by ID' })
    @ApiOkResponse({ description: 'The author has been successfully deleted.' })
    @ApiNotFoundResponse({ description: 'The specified resource could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    remove(@Param('id') id: number) {
        return this.authorService.remove(+id);
    }
}
