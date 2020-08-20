<template>
    <div class="activity-item">
        <p>{{activity}}</p>
        <HeartIcon fill-color="#E0245E"/>
    </div>
</template>
<script>
import HeartIcon from "./HeartIcon";
export default {
    name : 'LikedActivity',
    components: {HeartIcon},
    props: {
        activity:String,
        id:String
    }
}
</script>
<style>
    .activity-item {
        text-align: center;
        font-size: 30px;
        padding: 10px;
        background-color: #ffffff;
        width: 60%;
        margin-top: 10px;
    }
</style>
