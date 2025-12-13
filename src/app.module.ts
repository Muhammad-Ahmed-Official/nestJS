import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CustomerModule } from './customer/customer.module';
import { UserRoleController } from './user-role/user-role.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseEventService } from './database-event/database-event.service';
import { DatabaseEventController } from './database-event/database-event.controller';
import { ExampleController } from './example/example.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { UserSqlService } from './user-sql/user-sql.service';
import { UserSqlController } from './user-sql/user-sql.controller';
import { UserSqlModule } from './user-sql/user-sql.module';

@Module({
  imports: [EmployeeModule, CustomerModule, ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process.env.DATABASE_URL as string), StudentModule, UserSqlModule
  ],
  controllers: [AppController, UserController, ProductController, UserRoleController, ExceptionController, DatabaseEventController, ExampleController, UserSqlController],
  providers: [AppService, ProductService, DatabaseEventService, UserSqlService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*') // consumer.apply used totell which middleware apply on which route
  }
}