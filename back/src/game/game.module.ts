import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Field } from '../entities/field.entity';
import { file } from '../entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game,Field,file])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}