# Style guide

- We will use the AirBnb Style guide: https://github.com/airbnb/css

# Talk a little bit about em vs rem
- Units: https://www.w3.org/Style/Examples/007/units.en.html#units

- sample: https://jsfiddle.net/rapala61/spxLftfu/

# What is a grid?
- A grid is a layout for our content.
- Let's build a 3 column **Throw back special** https://jsfiddle.net/rapala61/6cLvjcpv/
- Let's build an actual grid system https://jsfiddle.net/rapala61/3ay68xmx/2/

# Media Queries and you.
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

- This is the basic syntax:
  ```
  @media screen and (min-width:320px)
    and (max-width:480px){{
      /*Insert your styles here
  }
  ```
- Important bit to include in your HTML:
> This is basically a hack to ensure mobile browsers respect media queries
More here: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```


- Lab: https://gist.github.com/rapala61/3da11ec79871a69744f3f017df07d789
