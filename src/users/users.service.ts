import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(role :  'Admin' | 'Deve'){
        return {role}
    }
}
