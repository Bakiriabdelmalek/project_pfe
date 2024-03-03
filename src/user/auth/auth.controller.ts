import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignupDto } from 'src/dtos/signup.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthenticatedGuard } from './authentificated.guard';
import { LoginDto } from 'src/dtos/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: SignupDto })
  @ApiResponse({ status: 201, description: 'User successfully registered.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiOperation({ summary: 'Sign up for this app' })
  @Post('/signup')
  async signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 200, description: 'User successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiOperation({ summary: 'login for this app' })
  @Post('/login')
  @ApiBody({ type: LoginDto })
  async login(@Request() req) {
    console.log({ message: 'operation' });

    return req.headers;
  }

  @UseGuards(AuthenticatedGuard)
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'User info.' })
  @ApiOperation({ summary: 'access the user profile' })
  @Get('/profile')
  async profile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @ApiOperation({ summary: 'Verify user authentication status' })
  @ApiResponse({ status: 200, description: 'User is authenticated.' })
  @ApiResponse({ status: 401, description: 'User is not authenticated.' })
  @Get('/verify')
  async verify(@Request() req) {
    console.log('hi');
    return { isAuthenticated: true, user: req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @ApiOperation({ summary: 'Log out of the app' })
  @ApiResponse({ status: 200, description: 'User successfully logged out.' })
  @ApiResponse({ status: 400, description: 'Error logging out.' })
  @Post('/logout')
  async logout(@Request() req, @Res() res): Promise<any> {
    req.logout((err) => {
      if (err) {
        console.error('Error during logout:', err);
        return res.status(400).json({ message: 'Error logging out' });
      }
      req.session.destroy(() => {
        res.clearCookie('connect.sid'); // Make sure to use the correct cookie name
        res.status(200).json({ message: 'Successfully logged out' });
      });
    });
  }
}
