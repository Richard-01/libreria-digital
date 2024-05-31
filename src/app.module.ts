import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { SalesModule } from './sales/sales.module';
import config from './config/configDB';
import { Author } from './author/entity/author.entity';
import { Sales } from './sales/entity/sales.entity';
import { Book } from './book/entity/book.entity';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,
    envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.database,
      autoLoadEntities: true,
      synchronize: true,
      entities: [ Author, Book, Sales],
      extra: {
        ssl: true
      },
      ssl: process.env.DB_SSL === 'true',
    }),
    AuthorModule, 
    BookModule, 
    SalesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
