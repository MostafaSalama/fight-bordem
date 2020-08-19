<template>
        <div>
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
