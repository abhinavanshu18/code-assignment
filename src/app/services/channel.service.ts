import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getChannels() {
    return this.http.get<{ message: string; posts: any }>("http://localhost:3000/api/get")         
  }
}
