﻿<template>
    <div>
        <button v-on:click="fetchItems">Get Items</button>
        <ul>
            <li v-for="item in items">{{item}}<span class="oi main-menu-icon" data-glyph="trash" title="delete" aria-hidden="true"></span></li>
        </ul>
    </div>
</template>

<script>
    import menuItemService from './menu-item.service'

    export default {
        data() {
            return {
                items: []
            }
        },
        methods: {
            fetchItems: function () {
                menuItemService.getMenuItems().then((result) => {
                    this.items = result.data;
                });
            }
        }
    }
</script>

<style lang="less">
    
    @import "colors";

    .main-menu-icon {
        padding: 0 10px 0 10px;
        font-size: 12px;
        color: @optumBlue3;
    }
</style>