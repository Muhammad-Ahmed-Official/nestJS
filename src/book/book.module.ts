import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './resolvers/book.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './model/book.model';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Book.name, schema: BookSchema
  }]) , PrismaModule],
  providers: [BookService, BookResolver]
})
export class BookModule {}
