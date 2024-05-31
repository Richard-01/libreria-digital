import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Author } from '../../author/entity/author.entity';
import { Sales } from '../../sales/entity/sales.entity';


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Author, author => author.books)
  @JoinTable()
  authors: Author[];

  @OneToMany(() => Sales, sale => sale.book)
  sales: Sales[];
}
