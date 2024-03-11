<script setup lang="ts">
import type { ITurkeyMapCityProps } from '@/types';

defineOptions({
    name: 'TurkeyMapCity'
})

const props = withDefaults(defineProps<ITurkeyMapCityProps>(), {
    isRegion: false,
    selected: false
})
</script>

<template>
    <g>
        <path :id="props.city.id.toString()" class="vue-turkey-map-city" :class="{
            [`vue-turkey-map-city-region-${props.city.region}`]: props.isRegion,
            'vue-turkey-map-city-selected': props.selected
        }" :d="props.city.path" />
    </g>
</template>

<style lang="scss" scoped>
@import url('@/assets/style/turkey-map-city.scss');
</style>