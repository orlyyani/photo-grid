# Photo Grid Component

This component let you automatically arrange the photos depending on their clusters.

# Features!

  - Arrange depending on their numbers.
  - Edit grid's width and height.
  - Edit grid's radius.
  - Passess an arguement when clicking the excess.

# Usage

```
import PhotoGrid from 'vue-photo-grid';
 
Vue.use(PhotoGrid);
```

# Sample

```
<template>
  <div id="photo-grid">
    <photo-grid :box-height="500" :box-width="500" :excess-text="'+ {{count}}'" :size-unit="'px'" v-on:clickExcess="triggerClick">
      <img v-for="imahe in images" v-bind:src="imahe.url"/>
    </photo-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          title: "",
          url: "https://img00.deviantart.net/e895/i/2017/275/7/d/ultra_sun_ultra_moon_by_kawacy-dbpbuiq.jpg" 
        }, {
          title: "",
          url: "https://img00.deviantart.net/870d/i/2009/174/d/b/sweet_summer_ii_by_zanasoul.jpg" 
        }, {
          title: "",
          url: "https://pre00.deviantart.net/9b5b/th/pre/i/2017/205/c/8/electra_by_mistanphotography-dbhgxsz.jpg" 
        }, {
          title: "",
          url: "https://img00.deviantart.net/47b3/i/2017/140/0/7/wonder_woman_by_pencilhead7-db9w9lw.png" 
        }, {
          title: "",
          url: "https://orig00.deviantart.net/2b7a/f/2017/275/5/6/daily_paint_1777__swineapple_by_cryptid_creations-dbpboas.png" 
        }, {
          title: "",
          url: "https://pre00.deviantart.net/a41c/th/pre/i/2015/014/9/8/swan_by_avine-d8dw53d.jpg" 
        }
      ]
    }
  },

  methods: {
    triggerClick() {
      // Some code here...
    }
  },
}
</script>
```

### Using Options

All read more options were converted to props to be able use them in the `vue-photo-grid` component.

*Usage*
```html
<photo-grid :box-height="500" :box-width="500" :excess-text="'+ {{count}}'" :size-unit="'px'" v-on:clickExcess="triggerClick">
  <img v-for="imahe in images" v-bind:src="imahe.url"/>
</photo-grid>
```

# API


| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `boxWidth` | `Number` | `200` | let you edit the grid's width depending on your ideal choice you can change the size unit (pixels or percentage) by adding `sizeUnit`. | 
| `boxHeight` | `Number` | `200` | let you edit the grid's Height depending on your ideal choice you can change the size unit (pixels or percentage) by adding `sizeUnit`. |
| `boxBorder` | `Number` | `0` |  This feature makes you add the border og the grid.
| `sizeUnit` | `String` | `px` | It defines the grid's `boxWidth` or `boxHeight` unit by choosing whether pixels or by bercentage.

# License

#### MIT
Use at your own risk!
with :heart: by Lyor
