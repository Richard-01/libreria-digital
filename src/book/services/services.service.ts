import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entity/book.entity';
import { CreateBookDto } from '../dto/createBookDto';
import { UpdateBookDto } from '../dto/updateBookDto';

@Injectable()
export class BookService {
    constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

    async create(createBookDto: CreateBookDto): Promise<Book> {    
        const book = this.bookRepository.create(createBookDto);
        return this.bookRepository.save(book);
    }

    async findAll(page: number, limit: number, search: string): Promise<Book[]> {
        const query = this.bookRepository.createQueryBuilder('book')
            .leftJoinAndSelect('book.authors', 'authors')
            .skip((page - 1) * limit)
            .take(limit);


        if (search) {
            query.where('book.title LIKE :search', { search: `%${search}%` });
        }

        query.orderBy('book.title', 'ASC');

        return query.getMany();
    }

    async findOne(id: number): Promise<Book> {
        return this.bookRepository.findOne({
            where: {id},
            relations: ['authors']
        });
    }

    async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
        await this.bookRepository.update(id, updateBookDto);
        return this.bookRepository.findOne({
            where: {id},
            relations: ['authors']
        });
    }

    async remove(id: number): Promise<void> {
        await this.bookRepository.softDelete(id);
    }
}
