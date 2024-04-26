import { Module } from '@nestjs/common';
import {ConfigModule,} from "@nestjs/config"
import ConfigService from 'src/config/module/config.service';

@Module({
    imports:[ConfigModule],
    providers:[ConfigService]
})
export default class GlobalConfigModule{}