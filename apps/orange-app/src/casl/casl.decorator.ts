import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { PermissionObject } from './casl-ability.factory';
import { PermissionAction } from './interface/interfaces';


// action, object
export type RequiredPermission = [PermissionAction, PermissionObject]
export const CHECK_POLICIES_KEY = "check_policy";
export const CheckPolicies = (...args: RequiredPermission[]): CustomDecorator<string> =>
  SetMetadata(CHECK_POLICIES_KEY, args);
