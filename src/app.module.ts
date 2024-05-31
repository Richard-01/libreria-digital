import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { SalesModule } from './sales/sales.module';


@Module({
  imports: [AuthorModule, BookModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
