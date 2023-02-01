import PropTypes from 'prop-types';
import { FriendsWrap } from './Friends.styled';
import { FriendsList } from './FriendsList/FriendsList';

export const Friends = ({ friends }) => {
  return (
    <FriendsWrap>
      <FriendsList friends={friends} />
    </FriendsWrap>
  );
};

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
