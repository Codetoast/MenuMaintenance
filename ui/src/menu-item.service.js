let axios = require('axios/dist/axios.js')

let menuItemService = {
    getMenuItems: function () {
        return axios.get('https://menumaintenance.azurewebsites.net/api/MenuItems');
    }
}

module.exports = menuItemService;