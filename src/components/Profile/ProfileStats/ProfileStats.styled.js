import styled from 'styled-components';

export const Stats = styled.ul`
  background-color: beige;
  margin: 0;
  width: 100%;
  height: 130px;
  list-style: none;
  padding: 0;
  display: flex;
  box-shadow: 2px 3px 5px gray;
`;

export const Info = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  border: 2px solid gray;
  padding: 30px;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 20px;
  color: grey;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
