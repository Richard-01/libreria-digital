import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from '../../book/entity/book.entity';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: string;

  @Column()
  dateSale: Date;

  @ManyToOne(() => Book, book => book.sales)
  book: Book;
}
