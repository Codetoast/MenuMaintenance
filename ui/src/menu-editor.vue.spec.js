let Vue = require('vue');
let MenuEditor = require('./menu-editor.vue');
let menuItemService = require('./menu-item.service.js');
let q = require('q/q.js');
let flushPromises = require('flush-promises');

describe('menuEditor', () => {

    it('sets the correct default data', () => {
        expect(typeof MenuEditor.data).toBe('function');
        let defaultData = MenuEditor.data();
        expect(defaultData.items).toEqual([]);
    })

    it('can fetch items from menuItemService', async () => {
        let vm = new Vue(MenuEditor).$mount()
        spyOn(menuItemService,'getMenuItems').and.callFake(() => {
            let deferred = q.defer();
            deferred.resolve({ data: ['bbq wings', 'alphabit soup'] });
            return deferred.promise;
        });
        vm.fetchItems();
        await flushPromises();
        expect(vm.items).toEqual(['bbq wings', 'alphabit soup']);
    });

});