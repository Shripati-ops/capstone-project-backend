import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor() {}

  async signIn(body: AuthDto) {
    const { username, email, password } = body;

    if (!username) {
    }
  }
}
