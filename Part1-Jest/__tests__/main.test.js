const formatIcon = require('../assets/scripts/main');

describe('Test formatVolumeIconPath function', () => {
    test('check icon level 3', () => {
        expect(formatIcon(67)).toContain('3');
    })
    
    test('check icon level 2', () => {
        expect(formatIcon(34)).toContain('2');
    })
    
    test('check icon level 1', () => {
        expect(formatIcon(1)).toContain('1');
    })
    
    test('check icon level 0', () => {
        expect(formatIcon(0)).toContain('0');
    })
})