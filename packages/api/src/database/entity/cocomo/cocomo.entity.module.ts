import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CocomoDAO from '@entities/cocomo/cocomo.dao';
import CocomoEntity from '@entities/cocomo/cocomo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CocomoEntity])],
  providers: [CocomoDAO],
  exports: [CocomoDAO],
})
export default class CocomoEntityModule {}
