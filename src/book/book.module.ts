import { Module } from '@nestjs/common';
import { BookController } from './controller/controller.controller';
import { BookService } from './services/services.service';
import { Book } from './entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
