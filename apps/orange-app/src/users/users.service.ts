/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService { 
    private readonly user: User[] = 

    [
        {
          name: "chuks",
          role: "Admin",
          permission : [{
                       action: 'read',
                       subject: 'Post'
                      }]
        },
        {
            name: "chris",
            role: "guest",
            permission : [{
                         action: 'read',
                         subject: 'Post'
                        }]
          },
        
      ]

    
}
