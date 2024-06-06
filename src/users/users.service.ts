import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // usually data from DB
  private users = [
    {
      id: 1,
      name: 'Hello Kitty',
      email: 'hellokitty@email.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Sponge Bob',
      email: 'spongebob@email.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Doraemon',
      email: 'doraemon@email.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Zoro',
      email: 'zoroooo@email.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Dora',
      email: 'dora@email.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
