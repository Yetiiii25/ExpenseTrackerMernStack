import React, {useContext, useEffect} from 'react' 
import Transaction from '../components/Transaction'
import {GlobalContext} from '../context/GlobalState'

function TransactionList() {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
      getTransactions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
        </ul>
      </>
    )
}

export default TransactionList