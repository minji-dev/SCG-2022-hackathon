import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { HelpersModule } from './helpers/helpers.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { File } from './entities/file.entity';
import { Field } from './entities/field.entity';
import { Field_File } from './entities/field_file.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
<<<<<<< HEAD
    password: 'hoon1130',
=======
    password: '1234',
>>>>>>> 7848951336115f9ceb48659ac660531a0f46195b
    database: 'scg',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }), TypeOrmModule.forFeature([File,Field,Field_File]),GameModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
