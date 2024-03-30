import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/signin-user.dto';
import { UserGuard } from './users.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateUserDto,
  ) {
    try {
      const response = await this.userService.createUser(body, req, res);
      res.status(200).send({ status: 200, data: response });
    } catch (err) {
      console.error(err);
      res.send({ message: 'Internal Server Error' });
    }
  }

  @Post('login')
  async signIn(
    @Body() body: SignInDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      return await this.userService.signInUser(res, body);
    } catch (err) {
      console.error(err);
      res.send({ message: 'Internal Server Error' });
    }
  }
  @Post('refresh')
  @UseGuards(UserGuard)
  async generateAccessToken(@Body() body: any, @Res() res: Response) {
    try {
      const { user_id } = body;
      return await this.userService.generateAccessToken(res, user_id);
    } catch (err) {
      console.error(err);
      res.send({ message: 'Internal Server Error' });
    }
  }
}
