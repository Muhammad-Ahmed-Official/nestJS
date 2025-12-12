import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable() // use this class into another class using dependency injection anoter class ma inject karsakain 
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();  // using this first Get get req
    const authHeader = request.headers['authorization']
    return authHeader === "Bearer mytoken-token";
  }
}