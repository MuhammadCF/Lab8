const formatv = require('../assets/scripts/main');

test('testing formatVolumeIconPath', () => {
    const tests = [[67,3], [34,2], [1, 1], [0,0]];
    tests.forEach((test) => {
        expect(formatv(test[0])).toBe(`./assets/media/icons/volume-level-${test[1]}.svg`);
    })
})
