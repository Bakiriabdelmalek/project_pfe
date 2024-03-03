// purchase-items.controller.ts
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
import { PurchaseItemsService } from './purchase-items.service';
import { LocalAuthGuard } from 'src/user/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/user/auth/authentificated.guard';

@UseGuards(AuthenticatedGuard)
@Controller('purchase-items')
export class PurchaseItemsController {
  constructor(private purchaseItemsService: PurchaseItemsService) {}

  @Get()
  findAll() {
    return this.purchaseItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseItemsService.findOne(id);
  }

  @Post()
  create(@Body() createPurchaseItemDto: any) {
    // Ideally, define a DTO for validation and type safety
    return this.purchaseItemsService.create(createPurchaseItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePurchaseItemDto: any) {
    // Define a DTO for updatePurchaseItemDto for type safety
    return this.purchaseItemsService.update(id, updatePurchaseItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.purchaseItemsService.delete(id);
  }
}
