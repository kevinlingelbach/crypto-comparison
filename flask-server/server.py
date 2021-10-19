from flask import Flask
import requests, json

app = Flask(__name__)

# Prices API Route
@app.route("/prices")
def prices():
    # Send out the request, put it in JSON format and then get the specific dollar amount from that JSON
    coinbase_buy_btc_request = requests.get('https://api.coinbase.com/v2/prices/BTC-USD/buy')
    coinbase_buy_btc_json = json.loads(coinbase_buy_btc_request.text)
    coinbase_buy_btc_request.close()
    coinbase_buy_btc = float(coinbase_buy_btc_json['data']['amount'])

    coinbase_sell_btc_request = requests.get('https://api.coinbase.com/v2/prices/BTC-USD/sell')
    coinbase_sell_btc_json = json.loads(coinbase_sell_btc_request.text)
    coinbase_sell_btc_request.close()
    coinbase_sell_btc = float(coinbase_sell_btc_json['data']['amount'])

    coinbase_buy_eth_request = requests.get('https://api.coinbase.com/v2/prices/ETH-USD/buy')
    coinbase_buy_eth_json = json.loads(coinbase_buy_eth_request.text)
    coinbase_buy_eth_request.close()
    coinbase_buy_eth = float(coinbase_buy_eth_json['data']['amount'])

    coinbase_sell_eth_request = requests.get('https://api.coinbase.com/v2/prices/ETH-USD/sell')
    coinbase_sell_eth_json = json.loads(coinbase_sell_eth_request.text)
    coinbase_sell_eth_request.close()
    coinbase_sell_eth = float(coinbase_sell_eth_json['data']['amount'])

    kraken_btc_request = requests.get('https://api.kraken.com/0/public/Ticker?pair=BTCUSD')
    kraken_btc_json = json.loads(kraken_btc_request.text)
    kraken_btc_request.close()
    kraken_buy_btc = float(kraken_btc_json['result']['XXBTZUSD']['a'][0])
    kraken_sell_btc = float(kraken_btc_json['result']['XXBTZUSD']['b'][0])

    kraken_eth_request = requests.get('https://api.kraken.com/0/public/Ticker?pair=ETHUSD')
    kraken_eth_json = json.loads(kraken_eth_request.text)
    kraken_eth_request.close()
    kraken_buy_eth = float(kraken_eth_json['result']['XETHZUSD']['a'][0])
    kraken_sell_eth = float(kraken_eth_json['result']['XETHZUSD']['b'][0])

    prices = [
        coinbase_buy_btc, 
        coinbase_sell_btc, 
        coinbase_buy_eth, 
        coinbase_sell_eth, 
        kraken_buy_btc, 
        kraken_sell_btc, 
        kraken_buy_eth, 
        kraken_sell_eth
    ]

    # return in JSON format
    return {"prices": prices}

if __name__ == "__main__":
    app.run(debug=True)