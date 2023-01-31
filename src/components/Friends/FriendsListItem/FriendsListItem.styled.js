import styled from 'styled-components';

export const Item = styled.li`
  background-color: white;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100px;
  box-shadow: 2px 3px 5px gray;
  border-radius: 6px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 30px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
  width: 80px;
  height: 80px;
`;

export const Name = styled.p`
  margin-left: 40px;
  font-size: 28px;
  font-weight: 700;
`;
