import { Repository } from 'typeorm';
import { Url } from './urls/entities/url.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Url) private readonly repo: Repository<Url>) {}
  async findUrlByCode(code: string) {
    return await this.repo.findOne({ code });
  }
}
