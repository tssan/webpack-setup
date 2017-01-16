import React from 'react';

export default class Body extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id="body" className="flex-grid">
                <div className="col">Lorem ipsum...1</div>
                <div className="col">Lorem ipsum...2</div>
                <div className="col">Lorem ipsum...3</div>
            </div>
        );
    }
}
