import { AuthService } from './auth.service';

describe('Auth-service', () => {

    it('Should be instance of AuthService', () => {
        const obj: AuthService = new AuthService();
        expect(obj instanceof AuthService).toBe(true);
    });

    it('should initalize the user correctly', () => {
        const obj: AuthService = new AuthService();
        obj.loginUser('aakash', 'password');
        const circularArray = obj.isAuthenticated();
        expect(circularArray.userName).toBe('aakash');
    });
});
