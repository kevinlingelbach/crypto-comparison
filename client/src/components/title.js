import React from 'react';
import './title.css';

const TITLE = 'CryptoComparison'

class Title extends React.Component {
    render() { 
        return (
            <div className="Title">
            <h1>{TITLE}</h1>
            </div>
        );
    }
}
 
export default Title;