## prevent-router-transition component

Prevent router transition component for react-router-dom; Like facebook when you are trying to leave page and post editor is not empty.
## Screenshot

<img src="https://raw.githubusercontent.com/fadiquader/prevent-router-transition/master/screenshot.gif" />

look at Example.

https://github.com/fadiquader/prevent-router-transition/blob/master/example/index.js

## Install
```
yarn add prevent-router-transition
```

## Usage
To use this component you should setup react-router-dom v4.

```js
import React from 'react'
import { Link } from 'react-router-dom';
import PreventTransition from 'prevent-router-transition';
import 'rc-dialog/dist/rc-dialog.min.css';
import 'prevent-router-transition/lib/prevent-router-transition.css';

class Example extends React.Component {
    state = {
        value: ''
    };

    render() {
        const { value } = this.state;
        const preventTransition = !!value; // true if the value == ''
        return (
            <div>
                <input type="text"
                       onChange={e => this.setState({ value: e.target.value })}
                       placeholder="Insert some text..."
                />
                <br/>
                <Link to={`/about`}>Go To About Page</Link>
                <PreventTransition
                    when={preventTransition}
                    message="Do you want leave without finishing?" />
            </div>
        )
    }
}
export default Example;

```
## API

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
          <tr>
              <td>when</td>
              <td>Boolean</td>
              <td>False</td>
              <td>when=true, will prevent transition </td>
          </tr>
          <tr>
              <td>title</td>
              <td>Noode | String</td>
              <td>Leave Page?</td>
              <td>Modal title, if title=null, will hide the modal header</td>
          </tr>
          <tr>
              <td>message</td>
              <td>Noode | String</td>
              <td>Do you want to leave without finishing?</td>
              <td>Modal message </td>
          </tr>
          <tr>
              <td>okText</td>
              <td>Node | String</td>
              <td>Stay on this page</td>
              <td>ok button label</td>
          </tr>
          <tr>
              <td>cancelText</td>
              <td>Node | String</td>
              <td>Leave this page</td>
              <td>cancel button label</td>
          </tr>
          <tr>
              <td>wrapClassName</td>
              <td>String</td>
              <td></td>
              <td>additional className for modal</td>
          </tr>
          <tr>
              <td>width</td>
              <td>Integer</td>
              <td>400</td>
              <td>Modal width</td>
          </tr>
          <tr>
              <td>closable</td>
              <td>Boolean</td>
              <td>true</td>
              <td>show / hide close icon</td>
          </tr>
          <tr>
              <td>callback</td>
              <td>Function(handleType=('ok' | 'cancel')</td>
              <td></td>
              <td>Callback when handle modal (ok or cancel)</td>
          </tr>
    </tbody>
</table>

## Dependencies
[1. react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
<br>
[2. rc-dialog](https://github.com/react-component/dialog)


