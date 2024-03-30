import { JwtService } from '@nestjs/jwt';
import { UserGuard } from './users.guard';

describe('UsersGuard', () => {
  it('should be defined', () => {
    const jwtService: JwtService = new JwtService();
    expect(new UserGuard(jwtService)).toBeDefined();
  });
});
