import { Injector } from '@angular/core';
import { OntimizeService, ServiceResponse, Util } from 'ontimize-web-ngx';
import { Observable, Subscriber } from 'rxjs';

export class CustomOntimizeService extends OntimizeService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {
    const configuration = this._config.getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    return servConfig;
  }

  public configureService(config: any): void {
    this._urlBase = './assets/dummy-data/';

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
    entity = (Util.isDefined(entity)) ? entity : this.entity;
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
    return this.doRequest({
      method: 'GET',
      url: url,
      options: options,
      successCallback: (resp, subscriber) => {
        this.customParseSuccessfulQueryResponse(kv, resp, subscriber);
      },
      errorCallBack: this.parseUnsuccessfulQueryResponse
    });
  }

  protected customParseSuccessfulQueryResponse(kv: any, resp: ServiceResponse, subscriber: Subscriber<ServiceResponse>) {
    if (resp && resp.isUnauthorized()) {
      this.authService.logout();
    } else if (resp && resp.isFailed()) {
      subscriber.error(resp.message);
    } else if (resp && resp.isSuccessful()) {
      subscriber.next(resp);
    } else {
      // Unknow state -> error
      subscriber.error('Service unavailable');
    }
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
