import { StatisticsWrap, Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsWrap>
      <Title>{title}</Title>
      <StatisticsList data={data} />
    </StatisticsWrap>
  );
};
