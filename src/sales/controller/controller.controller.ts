import { UseGuards,Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TimeGuard } from 'src/common/guards/time.guard';
import { SalesService } from '../services/services.service';
import { CreateSalesDto } from '../dto/createSalesDto';
import { UpdateBookDto } from '../dto/updateSalesDto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Sales')
@Controller('sales')
@UseGuards(TimeGuard)
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new sale' })
    @ApiCreatedResponse({ description: 'The sale has been successfully created.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    create(@Body() createSalesDto: CreateSalesDto){
        return this.salesService.create(createSalesDto);
    }

    @Get()
    @ApiOperation({ summary: 'Retrieve a list of all sales' })
    @ApiOkResponse({ description: 'The sales have been successfully retrieved.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    findAll(
        @Query('page') page: number, 
        @Query('limit') limit: number, 
        @Query('fromDate') fromDate?: Date, 
        @Query('toDate') toDate?: Date
    ){
        const from = fromDate ? new Date(fromDate) : null;
        const to = toDate ? new Date(toDate) : null;

        return this.salesService.findAll(page, limit,from, to);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a sale by ID' })
    @ApiOkResponse({ description: 'The sale has been successfully retrieved.' })
    @ApiNotFoundResponse({ description: 'The specified sale could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    findOne(@Param('id') id: number) {
        return this.salesService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a sale by ID' })
    @ApiOkResponse({ description: 'The sale has been successfully updated.' })
    @ApiNotFoundResponse({ description: 'The specified sale could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    update(@Param('id') id: number, @Body() updateSalesDto: UpdateBookDto) {
        return this.salesService.update(+id, updateSalesDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a sale by ID' })
    @ApiOkResponse({ description: 'The sale has been successfully deleted.' })
    @ApiNotFoundResponse({ description: 'The specified sale could not be found.' })
    @ApiBadRequestResponse({ description: 'The request could not be understood or was missing required parameters.' })
    @ApiInternalServerErrorResponse({ description: 'An internal server error occurred.' })
    remove(@Param('id') id: number) {
        return this.salesService.remove(+id);
    }
}
