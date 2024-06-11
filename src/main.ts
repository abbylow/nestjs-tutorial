import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // this line opens the api to public; optionally we can configure which origins are allowed
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
