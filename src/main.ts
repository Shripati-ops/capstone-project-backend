import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  await mongoose.connect(process.env.MONGO_URL).then(async () => {
    await app.listen(3000);
    Logger.log('App Listening on port 3000');
  });
}
bootstrap();
