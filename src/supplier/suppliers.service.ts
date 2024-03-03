// suppliers.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Adjust the import path as needed

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.supplier.findMany();
  }

  async findOne(id: string) {
    return this.prisma.supplier.findUnique({
      where: { id },
    });
  }

  async create(data: {
    name: string;
    phone: string;
    commerceRegistration: string;
    taxIdentification: string;
    statisticalNumber: string;
  }) {
    return this.prisma.supplier.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.supplier.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.supplier.delete({
      where: { id },
    });
  }
}
