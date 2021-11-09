import { Entity } from "typeorm"

export enum Action {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}


 interface IPermission  {
    action:string,
    subject:string
}

@Entity()
export class User {
    name : string
    role : string
    permission? : IPermission[]
}
