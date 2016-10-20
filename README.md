# pie-control-panel 

A [v1 custom element](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) with controls for testing out a [pie](http://github.com/PieLabs) element.

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

* This package exports an `es6` module, until module loading is supported in the browser you'll need to use something like [webpack](http://webpack.github.io) to prepare a bundle that uses this.
* This library doesn't call `customElements.define`. You'll have to do that yourself like so: 

```javascript
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
```

## Test 

We use webpack to build a bundle and [web-component-tester](https://github.com/Polymer/web-component-tester) to test the element.

```
npm test (calls webpack && wct)
```
