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
        const preventTransition = !!value; // false if the value == ''
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <input type="text"
                       onChange={e => this.setState({ value: e.target.value })}
                       placeholder="Insert some text..."
                       style={{
                           border: '1px solid #eee',
                           outline: 'none',
                           padding: '8px',
                           margin: '16px'
                       }}
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