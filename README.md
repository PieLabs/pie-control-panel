# pie-control-panel 

A custom element with controls for testing out a [pie](http://github.com/PieLabs) element.

## Usage

```html
  <pie-control-panel></pie-control-panel>

  <script type="text/javascript">

    var panel = document.querySelector('pie-control-panel');
    panel.env = { mode: 'gather' };
    panel.addEventListener('envChanged', function(event){
      //do something with the updated env in `event.target.env`
    });
  </script>
```

## Browser Integration

* This package exports an `es6` module, so you'll need to build this into a browser compatible bundle using something like [webpack](http://webpack.github.io) and [babel](http://babel.github.io).
* This library doesn't register the custom element. You'll have to do that yourself like so: 

```javascript
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
```

## Test 

We use webpack to build a bundle and [web-component-tester](https://github.com/Polymer/web-component-tester) to test the element.

```
npm test (calls webpack && wct)
```
