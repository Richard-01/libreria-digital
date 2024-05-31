import { UseGuards,Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TimeGuard } from 'src/common/guards/time.guard';
import { SalesService } from '../services/services.service';
import { CreateSalesDto } from '../dto/createSalesDto';
import { UpdateBookDto } from '../dto/updateSalesDto';

@Controller('sales')
@UseGuards(TimeGuard)
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Post()
    create(@Body() createSalesDto: CreateSalesDto){
        return this.salesService.create(createSalesDto);
    }

    @Get()
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
    findOne(@Param('id') id: number) {
        return this.salesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateSalesDto: UpdateBookDto) {
        return this.salesService.update(+id, updateSalesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.salesService.remove(+id);
    }
}
