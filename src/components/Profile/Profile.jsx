import PropTypes from 'prop-types';
import { ProfileWrap } from './Profile.styled';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';

export const Profile = ({ user }) => {
  const { username, avatar, tag, location, stats } = user;
  return (
    <ProfileWrap>
      <ProfileDescription
        userName={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileWrap>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
