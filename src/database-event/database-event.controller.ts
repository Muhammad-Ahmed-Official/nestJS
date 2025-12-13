import { Controller, Get, Post } from '@nestjs/common';
import { DatabaseEventService } from './database-event.service';

@Controller('database-event')
export class DatabaseEventController {
    constructor(private readonly databaseService: DatabaseEventService){}
    @Get('status')
    getStatus(){
        return this.databaseService.getStatus();
    }

}
