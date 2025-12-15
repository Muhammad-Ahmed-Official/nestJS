import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // @Throttle({ default: { limit: 3, ttl: 60000 }})
  // getHi(): string {
  //   return "Hi limitnig!";
  // }
}
