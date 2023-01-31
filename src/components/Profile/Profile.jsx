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
