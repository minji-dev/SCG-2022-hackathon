import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameService } from './game.service';
import { GameController } from './game.controller';

import { Game } from '../entities/game.entity';
import { Field } from '../entities/field.entity';
import { File } from '../entities/file.entity';
import { Game_File } from '../entities/game_file.entity';
import { Field_File } from '../entities/field_file.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Game, Field, File, Game_File, Field_File
    ])],
  controllers: [GameController],
  providers: [GameService],
})

export class GameModule {}