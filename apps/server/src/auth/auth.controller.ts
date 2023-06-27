import {
  Body,
  Controller,
  Post,
  Request,
} from "@nestjs/common";
import { AuthDto } from "./dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("signup")
  async signup(@Body() credentials: AuthDto) {
    try {
      return await this.authService.createUser(credentials);
    } catch (err) {
      return err;
      /**
       * TODO: Implement Global Exception Filter
       */
    }
  }

  @Post("login")
  async login(@Body() credentials: AuthDto, @Request() req) {
    return await this.authService.login(credentials, req);
  }
}
