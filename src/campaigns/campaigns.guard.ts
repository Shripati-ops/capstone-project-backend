import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class CampaignsGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers['authorization']) {
      return false;
    }
    const accessToken = request.headers['authorization'].split(' ')[1];

    if (!accessToken) {
      return false;
    }

    try {
      const decoded = this.jwtService.verify(accessToken, {
        secret: process.env.JWT_ACCESS_SECRET,
      });
      console.log(decoded);
      // If the token is valid, add the decoded token to the request object for use in controllers
      request.accessTokenPayload = decoded;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
