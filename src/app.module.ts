import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import dotenv from 'dotenv';

dotenv.config();

const user: string = process.env.USER;
const password: string = process.env.PASSWORD;

@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${password}@cluster0.p2fyb.mongodb.net/test`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
