import React from 'react';
import './style.css'

class BtcTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
    componentDidMount() {
        fetch("/btc-prices")
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

    buyComparison(price1, price2) {
        var price1Num = parseFloat(price1)
        var price2Num = parseFloat(price2)

        if (price1Num < price2Num) {
            return 'Coinbase'
        } else {
            return 'Kraken'
        }
    }

    sellComparison(price1, price2) {
        var price1Num = parseFloat(price1)
        var price2Num = parseFloat(price2)

        if (price1Num > price2Num) {
            return 'Coinbase'
        } else {
            return 'Kraken'
        }
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
                    <h2>Current Bitcoin Prices:</h2>

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
                    <text>Buy Bitcoin on: {this.buyComparison(items[0].buy, items[1].buy)}</text>
                    <br/>
                    <text>Sell Bitcoin on: {this.sellComparison(items[0].sell, items[1].sell)}</text>
                </div>
            );
        }
    }
}
 
export default BtcTable;