import React from 'react';
import { BrowserRouter as Rt, Route } from "react-router-dom";
import Home from '../component/home'
import News1 from "../component/News1";
function Router() {
    return (
        <div>
            <Rt>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News1} />
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} /> */}
            </Rt>
        </div>
    );
}

export default Router;