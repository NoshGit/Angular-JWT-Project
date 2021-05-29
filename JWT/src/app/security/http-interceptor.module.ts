import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = JSON.parse(localStorage.getItem("authUser"));

        if(token){
            const newReq = req.clone(
                {headers: req.headers.set('Authorization', `Bearer  ${token.bearerToken}`)}
            )
            return next.handle(newReq);
        }
        else{
            return next.handle(req);
        }
    }

};

@NgModule({
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        }
    ]
})

export class HttpInterceptorModule { }