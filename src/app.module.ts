import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './user/auth/auth.module';
import { GeminiModule } from './gemini/gemini.module';
import { CategoriesModule } from './category/categories.module';
import { ProductsModule } from './product/products.module';
import { PurchaseItemsModule } from './purchaseitem/purchase-item.module';
import { SuppliersModule } from './supplier/suppliers.module';
import { ClientModule } from './client/client.module';
import { PurchasesModule } from './purchase/purchases.module';

@Module({
  imports: [PrismaModule,AuthModule,GeminiModule,CategoriesModule,ProductsModule,PurchasesModule,PurchaseItemsModule,SuppliersModule,ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
