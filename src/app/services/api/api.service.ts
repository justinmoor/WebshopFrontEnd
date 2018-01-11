import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthorizationService } from '../user/authorization.service'
import { error } from 'selenium-webdriver';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http/src/http';

@Injectable()
export class ApiService{

    constructor( private http: HttpClient, private authService: AuthorizationService){

    }

    private createQueryString(queryParameters: Object): string
    {
        let queryString = '';
        
        if (typeof queryParameters === 'object')
        {
            for (let key in queryParameters)
            {
                let value = queryParameters[key];
                let prefix = queryString.length === 0 ? '?' : '&';
                
                queryString += `${prefix}${key}=${value}`;
            }
        }
        
        return queryString;
    }

    private createRequestHeaders(): HttpHeaders
    {
        let headers = new HttpHeaders();

        if (this.authService.hasAuthorization())
        {
            headers = headers.set('Authorization', this.authService.createAuthorizationString());
        }
        
        return headers;
    }

    public registreer(data:Object){
        return this.http.post('http://localhost:8080/user/registreer', data);
    }

    public uploadProduct(data:Object){
        return this.http.post('http://localhost:8080/producten/toevoegen', data);
    }

    private createURI(path: string, queryParameters: Object): string
    {
        let queryString = this.createQueryString(queryParameters);
        
        return `/${path}${queryString}`;
    }

    public getLogin<T>(path:string, queryParameters?:Object):Observable<T>{
        let uri = this.createURI(path, queryParameters);
        let headers = this.createRequestHeaders();

        return this.http.get<T>('http://localhost:8080/user/login', {headers:headers});
    }

    public getProducten(){
        return this.http.get('http://localhost:8080/producten/all')
    }

    public uploadImage(image : Object){
        return this.http.post('http://localhost:8080/producten/uploadimage', image).subscribe();
    }

    public getUsers<T>(queryParameters?: Object): Observable<T>{
        let headers = this.createRequestHeaders();
        return this.http.get<T>('http://localhost:8080/user/getall', {headers:headers});
    }

    public verwijder(product:Object){
        return this.http.post('http://localhost:8080/producten/verwijder', product).subscribe();
    }

    public checkOut(items){
        return this.http.post('http://localhost:8080/producten/checkout', items).subscribe();
    }
   
}