import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sales } from '../entity/sales.entity';
import { Repository } from 'typeorm';
import { CreateSalesDto } from '../dto/createSalesDto';
import { UpdateBookDto } from '../dto/updateSalesDto';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sales) private readonly salesRepository: Repository<Sales>) {}

    async create(createSalesDto: CreateSalesDto): Promise<Sales> {
        const createSales = this.salesRepository.create(createSalesDto);
        return this.salesRepository.save(createSales);
    }

    async findAll(page: number, limit: number, fromDate: Date, toDate: Date): Promise<Sales[]> {
        const query = this.salesRepository.createQueryBuilder('sales')
            .leftJoinAndSelect('sales.book', 'book')
            .skip((page - 1) * limit)
            .take(limit);


        if (fromDate) {
            query.andWhere('sales.dateSale >= :fromDate', { fromDate });
        }

        if (toDate) {
            query.andWhere('sales.dateSale <= :toDate', { toDate });
        }

        query.orderBy('sales.dateSale', 'ASC');

        return query.getMany();
    }

    async findOne(id: number): Promise<Sales> {
        return this.salesRepository.findOne({
            where: { id },
            relations: ['book'],
        });
    }

    async update(id: number, updateSalesDto: UpdateBookDto): Promise<Sales> {
        await this.salesRepository.update(id, updateSalesDto);
        return this.salesRepository.findOne({
            where: { id },
            relations: ['book'],
        })
    }

    async remove(id: number): Promise<void> {
        await this.salesRepository.softDelete(id);
    }
}
