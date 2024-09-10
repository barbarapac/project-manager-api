import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true}));  

  const config = new DocumentBuilder()
    .setTitle('Project Manager API')
    .setDescription('Documentação da aplicação Project Manager API')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local enviroment')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
