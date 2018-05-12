import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { filter } from "rxjs/operators";
import { AppService } from "./app.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AppGuard implements CanActivate {
    constructor(private appService: AppService,
        private router: Router
    ) {
    }
    public canActivate(): boolean | Observable<boolean> {
        const check = this.appService.isLogged;

        check
            .pipe(
                filter(item => !item)
            )
            .subscribe(() => this.router.navigate(['']))
        return check;
    }
}