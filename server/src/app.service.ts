import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  [x: string]: any;
  getUsers(): string[] {
    return ['userOne', 'userTwo']
  }
}
