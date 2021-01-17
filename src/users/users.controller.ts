import { UserCreateResDto } from './dtos/user.create.response.dto';
import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { UserCreateReqDto } from './dtos/user.create.request.dto';
import { UsersService } from './services/users.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiBody({ type: UserCreateReqDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserCreateResDto,
    description: 'Registro creado correctamente',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'El registro no pudo ser creado',
  })
  @Post('/create')
  async create(
    @Res() res,
    @Body() createUserReqDto: UserCreateReqDto,
  ): Promise<UserCreateResDto> {
    try {
      let user = await this.userService.create(createUserReqDto);

      const userDto: UserCreateResDto = new UserCreateResDto();

      userDto.id = user._id;
      userDto.email = user.email;
      userDto.firstName = user.firstName;
      userDto.lastName = user.lastName;
      userDto.gender = user.gender;
      userDto.nickname = user.nickname;

      return res.status(HttpStatus.OK).json(userDto);
    } catch (error) {
      return res.status(HttpStatus.FORBIDDEN);
    }
  }
}
