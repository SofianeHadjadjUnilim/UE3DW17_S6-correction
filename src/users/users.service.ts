import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './schemas/user.schema'

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<Users>) {}

  async create(createUserInput: CreateUserInput): Promise<Users> {
    const createdUser = new this.userModel(createUserInput);
    return await createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<Users> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndRemove(id)
  }
}
