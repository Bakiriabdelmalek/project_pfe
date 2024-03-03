// supplier.module.ts
import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the import path as needed

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService, PrismaService],
})
export class SuppliersModule {}
