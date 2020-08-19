<template>
    <div>
        <ActivityButton></ActivityButton>
        <p v-if="loading">Loading ...</p>
        <ActivityMessage></ActivityMessage>
    </div>
</template>
<script>
    import  {mapState} from 'vuex'
    import ActivityButton from "../components/ActivityButton";
    import ActivityMessage from "../components/ActivityMessage";
    export default {
        name: 'Activity',
        components: {ActivityMessage, ActivityButton},
        computed:mapState(['loading'])
    }
</script>
