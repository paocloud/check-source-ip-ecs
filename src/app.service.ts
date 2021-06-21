import { Injectable,HttpService } from '@nestjs/common';
//import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async getHello(): Promise<Observable<any>> {
    let res = await this.httpService.get('https://myip.payungsakpk.xyz/').toPromise()
      .then(res => res.data)
      .catch(err => console.log(err))
    console.log(res);
    return res;
  }
}
