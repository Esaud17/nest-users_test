import { OPENAPI } from './../config/openapi.properties.setting';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   const options = new DocumentBuilder()
     .setTitle(OPENAPI.title)
     .setDescription(OPENAPI.description)
     .setVersion(OPENAPI.version)
     .addBearerAuth()
     .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/', app, document);

  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
