import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const refreshToken = request.body?.refresh_token;

    if (!refreshToken) {
      return false;
    }

    try {
      const decoded = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
      // If the token is valid, add the decoded token to the request object for use in controllers
      request.refreshTokenPayload = decoded;
      return true;
    } catch (error) {
      // console.error('Refresh token verification failed:', error);
      return false;
    }
  }
}
