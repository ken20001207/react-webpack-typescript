import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SamplePage1 from "./pages/SamplePage1";
import "./styles/App.sass";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SamplePage1} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
