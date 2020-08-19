<template>
        <div class="container">
                <p>{{activity}}</p>
        </div>
</template>
<script>
    import {mapState} from "vuex";

    export default  {
        name : 'ActivityMessage',
        computed: mapState(['activity']),
    }
</script>
<style scoped>
        .container {
                text-align: center;
                margin-top: 20px;
                font-size: 2.5rem;
                font-style: italic;
                font-weight: 900;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                padding: 20px;
                word-break: break-word;
        }
       
</style>
