import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home'

class App extends React.Component {
    render() {
        return (  
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        )
    }
}

export default App;
