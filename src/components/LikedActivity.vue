<template>
    <div class="activity-item">
        <p>{{activity}}</p>
        <HeartIcon :id="id" fill-color="#E0245E" @toggle-activity="removeActivity"/>
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
    },
    methods:{
        removeActivity(){
            this.$store.commit('removeActivity',this.id)
        }
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
