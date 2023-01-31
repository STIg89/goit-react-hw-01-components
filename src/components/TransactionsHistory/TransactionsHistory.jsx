import {
  TransactionTable,
  TransactionsNames,
  TransactionNameRow,
} from './TransactionsHistory.styled';
import { TransactionsList } from './TransactionsList/TransactionsList';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionsNames>
        <tr>
          <TransactionNameRow>Type</TransactionNameRow>
          <TransactionNameRow>Amount</TransactionNameRow>
          <TransactionNameRow>Currency</TransactionNameRow>
        </tr>
      </TransactionsNames>
      <TransactionsList transactions={transactions} />
    </TransactionTable>
  );
};
