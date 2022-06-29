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
    password: 'minji0312!',
=======
    password: 'vingsu1a@',
>>>>>>> d5841f49533dd8f347d7c690eb1bd73b982c5964
    database: 'scg',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }), TypeOrmModule.forFeature([File,Field,Field_File]),GameModule, HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
