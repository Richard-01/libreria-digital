import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class TimeGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const currentHour = new Date().getHours();
        if (currentHour >= 18 || currentHour < 6) {
            throw new ForbiddenException('Sales are not allowed between 6 PM and 6 AM.');
        }
        return true;
    }
}