<script setup lang="ts">
import type { ICity, ITurkeyMapCityProps, ITurkeyMapEmits, ITurkeyMapProps, ITurkeyMapTooltipProps, ITurkeyMapTooltipSettings, ITurkeyMapViewBoxSettings } from '@/types';
import citiesData from '@/assets/data/cities';
import TurkeyMapCity from '@/components/TurkeyMapCity.vue';
import TurkeyMapTooltip from '@/components/TurkeyMapTooltip.vue';
import { reactive, defineProps, withDefaults, shallowRef, ref, watch } from 'vue';

defineOptions({
    name: 'TurkeyMap',
    inheritAttrs: false
})

const props = withDefaults(defineProps<ITurkeyMapProps>(), {
    viewBox: {
        top: 0,
        left: 80,
        width: 1050,
        height: 585
    } as ITurkeyMapViewBoxSettings,
    tooltip: {
        backgroundColor: '#222831',
        color: '#EEEEEE',
        top: -30,
        left: 15,
    } as ITurkeyMapTooltipSettings,
    hoverable: false,
    showTooltip: true,
    isRegion: false
})

const emits = defineEmits<ITurkeyMapEmits>()

const cities = shallowRef(citiesData as ICity[])

const selectedCity = ref<ICity | null>()

const svgAttrs = reactive({
    viewBox: `${props.viewBox.top} ${props.viewBox.left} ${props.viewBox.width} ${props.viewBox.height}`
})

const tooltipProps = reactive({
    city: null as ICity | null,
    isVisible: false,
    backgroundColor: props.tooltip.backgroundColor,
    color: props.tooltip.color,
    top: 0,
    left: 0
} as ITurkeyMapTooltipProps)

const cityProps = reactive({
    isRegion: props.isRegion,
    selected: false,
    disabled: false
} as ITurkeyMapCityProps)

const enterMouseHandler = (city: ICity) => {
    if (!props.showTooltip) return

    tooltipProps.isVisible = true
    tooltipProps.city = city

    if (props.hoverable) emits('hover', tooltipProps.city)
}

const leaveMouseHandler = () => {
    if (!props.showTooltip) return

    tooltipProps.isVisible = false

    if (props.hoverable) emits('hover', null)
}

const moveMouseHandler = (event: MouseEvent) => {
    if (!props.showTooltip) return

    tooltipProps.top = event.pageY + props.tooltip.top
    tooltipProps.left = event.pageX + props.tooltip.left
}

const selected = (city: ICity) => {
    if (selectedCity.value?.id == city.id) selectedCity.value = null
    else selectedCity.value = city

    emits('selected', selectedCity.value)
}

watch((() => props.selectedCityId), () => {
    const city = cities.value.find((city) => city.id === props.selectedCityId)
    if (city) {
        selectedCity.value = city
        emits('selected', selectedCity.value)
    }
}, { immediate: true })
</script>

<template>
    <svg v-bind="svgAttrs" version="1.1" id="vue-turkey-map" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
        <TurkeyMapCity v-for="city, index in cities" :key="index" v-bind="cityProps" :city="city"
            :selected="city.id === (selectedCity?.id || props.selectedCityId)" @click="selected(city)"
            @mouseenter="enterMouseHandler(city)" @mouseleave="leaveMouseHandler" @mousemove="moveMouseHandler" />
    </svg>
    <TurkeyMapTooltip v-bind="tooltipProps" v-if="props.showTooltip">
        <template #default="{ city }">
            <slot name="tooltip" :city="city"></slot>
        </template>
    </TurkeyMapTooltip>
</template>

<style lang="scss" scoped>
@import url('@/assets/style/turkey-map.scss');
</style>