import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from "./redux/store";

const App2 = (props) => {
    return (
        <div>
            <App store={props.store}/>
        </div>
    );
};

ReactDOM.render(<Provider store={store}><App2/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
