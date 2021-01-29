import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "USERS_SERVICES",
        transport: Transport.REDIS,
        options: {
          url: process.env.REDIS_URI,
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class UsersModule {}
