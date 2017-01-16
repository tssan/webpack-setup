import React from 'react';

import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}
