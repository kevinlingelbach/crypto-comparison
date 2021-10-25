# CryptoComparison

## Description

CryptoComparison is a simple webpage that compares the buy/sell prices on Bitcoin and Ethereum on Coinbase and Kraken. The front end is in React and the back end is a Flask server written in Python.

## Prerequisites

- Python3
  - pip3
- npm

## Unix Instructions

To run the backend, navigate to /crypto-comparison/flask-server and switch into the the Python virtual environment using the command `source venv/bin/activate`.
To install the required Python libaries, use the command `pip3 install -r requirements.txt`.
Then, run the command `python3 server.py`.

To install the frontend, navigate to /crypto-comparison/client/ and run the command `npm install`.
To run the frontend, navigate to /crypto-comparison/client/ and run the command `npm start`.

You will be able to load the page on [localhost:3000](http://localhost:3000).

## Windows Instructions

To run the backend, navigate to /crypto-comparison/flask-server and switch into the the Python virtual environment using the command `c:\path\to\windows-venv\scripts\activate.bat`.
To install the required Python libaries, use the command `pip install -r requirements.txt`.
Then, run the command `python server.py`.

To install the frontend, navigate to /crypto-comparison/client/ and run the command `npm install`.
To run the frontend, navigate to /crypto-comparison/client/ and run the command `npm start`.

You will be able to load the page on [localhost:3000](http://localhost:3000).

## Questionnaire

1. There are a few sub-optimal choices I made in my implementation. First, I would like if the page had some sort of live updating system where instead of needing to refresh the page the user could see the prices changing in real time as the API from Coinbase and Kraken updated (maybe I would request from the APIs on a certain ms interval). I also would have liked to added more Cryptocurrencies to the page because that could be really useful for users to get a full picture of the price rather than just relying on the sample of two exchanges I've provided them with.

2. I tried my best to make the page aesthetically pleasing but UI design (and graphic design broadly) has always been an area in which I hope to grow my skills as time goes on (even if they might not be that necessary as a Software Engineer). I also added four buttons to the bottom to link to the web pages where users can buy either type of currency on either exchange because I thought it would be a nice addition if someone spots a really good deal.

3. If I was scaling my solution I would make a couple changes. First, I would propably move away from the Flask server as even though it works well in a very small case for the very specific task of requesting from the exchange APIs, I might want to switch to a backend that has the potential to handle a larger use case (probably something like Spring Boot / Java or Django backend libraries if I wanted to stay in Python). If testing showed issues were arising with around 100 users a second after the backend has been switched (which I can't imagine but wouldn't rule out) I might want to use a load balancer to split the work between multiple servers.

4. There are other enhancements I would love to make, but given the time constraints it's somewhat impractical. I would like to add a full login and registration system for various users to log into. This would allow users to store a list of their favorite Cryptocurrencies and exchanges so they can pick what they want to see and come back to them later. This would also necessitate adding in a bunch of different cryptocurrencies and a bunch of different exchanges for the user to select when they pick their favorites. If I had truly unlimited time what I would love to do is make price tracking a 24hr operation that records the results into a database. This would allow users to see with a graph or chart on the frontend historically how various exchanges perform with different cryptocurrencies and make purchasing or selling decisions accordingly.
