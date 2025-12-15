import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension'; // generated/prisma

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    async OnModuleInit() {
        await this.$connect();
    }
    
    async onModuleDestroy() {
        await this.$disconnect();
    }
}
