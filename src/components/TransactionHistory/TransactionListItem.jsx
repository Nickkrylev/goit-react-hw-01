import css from "./Transaction.module.css";


const TransactionListItem  = ({type,amount,currency}) => {

    
  return (
    <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </>
  );
};

export default TransactionListItem ;
