<template>
    <div>
        <ActivityButton></ActivityButton>
        <p>Loading ...</p>
        <ActivityMessage></ActivityMessage>
    </div>
</template>
<script>
    import ActivityButton from "../components/ActivityButton";
    import ActivityMessage from "../components/ActivityMessage";
    export default {
        name: 'Activity',
        components: {ActivityMessage, ActivityButton}
    }
</script>
