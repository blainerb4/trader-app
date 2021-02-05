import React from "react";
import StockSVG from '../../stock.svg'
import './stats-row.css'
import { db } from "../../firebase/firebase";

function StatsRow(props) {

  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  const getModal = () => {
 //   console.log('buy', props.name);
    db.collection('myStocks')
    .where('ticker', '==', props.name)
    .get()
    .then((querySnapshot) => {
        if (querySnapshot.empty) {
            //update record
            querySnapshot.forEach(function(doc) {
                db.collection('myStocks')
                .doc(doc.id)
                .update({
                    shares: doc.data().shares+=1
                })
                console.log(doc.id, '=>', doc.data())
            });
        } else {
            //add a new record or update record
            //console.log('unable to buy stock')
            db.collection('myStocks')
            .add({
                ticker: props.name,
                shares: 1
            })
        }   
    })
  }
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props.name}</h1>
        <p>{props.shares && 
          (props.shares + " shares")
        }</p>
      </div>
      <div className="row__chart">
        <img src={StockSVG} height={16} alt='stock_chart'/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;