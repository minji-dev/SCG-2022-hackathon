import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class UpdateGameDto {
    @IsString()
    readonly context: string;
  
    @IsString()
    readonly intro: string;
}