import React from 'react';
import { BrowserRouter as Rt, Route } from "react-router-dom";
import Home from './Component/home'
import News from './Component/News1';
function App() {
    return (
        <div>
            <Rt>
                <Route exact path="/" component={Home} />
                < Route path="/news/:id" component={News} />
            </Rt>
        </div>
    );
}

export default App;