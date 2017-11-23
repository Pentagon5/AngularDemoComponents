export class AuthService{
    isAuthenticated():boolean{
        //!! is converts string to boolean: Type assertion -Bang bang theory
        return !!localStorage.getItem('token');
        }
    }