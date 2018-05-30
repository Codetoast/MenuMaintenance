let menuItemService = require('./menu-item.service.js');
let axios = require('axios/dist/axios.js');
let q = require('q/q.js');

describe('menuItemService', () => {

    beforeEach(() => {
        spyOn(axios, 'get').and.callFake((url) => {
            let deferred = q.defer();
            deferred.resolve({ data: ['chicken nuggets', 'bourbon on rocks'] });
            return deferred.promise;
        });
    });

    it('creates a service object containing a function', () => {
        expect(typeof menuItemService.getMenuItems).toBe('function')
    });

    describe('getMenuItems', () => {
        it('should return an array of items', () => {
            menuItemService.getMenuItems().then((result) => {
                expect(result.data.length).toBe(2);
                expect(result.data).toEqual(['chicken nuggets', 'bourbon on rocks']);
            });
        });
    });

});
