import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateGameDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly context: string;

  @IsString()
  readonly intro: string;
}