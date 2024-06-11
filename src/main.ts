import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(MyLoggerService));
  app.enableCors(); // this line opens the api to public; optionally we can configure which origins are allowed
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
