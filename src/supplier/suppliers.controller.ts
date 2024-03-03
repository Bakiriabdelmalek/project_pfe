// suppliers.controller.ts
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
import { SuppliersService } from './suppliers.service';
import { LocalAuthGuard } from 'src/user/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/user/auth/authentificated.guard';

@UseGuards(AuthenticatedGuard)
@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(id);
  }

  @Post()
  create(@Body() createSupplierDto: any) {
    // Ideally, you should define a DTO for type safety
    return this.suppliersService.create(createSupplierDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSupplierDto: any) {
    // Define a DTO for updateSupplierDto for type safety
    return this.suppliersService.update(id, updateSupplierDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.suppliersService.delete(id);
  }
}
