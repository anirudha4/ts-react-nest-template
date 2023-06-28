import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Request,
  Res
} from "@nestjs/common";
import { AuthDto } from "./dto";
import { AuthService } from "./auth.service";
import { RequestWithUserDto } from "src/users/users.dto";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post("signup")
  async signup(@Body() credentials: AuthDto) {
    try {
      return await this.authService.createUser(credentials);
    } catch (err) {
      if (err.code === 'P2002') {
        throw new HttpException('User with provided email already exists', HttpStatus.AMBIGUOUS)
      }
      throw new BadRequestException()
    }
  }

  @Post("login")
  async login(@Body() credentials: AuthDto, @Request() req: RequestWithUserDto, @Res() res: Response) {
    const { access_token, user } = await this.authService.login(credentials, req);
    
    res.cookie('access_token', access_token, { httpOnly: true });
    console.log({ access_token, user });
    return res.json({ user });
  }
}