import styled from 'styled-components';

export const TransactionTable = styled.table`
  font-size: 16px;
  text-align: center;
  width: 600px;
  margin: 100px auto;
  background-color: white;
  box-shadow: 2px 3px 5px gray;
`;

export const TransactionsNames = styled.thead`
  background-color: aquamarine;
  outline: 1px solid white;
  color: black;
  text-transform: uppercase;
  margin: 0;
`;

export const TransactionNameRow = styled.th`
  padding: 10px;
`;
