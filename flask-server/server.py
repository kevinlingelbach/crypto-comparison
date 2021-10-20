from flask import Flask
import requests, json

app = Flask(__name__)

# Prices API Route
@app.route("/btc-prices")
def btcprices():
    # Send out the request, put it in JSON format and then get the specific dollar amount from that JSON
    coinbase_buy_btc_request = requests.get('https://api.coinbase.com/v2/prices/BTC-USD/buy')
    coinbase_buy_btc_json = json.loads(coinbase_buy_btc_request.text)
    coinbase_buy_btc_request.close()
    coinbase_buy_btc = float(coinbase_buy_btc_json['data']['amount'])
    coinbase_buy_btc_str = str(format(coinbase_buy_btc, '.2f'))

    coinbase_sell_btc_request = requests.get('https://api.coinbase.com/v2/prices/BTC-USD/sell')
    coinbase_sell_btc_json = json.loads(coinbase_sell_btc_request.text)
    coinbase_sell_btc_request.close()
    coinbase_sell_btc = float(coinbase_sell_btc_json['data']['amount'])
    coinbase_sell_btc_str = str(format(coinbase_sell_btc, '.2f'))

    kraken_btc_request = requests.get('https://api.kraken.com/0/public/Ticker?pair=BTCUSD')
    kraken_btc_json = json.loads(kraken_btc_request.text)
    kraken_btc_request.close()
    kraken_buy_btc = float(kraken_btc_json['result']['XXBTZUSD']['a'][0])
    kraken_sell_btc = float(kraken_btc_json['result']['XXBTZUSD']['b'][0])
    kraken_buy_btc_str = str(format(kraken_buy_btc, '.2f'))
    kraken_sell_btc_str = str(format(kraken_sell_btc, '.2f'))

    # return in JSON format
    return {
        "items": [
            { "exchange": "Coinbase", "buy": coinbase_buy_btc_str,  "sell": coinbase_sell_btc_str },
            { "exchange": "Kraken", "buy": kraken_buy_btc_str,  "sell": kraken_sell_btc_str },
        ] 
    }

@app.route("/eth-prices")
def ethprices():
    # Send out the request, put it in JSON format and then get the specific dollar amount from that JSON
    coinbase_buy_eth_request = requests.get('https://api.coinbase.com/v2/prices/ETH-USD/buy')
    coinbase_buy_eth_json = json.loads(coinbase_buy_eth_request.text)
    coinbase_buy_eth_request.close()
    coinbase_buy_eth = float(coinbase_buy_eth_json['data']['amount'])
    coinbase_buy_eth_str = str(format(coinbase_buy_eth, '.2f'))

    coinbase_sell_eth_request = requests.get('https://api.coinbase.com/v2/prices/ETH-USD/sell')
    coinbase_sell_eth_json = json.loads(coinbase_sell_eth_request.text)
    coinbase_sell_eth_request.close()
    coinbase_sell_eth = float(coinbase_sell_eth_json['data']['amount'])
    coinbase_sell_eth_str = str(format(coinbase_sell_eth, '.2f'))

    kraken_eth_request = requests.get('https://api.kraken.com/0/public/Ticker?pair=ETHUSD')
    kraken_eth_json = json.loads(kraken_eth_request.text)
    kraken_eth_request.close()
    kraken_buy_eth = float(kraken_eth_json['result']['XETHZUSD']['a'][0])
    kraken_sell_eth = float(kraken_eth_json['result']['XETHZUSD']['b'][0])
    kraken_buy_eth_str = str(format(kraken_buy_eth, '.2f'))
    kraken_sell_eth_str = str(format(kraken_sell_eth, '.2f'))

    # return in JSON format
    return {
        "items": [
            { "exchange": "Coinbase", "buy": coinbase_buy_eth_str,  "sell": coinbase_sell_eth_str },
            { "exchange": "Kraken", "buy": kraken_buy_eth_str,  "sell": kraken_sell_eth_str },
        ] 
    }



if __name__ == "__main__":
    app.run(debug=True)