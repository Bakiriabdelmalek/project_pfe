// products.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { LocalAuthGuard } from 'src/user/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/user/auth/authentificated.guard';

@UseGuards(AuthenticatedGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll() {
    const users = await this.productsService.findAll();
    return users;

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: any) {
    // Use a DTO to ensure validation and type safety
    return await this.productsService.create(createProductDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: any) {
    // Use a DTO for updateProductDto for type safety
    return await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.productsService.delete(id);
  }
}
