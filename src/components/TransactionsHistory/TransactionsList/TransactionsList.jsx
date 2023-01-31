import PropTypes from 'prop-types';
import { ListRows, ListItem } from './TransactionsList.styled';

export const TransactionsList = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <ListRows key={id}>
          <ListItem>{type}</ListItem>
          <ListItem>{amount}</ListItem>
          <ListItem>{currency}</ListItem>
        </ListRows>
      ))}
    </tbody>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
