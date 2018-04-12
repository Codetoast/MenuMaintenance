<template>
    <div>
        <h3>{{header}}{{ 4 * 4 }}</h3>
        <menu-editor></menu-editor>
    </div>
</template>

<script>
    import menuEditor from './menu-editor.vue';

    export default {
        data() {
            return {
                header: 'hello from componenet'
            }
        },
        components: {
            menuEditor
        }
    }
</script>