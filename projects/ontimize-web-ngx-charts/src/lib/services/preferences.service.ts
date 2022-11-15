import { Injectable, Injector } from "@angular/core";
import { Observable, OErrorDialogManager, OntimizeEEService } from 'ontimize-web-ngx';


@Injectable({ providedIn: 'root' })
export class PreferencesService extends OntimizeEEService {
  protected oErrorDialogManager: OErrorDialogManager;

  constructor(protected injector: Injector) {
    super(injector);
    super.configureService(this.getDefaultServiceConfiguration());
    this.oErrorDialogManager = injector.get<OErrorDialogManager>(OErrorDialogManager);
  }


  public saveAsPreferences(preferencesparams?: object): Observable<any> {
    const body = JSON.stringify(
      preferencesparams
    )
    const url = this.urlBase + '/preferences/save';

    return this.doRequest({
      method: 'POST',
      url: url,
      body: body
    });
  }

  public savePreferences(id: number, preferencesparams?: object): Observable<any> {
    const body = JSON.stringify(
      preferencesparams
    )
    const url = this.urlBase + '/preferences/update/' + id;

    return this.doRequest({
      method: 'PUT',
      url: url,
      body: body
    });
  }

  public getPreferences(entity?: string, service?: string): Observable<any> {

    const url = this.urlBase + '/preferences/preferences?entity=' + entity + '&service=' + service + '&type=' + "chart";

    return this.doRequest({
      method: 'GET',
      url: url
    });

  }
  public deletePreferences(id?: number): Observable<any> {

    const url = this.urlBase + '/preferences/remove/' + id;
    return this.doRequest({
      method: 'DELETE',
      url: url
    });

  }
}
