import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  postURL =
    "https://siish98xb5.execute-api.ap-south-1.amazonaws.com/Dev/cj_analytics";

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.postURL, data);
  }
}
