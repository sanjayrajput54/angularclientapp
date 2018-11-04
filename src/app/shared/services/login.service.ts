import { Injectable} from '@angular/core';

import { HttpClient} from '@angular/common/http';
@Injectable()
export class LoginService {

constructor(private httpClient: HttpClient) {}

login(userInput) {
  let loginUrl = "http://localhost:3005/user/login";
    return this.httpClient.post(loginUrl, userInput);
}
}