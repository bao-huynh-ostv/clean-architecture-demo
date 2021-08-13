import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
  id: number;
  name: string;
  age: number;
  password: string;

  constructor(id: number, name: string, age: number, password: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.password = password;
  }
}
