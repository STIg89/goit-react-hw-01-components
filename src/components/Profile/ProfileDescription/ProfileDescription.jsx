import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './ProfileDescription.styled';

export const ProfileDescription = ({ userName, tag, location, avatar }) => {
  return (
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{userName}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
