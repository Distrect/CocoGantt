import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import GlobalConfigModule from 'src/config/module/config.module';
import { DatabaseModule } from 'src/database/database.module';

@Global()
@Module({
  imports: [GlobalConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
