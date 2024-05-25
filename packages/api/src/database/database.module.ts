import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CocomoEntityModule from '@entities/cocomo/cocomo.entity.module';
import FunctionPointEntityModule from '@entities/functionPoint/functionPonint.entity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FunctionPointEntityModule,
    CocomoEntityModule,
  ],
  exports: [FunctionPointEntityModule],
})
export default class DatabaseModule {}
