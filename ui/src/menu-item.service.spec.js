let menuItemService = require('./menu-item.service.js');
let axios = require('axios/dist/axios.js');
let q = require('q/q.js');
let config = require('./config.service.js');

describe('menuItemService', () => {

    beforeEach(() => {
        config.baseUrl = 'testUrl';
    });

    it('creates a service object containing a function', () => {
        expect(typeof menuItemService.getMenuItems).toBe('function')
    });

    describe('getMenuItems', () => {
        it('should return an array of items', () => {
            spyOn(axios, 'get').and.callFake((url) => {
                expect(url).toEqual('testUrl/api/MenuItems');
                let deferred = q.defer();
                deferred.resolve({ data: ['chicken nuggets', 'bourbon on rocks'] });
                return deferred.promise;
            });


            menuItemService.getMenuItems().then((result) => {
                expect(result.data.length).toBe(2);
                expect(result.data).toEqual(['chicken nuggets', 'bourbon on rocks']);
            });
        });
    });

});
