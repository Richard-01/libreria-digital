import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entity/author.entity';
import { CreateAuthorDto } from '../dto/createAuthorDto';
import { UpdateAuthorDto } from '../dto/updateAuthorDto';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Author) private readonly authorRepository: Repository<Author>) {}

    async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const author = this.authorRepository.create(createAuthorDto);
        return this.authorRepository.save(author);
    }

    async findAll(
        page: number,
        limit: number,
        search: string
    ): Promise<Author[]> {
        const query = this.authorRepository.createQueryBuilder('author')
           .leftJoinAndSelect('author.books', 'books')
           .skip((page - 1) * limit)
           .take(limit);

        if (search) {
            query.where('author.name LIKE :search', { search: `%${search}%` });
        }

        query.orderBy('author.name', 'ASC');

        return query.getMany();
    }

    async findOne(id: number): Promise<Author> {
        return this.authorRepository.findOne({
            where: {id},
            relations: ['books']
        })
    }

    async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
        await this.authorRepository.update(id, updateAuthorDto);
        return this.authorRepository.findOne({
            where: {id},
            relations: ['books']
        });
    }

    async remove(id: number): Promise<void> {
        await this.authorRepository.softDelete(id);
    }

}
