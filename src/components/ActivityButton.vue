<template>
    <button class="btn" @click="getActivity">
        Give Me Something To DO
    </button>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        name : "ActivityButton",
        methods: {
            ...mapActions(['getActivity'])
        }
    }
</script>
<style scoped>
    .btn {
        background-color: #371CDB;
        color :#fff;
        padding: 10px 18px;
        cursor: pointer;
        outline: none;
        font-weight: 900;
        border-radius: 4px;
        transition: 300ms all ease-in-out;
    }
    .btn:focus,.btn:active{
        background-color:#0001CE;
    }
    .btn:active {
        background-color: #9965F4;
    }
</style>
