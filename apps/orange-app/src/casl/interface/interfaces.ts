
export enum PermissionAction {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

 export interface emrPermission  {
    action:PermissionAction,
    subject:string
}

export interface caslPermission  {
    action:PermissionAction,
    subject:string
}