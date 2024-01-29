// Import the CSS module
import styles from "./Transaction.module.css";

const TransactionListItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </>
  );
};

export default TransactionListItem;
