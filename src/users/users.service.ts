import { HttpStatus, Injectable, Req, Res, UseGuards } from '@nestjs/common';
import { userModel } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { Response } from 'express';
import { SignInDto } from './dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserGuard } from './users.guard';
@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}

  async createUser(
    body: CreateUserDto,
    @Req() request: Request,
    @Res() res: Response,
  ) {
    const { name, email, password, avatar, firstName, lastName, role } = body;
    const hashedPassword = await hash(password, 10);
    const newPayload = {
      name,
      email,
      password: hashedPassword,
      avatar,
      firstName,
      lastName,
      role,
    };

    userModel.create(newPayload);

    return {
      message: 'User Created Successfully',
    };
  }

  async signInUser(@Res() res: Response, body: SignInDto) {
    const { username, email, password } = body;
    let userData = {};
    if (!username) {
      userData = await userModel.findOne({ email });
    } else {
      userData = await userModel.findOne({ username });
    }

    if (!userData) {
      return res.status(401).send({ message: 'No user found' });
    }

    const accessToken = this.jwtService.sign(
      { userData },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '1h',
      },
    );
    const refreshToken = this.jwtService.sign(
      { userData },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '1d',
      },
    );

    res.status(200).send({
      status: 200,
      data: { accessToken, refreshToken },
      message: 'Logged in Successfully',
    });
  }

  async generateAccessToken(@Res() res: Response, user_id) {
    const userData = await userModel.findOne({ _id: user_id });
    const accessToken = this.jwtService.sign(
      { userData },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '1h',
      },
    );
    res.status(200).send({
      status: 200,
      data: { accessToken },
      message: 'Logged in Successfully',
    });
  }
}
