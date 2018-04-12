<template>
    <div>
        <button v-on:click="fetchItems">Get Items</button>
        <ul>
            <li v-for="item in items">{{item}}<span class="oi main-menu-icon" data-glyph="trash" title="delete" aria-hidden="true"></span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },
        methods: {
            fetchItems: function () {
                this.items = ['burger', 'milkshake', 'fries']
            }
        }
    }
</script>

<style lang="less">
    .main-menu-icon {
        padding: 0 10px 0 10px;
        font-size: 12px;
    }
</style>