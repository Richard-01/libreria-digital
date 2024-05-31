import { Module } from '@nestjs/common';
import { SalesService } from './services/services.service';
import { ControllerController } from './controller/controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entity/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [SalesService],
  controllers: [ControllerController]
})
export class AuthorModule {}
