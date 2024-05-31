import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ServicesService } from './services/services.service';

@Module({
  controllers: [ControllerController],
  providers: [ServicesService]
})
export class BookModule {}
