import {Ability}  from '@casl/ability'
import { User } from '../users/entities/users.entity';
import { caslPermission, PermissionAction } from './interface/interfaces';


export type PermissionObject = any;
export type AppAbility = Ability<[PermissionAction, PermissionObject]>;


export class CaslAbilityFactory {
   // constructor(){}  inject user repository

   createForUser(user: User) : Ability<[PermissionAction,PermissionObject]> {
    //get user permissions from Database
    const userPermissions  = user.permission;

    const userAbilities :  caslPermission[]  = userPermissions.map(p=>({
        action : p.action as PermissionAction ,
        subject : p.subject
    }));
        
    return new Ability<[PermissionAction,PermissionObject]>(userAbilities)
    }
   }


