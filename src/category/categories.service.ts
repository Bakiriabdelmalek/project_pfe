// categories.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ensure this path is correct for your project

enum ProductCategory {
  ELECTRONICS = 'ELECTRONICS',
  CLOTHING = 'CLOTHING',
  GROCERIES = 'GROCERIES',
  FURNITURE = 'FURNITURE',
  TOYS = 'TOYS',
}

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async create(data: { name: ProductCategory }) {
    return this.prisma.category.create({
      data,
    });
  }

  async update(id: string, data: any) {
    // Consider creating a specific DTO for better type safety
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
