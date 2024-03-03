import {Injectable} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { OnModuleDestroy,OnModuleInit } from '@nestjs/common';



@Injectable()
export class PrismaService extends PrismaClient{
    async OnModuleInit(){
        this.$connect;
    }

    async OnModuleDestroy(){
        this.$disconnect;
    }
}