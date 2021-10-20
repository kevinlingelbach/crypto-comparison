import React, { Component } from 'react';
import './style.css'

class EthTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("/eth-prices")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
                <h1>Current Ethereum Prices:</h1>
                <table>
                <thead>
                        <tr>
                            <th>Exchange</th>
                            <th>Buy</th>
                            <th>Sell </th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr>
                            <td>{item.exchange}</td>
                            <td>${item.buy}</td>
                            <td>${item.sell}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          );
        }
      }
}
 
export default EthTable;