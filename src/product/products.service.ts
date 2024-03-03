// products.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the import path as needed

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    
    return await this.prisma.product.findMany({
      include:{
        supplier:{
          select:{
            name:true
          },
        },
        category:{
          select:{
            name:true
          }
        }
         
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async create(data: { name: string; categoryId: string; supplierId: string }) {
    return await this.prisma.product.create({
      data,
    });
  }

  async update(id: string, data: any) {
    // Consider creating a specific DTO for better type safety
    return await this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
