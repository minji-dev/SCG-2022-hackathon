import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'

import { GameModule } from './game/game.module';
import { HelpersModule } from './helpers/helpers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { File } from './entities/file.entity';
import { Field } from './entities/field.entity';
import { Field_File } from "./entities/field_file.entity";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_SCHEMA,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([File, Field, Field_File]),
    GameModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
