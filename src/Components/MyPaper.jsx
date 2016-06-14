/*
 * 引入 React 程式庫
 */
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

/*
 * 引入 Material UI 元件
 */ 
import Paper from 'material-ui/Paper';

export class MyPaper extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            issues: []
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <GridList
            >                              
            </GridList>
        );
    }
}

MyPaper.defaultProps = {

}