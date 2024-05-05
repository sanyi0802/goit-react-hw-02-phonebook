import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.transactionHistoryTableType}>{type}</td>
      <td>{amount}</td>
      <td className={css.transactionHistoryTableCurrency}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
