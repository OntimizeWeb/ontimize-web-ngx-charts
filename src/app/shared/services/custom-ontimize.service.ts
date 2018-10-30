import { Injector } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { OntimizeService, LoginService, AppConfig } from 'ontimize-web-ngx';

export class CustomOntimizeService extends OntimizeService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {

    let loginService = this.injector.get(LoginService);
    let configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    servConfig['session'] = loginService.getSessionInfo();
    return servConfig;
  }

  public configureService(config: any): void {
    this._urlBase = './assets/dummy-data';
    this._sessionid = config.session ? config.session.id : -1;
    this._user = config.session ? config.session.user : '';

    if (config.entity !== undefined) {
      this.entity = config.entity;
    }
  }

  public startsession(user: string, password: string): Observable<any> {
    return undefined;
  }

  public endsession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public hassession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public query(kv?: Object, av?: Array<string>, entity?: string,
    sqltypes?: Object): Observable<any> {
    entity = (this.isNullOrUndef(entity)) ? this.entity : entity;

    let url = this._urlBase;
    if (entity === 'EMovements') {
      url += '/emovements.json';
    } else if (entity === 'EMovementTypes') {
      url += '/emovementtypes.json';
    } else if (entity === 'EMovementTypesTotal') {
      url += '/emovementtypestotal.json';
    } else if (entity === 'EMovementsGrouped') {
      url += '/emovementsgrouped.json';
    } else if (entity === 'EAccounts') {
      url += '/eaccounts.json';
    } else if (entity === 'EBullet') {
      url += '/ebullet.json';
    } else if (entity === 'EMovementPercent') {
      url += '/epercentmovements.json';
    } else if (entity === 'EDataGauge') {
      url += '/edatagauge.json';
    } else if (entity === 'EStockExchange') {
      url += '/estockexchange.json';
    } else if (entity === 'EDimensionData') {
      url += '/edimensiondata.json';
    }

    const options = {
      headers: this.buildHeaders()
    };
    const self = this;

    let innerObserver: any;
    const dataObservable = Observable.create(observer => {
      innerObserver = observer
    }).share();

    this.httpClient.get(url, options).subscribe((resp: any) => {
      if (resp && resp.code === 3) {
        self.redirectLogin(true);
      } else if (resp.code === 1) {
        innerObserver.error(resp.message);
      } else if (resp.code === 0) {
        innerObserver.next(resp);
      } else {
        // Unknow state -> error
        innerObserver.error('Service unavailable');
      }
    }, error => innerObserver.error(error),
      () => innerObserver.complete());

    return dataObservable;
  }

  public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object,
    offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    return undefined;
  }

  public insert(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }

  public update(kv: Object = {}, av: Object = {}, entity?: string,
    sqltypes?: Object): Observable<any> {
    return undefined;
  }

  public delete(kv: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }


}
