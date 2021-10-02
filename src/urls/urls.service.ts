import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlsService {
  constructor(@InjectRepository(Url) private readonly repo: Repository<Url>) {}

  async doesUrlExist(code: string): Promise<boolean> {
    const url = await this.repo.findOne({ code });
    return !!url;
  }

  async createShortUrl(longUrl: string, code: string): Promise<Url> {
    const slugCode = code.replace(/\s+/g, '-');
    const shortUrl = `http://localhost:3000/${slugCode}`;
    const url = this.repo.create({ longUrl, code: slugCode, shortUrl });

    return await this.repo.save(url);
  }
}
