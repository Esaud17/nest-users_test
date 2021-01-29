import { ApiProperty } from "@nestjs/swagger";

export class UserCreateReqDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  nickname: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  password_confirmation: string;
}