import React from 'react';
import './style.css'

import { Button} from 'react-bootstrap';

class EthTable extends React.Component {
    // Constructor to set up the state where prices are loaded from the backend
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    // Function that fetches from the backend the various prices and puts them into json format
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

    // compares two prices and determines which is one is better for buying
    buyComparison(price1, price2) {
        var price1Num = parseFloat(price1)
        var price2Num = parseFloat(price2)

        if (price1Num < price2Num) {
            return 'Coinbase'
        } else {
            return 'Kraken'
        }
    }

    // compares two prices and determines which is beter for buying
    sellComparison(price1, price2) {
        var price1Num = parseFloat(price1)
        var price2Num = parseFloat(price2)

        if (price1Num > price2Num) {
            return 'Coinbase'
        } else {
            return 'Kraken'
        }
    }
    
    // renders this component
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            // displays a table of the various prices and displays recommendations using the above functions and buttons to go buy/sell elsewhere
            return (
              <div>
                  <h2>Current Ethereum Prices:</h2>
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
                  
                  <h3>Recommendations:</h3>
                  <text>Buy Ethereum on: {this.buyComparison(items[0].buy, items[1].buy)}</text>
                  <br/>
                  <text>Sell Ethereum on: {this.sellComparison(items[0].sell, items[1].sell)}</text>
                  
                  <h3>Links:</h3>

                  <a href="https://www.coinbase.com/price/ethereum" target="_blank">
                      <Button> Buy / Sell Ethereum on Coinbase! </Button>
                  </a>

                  <a href="https://www.kraken.com/prices/eth-ethereum-price-chart/" target="_blank">
                      <Button> Buy / Sell Ethereum on Kraken! </Button>
                  </a> 
              </div>
            );
        }
    }
}
 
export default EthTable;