export enum ICityRegion {
    MEDITERRENIAN = 'mediterrenian',
    EASTERN_ANATOLIA = 'eastern-anatolia',
    AEGEAN = 'aegean',
    SOUTHEASTERN_ANATOLIA = 'southeastern-anatolia',
    CENTRAL_ANATOLIA = 'central-anatolia',
    BLACK_SEA = 'black-sea',
    MARMARA = 'marmara'
}

export interface ICity {
    id: number
    name: string
    latitude: string
    longitude: string
    region: ICityRegion
    path: string
}

export interface ITurkeyMapViewBoxSettings {
    top?: number
    left?: number
    width?: number
    height?: number
}

export interface ITurkeyMapTooltipSettings {
    backgroundColor?: string
    color?: string
    top?: number
    left?: number
}

export interface ITurkeyMapProps {
    viewBox?: ITurkeyMapViewBoxSettings
    tooltip?: ITurkeyMapTooltipSettings
    hoverable?: boolean
    showTooltip?:boolean
    isRegion?: boolean
    selectedCityId?: number
}

export interface ITurkeyMapCityProps {
    city: ICity
    isRegion?:boolean
    selected?: boolean
    disabled?: boolean
}

export interface ITurkeyMapTooltipProps {
    city: ICity | null
    isVisible: boolean
    top: number
    left: number
    backgroundColor: string
    color: string
}

export interface ITurkeyMapEmits {
    (e: 'selected', val: ICity | null): void
    (e: 'hover', val: ICity | null): void
}