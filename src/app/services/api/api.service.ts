import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthorizationService } from '../user/authorization.service'
import { error } from 'selenium-webdriver';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http/src/http';

@Injectable()
export class ApiService{

   // url : string = 'http://localhost:8080/api'
    url: string = 'http://217.122.153.143:8080/api'

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
        return this.http.post(this.url + '/user/registreer', data);
    }

    public uploadProduct(data:Object){
        return this.http.post(this.url +'/producten/toevoegen', data);
    }

    private createURI(path: string, queryParameters: Object): string
    {
        let queryString = this.createQueryString(queryParameters);
        
        return `/${path}${queryString}`;
    }

    public getLogin<T>(path:string, queryParameters?:Object):Observable<T>{
      //  let uri = this.createURI(path, queryParameters);
        let headers = this.createRequestHeaders();

        return this.http.get<T>(this.url + '/user/login', {headers:headers});
    }

    public getProducten(){
        return this.http.get(this.url + '/producten/all')
    }

    public uploadImage(image : Object){
        return this.http.post(this.url +'/producten/uploadimage', image).subscribe();
    }

    public getUsers<T>(queryParameters?: Object): Observable<T>{
        let headers = this.createRequestHeaders();
        return this.http.get<T>(this.url + '/user/getall', {headers:headers});
    }

    public verwijder(product:Object){
        return this.http.post(this.url + '/producten/verwijder', product).subscribe();
    }

    public checkOut(items){
        return this.http.post(this.url + '/producten/checkout', items).subscribe();
    }
   
}