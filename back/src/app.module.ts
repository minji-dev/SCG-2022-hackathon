import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'scg',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }), GameModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
