import { UserCreateResDto } from "./dtos/user.create.response.dto";
import { Body, Controller, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";
import { UserCreateReqDto } from "./dtos/user.create.request.dto";
// import { UsersService } from './services/users.service';
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ClientProxy } from "@nestjs/microservices";
import { Inject } from "@nestjs/common";

@ApiTags("Users")
@Controller("api/v1/users")
export class UsersController {
  constructor(
    // Private userService: UsersService
    @Inject("USERS_SERVICES") private client: ClientProxy,
  ) {}

  @ApiBody({ type: UserCreateReqDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserCreateResDto,
    description: "Registro creado correctamente",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: "El registro no pudo ser creado",
  })
  @Post("/create")
  async create(
    @Res() res,
    @Body() createUserReqDto: UserCreateReqDto,
  ): Promise<UserCreateResDto> {

    try {
      let userDto: UserCreateResDto = new UserCreateResDto();
      let datos =   this.client.emit<UserCreateResDto>("user_created", createUserReqDto);

      console.log(datos);

      return res.status(HttpStatus.OK).json(userDto);
    } catch (error) {
      return res.status(HttpStatus.FORBIDDEN);
    }
  }
}
