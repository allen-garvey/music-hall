<template>
    <div :class="$style.container">
        <ul>
            <li v-for="i in [1, 2, 4]" :key="i">
                <div>{{ i }}</div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" module>
    .container {
        height: 10px;
        width: 300px;
        display: flex;
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // props: {
    //     tracks: {
    //         required: true,
    //         type: Object as PropType<Array<Track | Album>>,
    //     }
    // },
    components: {
    },
    data(){
        return {
        };
    },
    computed: {
    },
    methods: {
    }
});
</script>