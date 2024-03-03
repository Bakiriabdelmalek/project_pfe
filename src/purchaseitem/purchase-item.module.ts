// purchase-item.module.ts
import { Module } from '@nestjs/common';
import { PurchaseItemsService } from './purchase-items.service';
import { PurchaseItemsController } from './purchase-items.controller';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the import path as needed

@Module({
  controllers: [PurchaseItemsController],
  providers: [PurchaseItemsService, PrismaService],
})
export class PurchaseItemsModule {}
