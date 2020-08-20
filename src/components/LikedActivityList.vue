<template>
    <div class="list-container">
        <LikedActivity v-for="activity in favoriteActivities"
        :activity="activity.activity" :key="activity.id" :id="activity.id"></LikedActivity>
    </div>
</template>
<script>
    import LikedActivity from "./LikedActivity";
    import {mapState} from "vuex";
    export default  {
        name :"LikedActivityList",
        components: {LikedActivity},
        computed:mapState(['favoriteActivities'])
    }
</script>
<style>
    .list-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
