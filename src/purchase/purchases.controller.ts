// purchases.controller.ts
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { LocalAuthGuard } from 'src/user/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/user/auth/authentificated.guard';

@UseGuards(AuthenticatedGuard)
@Controller('purchases')
export class PurchasesController {
  constructor(private purchasesService: PurchasesService) {}

  @Get()
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(id);
  }

  @Post()
  create(@Body() createPurchaseDto: any) {
    // Ideally, define a DTO for validation and type safety
    return this.purchasesService.create(createPurchaseDto);
  }

  // Include other endpoints (PUT, DELETE) as necessary, following the patterns established
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.purchasesService.delete(id);
  }
}
