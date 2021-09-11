import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }

  enviarEmail(req:any){
    return this.http.post('http://localhost:3000/sendEmail',req)
  }
}

