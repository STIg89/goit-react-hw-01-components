import PropTypes from 'prop-types';
import { Stats, Info, Label, Quantity } from './ProfileStats.styled';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <Stats>
      <Info>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Info>
      <Info>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Info>
      <Info>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Info>
    </Stats>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
