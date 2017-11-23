//service level testing
import {AuthService} from './auth.service';
describe('Service:Auth',()=>{
   let service:AuthService; 
    beforeEach(()=>{
        service=new AuthService()
    });
     afterEach(()=>{
     service =null;
     localStorage.removeItem('token');
     });
        it('Service testing - should return true from isAuthenticated when there is a token',()=>{
        localStorage.setItem('token','1234');
        expect(service.isAuthenticated()).toBeTruthy();
        });

       it('Service testing - should return false from isAuthenticated when there is no token',()=>{
       expect(service.isAuthenticated()).toBeFalsy();
      });
   
})