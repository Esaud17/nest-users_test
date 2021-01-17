import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { USERS } from 'common/models/models.facade';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: USERS,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(require('mongoose-delete'), { deletedAt: true });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
