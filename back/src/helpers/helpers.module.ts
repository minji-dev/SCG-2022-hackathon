import { Module } from '@nestjs/common';
import { HelpersController } from './helpers.controller';
import { HelpersService } from './helpers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../entities/game.entity';
import { Field } from '../entities/field.entity';
import { file } from '../entities/file.entity';
import { Voice } from '../entities/voice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game,Field,Voice,file])],
  controllers: [HelpersController],
  providers: [HelpersService],
})
export class HelpersModule {}