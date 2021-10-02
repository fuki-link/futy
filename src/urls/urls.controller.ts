import { CreateUrlDto } from './dtos/create-url-dto';
import {
  Body,
  ConflictException,
  Controller,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { UrlsService } from './urls.service';
import { Url } from './entities/url.entity';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post('shortener')
  async shortener(@Body() { longUrl, code }: CreateUrlDto): Promise<Url> {
    const doesUrlExist = await this.urlsService.doesUrlExist(code);
    if (doesUrlExist) throw new ConflictException('Url already exists');

    return await this.urlsService.createShortUrl(longUrl, code);
  }
}
