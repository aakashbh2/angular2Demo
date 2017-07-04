import { MobileListService } from './mobile.service';

describe('Mobile-service', () => {

    it('Should be instance of MobileService', () => {
        const obj: MobileListService = new MobileListService();
        expect(obj instanceof MobileListService).toBe(true);
    });

    it('should get mobile list', () => {
        const obj: MobileListService = new MobileListService();
        const circularArray = obj.getMobile(1);
        expect(circularArray.brand).toBe('Nokia');
    });
});
