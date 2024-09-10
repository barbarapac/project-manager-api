import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Public } from "./auth-guard/auth-guard.service";
import { LoginDto } from "./dto/login.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @HttpCode(HttpStatus.OK)
    @Post("login")
    @Public()
    @ApiOperation({ description: 'Realiza a autenticação de um usuário no serviço'})
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto.email, loginDto.password);
    }
}
