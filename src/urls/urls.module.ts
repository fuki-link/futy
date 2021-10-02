import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { Url } from './entities/url.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UrlsService],
  controllers: [UrlsController],
  imports: [TypeOrmModule.forFeature([Url])],
})
export class UrlsModule {}
