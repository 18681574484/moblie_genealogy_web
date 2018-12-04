<template>
    <div class="headerTab">
        <search></search>
        <navigation></navigation>
        <!-- <swipe></swipe> -->
    </div>
</template>

<script>
import navigation from '@/components/Header/navigation.vue'
import search from '@/components/Header/search.vue'
import swipe from '@/components/swipe/swipe.vue'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
        navigation,
        search,
        swipe
    },
};
</script>

<style scoped lang="less">
.headerTab {
    position: absolute;
    width: 100%;
    height: 285px;
    background-color: #D2211B;
    top: 0;
    left: 0;
    padding: 0 20px;
    box-sizing:border-box;
}
</style>
