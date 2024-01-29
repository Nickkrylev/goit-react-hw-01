// Import the CSS module
import styles from "./Transaction.module.css";
import TransactionListItem from "./TransactionListItem";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles["transaction-history"]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <TransactionListItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
