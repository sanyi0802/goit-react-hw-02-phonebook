import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead>
        <tr className={css.transactionHistoryTableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionHistoryTableBody}>
        {transactions.map(item => {
          return (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
