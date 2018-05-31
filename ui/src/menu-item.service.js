let axios = require('axios/dist/axios.js')
let config = require('./config.service.js');

let menuItemService = {
    getMenuItems: function () {
        return axios.get(config.baseUrl + '/api/MenuItems');
    }
}

module.exports = menuItemService;