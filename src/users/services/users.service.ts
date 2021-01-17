import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USERS } from 'common/models/models.facade';
import { IUser } from '../intefaces/user.interface.';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import { UserCreateReqDto } from '../dtos/user.create.request.dto';

@Injectable()
export class UsersService {
  private readonly saltRounds = 10;

  constructor(
    @InjectModel(USERS)
    private readonly model: Model<IUser>,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async VerifyPassword(password: string, compare: string): Promise<boolean> {
    return await bcrypt.compare(password, compare);
  }

  async create(user: UserCreateReqDto): Promise<IUser> {

    const passwordHash: string = await this.hashPassword(user.password);
    user.password_confirmation= null;
    const documentUser = new this.model(
      _.assignIn(user, { password: passwordHash }),
    );
    return documentUser.save();

  }
}
