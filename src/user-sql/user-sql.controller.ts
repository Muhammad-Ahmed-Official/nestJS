import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserSqlService } from './user-sql.service';
import { Employee } from './schemas/employee.schema';

@Controller('user-sql')
export class UserSqlController {
    constructor(private readonly employeeService: UserSqlService){}

    @Post()
    createEmp(){
        return this.employeeService.createEmployee();
    }

    @Get()
    getAll(){
        return this.employeeService.findAll();
    }

    @Get()
    async searchEmployee( @Query('name') name?:string, @Query('department') department?:string,): Promise<Employee[]>{
        return this.employeeService.search({name, department});
    }
}
