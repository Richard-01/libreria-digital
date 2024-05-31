import { Module } from '@nestjs/common';
import { SalesService } from './services/services.service';
import { SalesController } from './controller/controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from './entity/sales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  providers: [SalesService],
  controllers: [SalesController]
})
export class SalesModule {}
