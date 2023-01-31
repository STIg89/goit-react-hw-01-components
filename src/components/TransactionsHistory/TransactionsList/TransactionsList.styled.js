import styled from 'styled-components';

export const ListRows = styled.tr`
  background-color: white;
  &:nth-of-type(2n) {
    background-color: lightgray;
  }
`;

export const ListItem = styled.td`
  padding: 10px;
`;
