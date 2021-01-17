import { ApiProperty } from "@nestjs/swagger";

export class UserCreateResDto {
  @ApiProperty()
  id: string;
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
}