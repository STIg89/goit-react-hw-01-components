import user from 'data/user.json';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';

export const Profile = () => {
  const { username, avatar, tag, location } = user;
  return (
    <Profile>
      <ProfileDescription
        userName={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
    </Profile>
  );
};
