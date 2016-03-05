import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {AppComponent} from './components/app'
import 'rxjs/Rx'

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);
