<script setup lang="ts">
import type { ITurkeyMapTooltipProps } from '@/types';
import { computed } from 'vue';

const props = withDefaults(defineProps<ITurkeyMapTooltipProps>(), {})

const style = computed(() => ({ 'background-color': props.backgroundColor, color: props.color, top: `${props.top}px`, left: `${props.left}px` }))
</script>

<template>
    <Transition name="vue-turkey-map-tooltip-fade">
        <div v-show="props.isVisible" class="vue-turkey-map-tooltip" :style="style">
            <slot class="vue-turkey-map-tooltip-content" :city="props.city">
                {{ props.city?.name }}
            </slot>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import url('@/assets/style/turkey-map-tooltip.scss');
</style>