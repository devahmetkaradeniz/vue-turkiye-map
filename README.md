# Turkiye Map Vue Component

Turkiye SVG map with Vue3

Live demo : https://vue-turkiye-map-demo.netlify.app

## Installation

```javascript
npm install vue-turkiye-map
```

or

```javascript
yarn add vue-turkiye-map
```

## Usage

```javascript
import TurkeyMap from 'vue-turkiye-map'
import 'vue-turkiye-map/dist/style.css'
```

### Types


| Type                          | Description                                                                                                  | Since |
| :-----------------------------|:------------------------------------------------------------------------------------------------------------:|-------|
| **ICity**                     | { **id**:number,**name**:string,**latitude**:string,**longitude**:string,**region**:string,**path**:string } | 1.0.0 |
| **ITurkeyMapViewBoxSettings** | { **top**:number,**left**:number,**width**:number,**height**:number }                                        | 1.0.0 |
| **ITurkeyMapTooltipSettings** | { **backgroundColor**:string,**color**:string,**top**:number,**left**:number }                               | 1.0.0 |


### Props

| Name           | Description                                          | Type                          | Default                                                                       | Since |
|:---------------|:----------------------------------------------------:|------------------------------:|------------------------------------------------------------------------------:|------:|
| viewBox        | Position and dimension information of the map layout | **ITurkeyMapViewBoxSettings** | { **top**: 0, **left**: 80, **width**: 1050, **height**: 585 }                | 1.0.0 |
| tooltip        | Tooltip style and location information               | **ITurkeyMapTooltipSettings** | { **backgroundColor**:'#222831',**color**:'#EEEEEE',**top**:-30,**left**:15 } | 1.0.0 |
| hoverable      | Enables *hover* emit availability                    | **boolean**                   | **false**                                                                     | 1.0.0 |
| showTooltip    | Displays default tooltip if set to true              | **boolean**                   | **true**                                                                      | 1.0.0 |
| isRegion       | If set to true, displays regions                     | **boolean**                   | **false**                                                                     | 1.0.0 |
| selectedCityId |                                                      | **number**                    | **-**                                                                         | 1.0.0 |


### Emits

| Name     | Description                             | Type      | Since |
|:---------|:---------------------------------------:|----------:|------:|
| selected | Returns information of the clicked city | **ICity** | 1.0.0 |
| hover    | Returns information of the hover city   | **ICity** | 1.0.0 |


### Slots

| Name    | Description                                   | Type      | Since |
|:--------|:---------------------------------------------:|----------:|------:|
| tooltip | You can customize tooltip content information | **ICity** | 1.0.0 |


## License
MIT