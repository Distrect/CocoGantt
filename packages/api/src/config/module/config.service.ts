import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class GlobalConfigService {
  constructor(private configService: ConfigService) {}
}
