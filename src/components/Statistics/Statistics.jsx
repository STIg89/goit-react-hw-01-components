import PropTypes from 'prop-types';
import { StatisticsWrap, Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <StatisticsList data={data} />
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
