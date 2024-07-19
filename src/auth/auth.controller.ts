import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Sign in user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/sign-in')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.signIn(userDto);
  }

  @ApiOperation({ summary: 'Sign up user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/sign-up')
  signUp(@Body() userDto: CreateUserDto) {
    return this.authService.signUp(userDto);
  }
}
