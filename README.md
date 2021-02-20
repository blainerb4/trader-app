## About this App
In this React app I decided to create a stock trading app that has a similar UI to Robinhood. I used material UI to style the application. Firebase was used as the backend. I used react hooks -use state and use effect- for state management. I used Axios to request real-time stock data from the Finnhub API. I chose axios instead of fetch() because i feel it makes cleaner API calls and I could use it in the browser on a nodejs API server. Fetch is cool as it has out of the box api requests but when scaling axios is a better solution. Firebase was used to store data from the Finnhub API. Using the Firebase database we could add stocks to create a watchlist, and add stocks to the users’ portfolio that displays the number of shares they have.

## to deploy this app locally
To deploy this app git clone this repository using your terminal and open the folder in your IDE. Run npm start and start viewing.

## Some Improvements we could make

We could improve this app by making the charts dynamic, and change the color of the percentage if negative or positive.
