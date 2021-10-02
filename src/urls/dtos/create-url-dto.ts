import { IsString, IsUrl, Matches } from 'class-validator';

export class CreateUrlDto {
  @IsString()
  @IsUrl(undefined, { message: 'URL is not valid' })
  readonly longUrl: string;

  @IsString()
  readonly code: string;
}
