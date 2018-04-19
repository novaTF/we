import React from 'react';
import { render } from 'react-dom';
import Hello from './components/hello';
import { AppContainer } from 'react-hot-loader'; //Appcontainer 大小写问题 createElements

render(
    <AppContainer>
        <Hello></Hello>
    </AppContainer>,
    document.getElementById('root')
)
if (module.hot) {
    module.hot.accept('./components/hello', () => {
        const NewHello = require('./components/hello').default;
        render(
            <AppContainer>
                <NewHello></NewHello>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}