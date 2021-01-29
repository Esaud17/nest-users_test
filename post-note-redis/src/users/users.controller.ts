import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UserCreateReqDto } from "./dtos/user.create.request.dto";
import { UserCreateResDto } from "./dtos/user.create.response.dto";
import { UsersService } from "./services/users.service";

@Controller("users")
export class UsersController {

    constructor(
        private userService: UsersService
    ) {}

    @MessagePattern("user_created")
    async user_created(createUserReqDto: UserCreateReqDto) {

        console.log(createUserReqDto);
        try {
            const userDto: UserCreateResDto = new UserCreateResDto();

            let user = await this.userService.create(createUserReqDto);


            userDto.id = user._id;
            userDto.email = user.email;
            userDto.firstName = user.firstName;
            userDto.lastName = user.lastName;
            userDto.gender = user.gender;
            userDto.nickname = user.nickname;

            return userDto;

        } catch (e) {
            console.log(e);
            return e;
        }

    }


}

