import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {}

  @Get('/:code')
  async redirect(@Param('code') code: string, @Res() res: Response) {
    const url = await this.appService.findUrlByCode(code);

    if (!url) res.status(HttpStatus.NOT_FOUND).json('Page not found');

    res.redirect(HttpStatus.PERMANENT_REDIRECT, url.longUrl);
  }
}
