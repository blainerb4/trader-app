import React, { useState, useEffect } from "react";
import "./stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//import { key } from "../../api/api";
import axios from "axios";
import { db } from "../../firebase/firebase";
import StatsRow from "../statsrow/stats-row";

const BASE_URL = "https://finnhub.io/api/v1/quote";
const TOKEN = `c0dm5pv48v6sgrj39lug`;


//const testData = []; 

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
      //console.log(snapshot)
        let promises = [];
        let tempData = []
        
        snapshot.docs.map((doc) => {
 //         console.log(doc.data());
         promises.push(getStocksData(doc.data().ticker)
          .then(res => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data
            })
          })
        )})
        Promise.all(promises).then(()=>{
          console.log(tempData)
          setMyStocks(tempData);
        })
    })
  }

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
    let tempStocksData = []
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

//    getMyStocks();
    let promises = [];
    getMyStocks()
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
  //   console.log(tempStocksData);
      setStocksData(tempStocksData);
    })
  },[]);
//, []
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p> Stocks</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats-lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocksData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;