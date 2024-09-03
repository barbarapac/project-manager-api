import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compareSync } from "bcrypt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersServices : UsersService,
        private readonly jwtService : JwtService,
    ){}

    async login(email: string, password: string){
        const user = await this.usersServices.findOneByOrFail({ email });
        const isValidUser = compareSync(password, user.password);

        if(!isValidUser){
            throw new UnauthorizedException();
            console.log("foi aqui")
        }

        const payload = { sub: user.id, username: user.email };
        const jwtToken = await this.jwtService.signAsync(payload);

        return {
            access_token: jwtToken,
        }
    }
}