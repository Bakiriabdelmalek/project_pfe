// purchase-items.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ensure this path is correct for your project structure

@Injectable()
export class PurchaseItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.purchaseItem.findMany();
  }

  async findOne(id: string) {
    return this.prisma.purchaseItem.findUnique({
      where: { id },
    });
  }

  async create(data: {
    purchaseId: string;
    productId: string;
    quantity: number;
  }) {
    return this.prisma.purchaseItem.create({
      data,
    });
  }

  async update(id: string, data: any) {
    // A specific DTO is recommended for better type safety
    return this.prisma.purchaseItem.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.purchaseItem.delete({
      where: { id },
    });
  }
}
