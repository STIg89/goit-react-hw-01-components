import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="UPLOAD STATS" />
      <Friends friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </>
  );
};
