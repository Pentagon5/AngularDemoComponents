import {AuthComponent} from './auth.component';
import {AuthService} from "./auth.service";

describe('Component: Login', () => {

  let component: AuthComponent;
  let service: AuthService;

  beforeEach(() => { 
    service = new AuthService();
    component = new AuthComponent(service);
  });

  afterEach(() => { 
    localStorage.removeItem('token');
    service = null;
    component = null;
  });


  it(' INtegration Testing canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it(' INtegration Testing  canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needsLogin()).toBeFalsy();
  });
});
