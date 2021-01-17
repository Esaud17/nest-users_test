import { ConfigDefaultModule } from '../config/enviroment.properties.setting';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONSGOOSEPROPERTIES } from 'config/mongoose.properties.setting';

@Module({
  imports: [
    ConfigDefaultModule,
    MongooseModule.forRoot(process.env.MONGODB_URI, MONSGOOSEPROPERTIES),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
