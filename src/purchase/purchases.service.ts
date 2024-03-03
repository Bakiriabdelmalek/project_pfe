// purchases.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Make sure this path matches your project structure

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.purchase.findMany({
      include:{
        purchaseItems:{
          include:{product:true}
        }
      }
    });
  }

  async findOne(id: string) {
    return this.prisma.purchase.findUnique({
      where: { id }
    });
  }

  async create(data: {
    clientId: string;
    purchaseItems: { productId: string; quantity: number }[];
  }) {
    return this.prisma.purchase.create({
      data: {
        client: { connect: { id: data.clientId } },
        purchaseItems: {
          createMany: {
            data: data.purchaseItems,
          },
        },
      },
    });
  }

  async update(id: string, data: any) {
    // A specific DTO is recommended for better type safety
    // Update logic goes here
  }

  async delete(id: string) {
    return this.prisma.purchase.delete({
      where: { id },
    });
  }
}
