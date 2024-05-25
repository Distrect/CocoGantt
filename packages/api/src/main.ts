import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import FunctionPointDAO from '@entities/functionPoint/functionPoint.dao';
import { ICreateFunctionPointDATA } from '@entities/functionPoint/functionPoint.interface';

export async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const dao = appContext.get(FunctionPointDAO);
}

bootstrap();
