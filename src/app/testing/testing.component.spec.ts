//vanilla Programming
import {TestingComponent} from './testing.component';
//Test Suite
describe('TestingComponent',()=>{
    //hook
    beforeEach(()=>{
        this.app=new TestingComponent()
    });
    // afterEach()=>{
    //   will be invoked after each test call 
    //  }
        
    //Test
   it('Unit Testing -Should have a property name to be set to murthy',()=>{
   expect(this.app.name).toBe('Murthy');
   });
})
