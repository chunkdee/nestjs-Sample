import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AppAbility, CaslAbilityFactory } from './casl-ability.factory';
import { CHECK_POLICIES_KEY, RequiredPermission } from './casl.decorator';

@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(private reflector: Reflector, private abilityFactory: CaslAbilityFactory) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredPermissions =
    this.reflector.get<RequiredPermission[]>(CHECK_POLICIES_KEY, context.getHandler()) || [];
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    const ability = this.abilityFactory.createForUser(user);
    return requiredPermissions.every(permission => this.isAllowed(ability, permission));
}
private isAllowed(ability: AppAbility, permission: RequiredPermission): boolean {
  return ability.can(...permission);
}
}
