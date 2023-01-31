import { FriendsWrap } from './Friends.styled';
import { FriendsList } from './FriendsList/FriendsList';

export const Friends = ({ friends }) => {
  return (
    <FriendsWrap>
      <FriendsList friends={friends} />
    </FriendsWrap>
  );
};
