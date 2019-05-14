import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppService } from "../app.service";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private service: AppService) {
    }
    public canActivate(): boolean | Observable<boolean> {
        return this.service.isAdmin;
    }
}