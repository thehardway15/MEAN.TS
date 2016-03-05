import {Injectable} from 'angular2/core'
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {User} from './models/users';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  public addUser(newUser) {
    console.log(newUser)

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/users/create/', JSON.stringify(newUser), {headers: headers})
      .do(data => console.log(data))
  }

  public loginUser(loginData) {
    console.log(loginData)

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/users/login/', JSON.stringify(loginData), {headers: headers})
      .do(data => console.log(data))
  }

  public getAllUsers(): any {
    return this.http.get('/api/users')
      .map(resp => resp.json())
      .map((users: Array<any>) => {
      let result: Array<User> = []
      if (users) {
        users.forEach((user) => {
          result.push(
            new User(
              user._id,
              user.name,
              '')
            )
        })
        return result
      }
    })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}
