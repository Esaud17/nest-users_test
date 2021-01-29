import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { Transport } from "@nestjs/microservices";

const logger = new Logger("Main");

const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: (process.env.REDIS_URI ||"redis://localhost:6379"),
  },
};


async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  app.listen(() => {
    logger.log("Microservice is listening...");
  });
}
bootstrap();
