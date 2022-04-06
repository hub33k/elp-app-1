import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import common from 'common';

async function bootstrap() {
  console.log(common);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
