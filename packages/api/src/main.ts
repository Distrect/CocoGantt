import ProjectDAO from 'src/database/entity/project/project.dao';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const appContext = await NestFactory.createApplicationContext(AppModule);

  const pDAo = appContext.get(ProjectDAO);

  const nP = await pDAo.createProject({ projectName: 'New Project' });

  console.log(nP);
}

bootstrap();
