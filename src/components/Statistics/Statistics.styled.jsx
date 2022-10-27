import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 1px -2px 25px 2px rgba(14, 11, 11, 0.56);
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  font-size: 28px;
  padding-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ eventType }) => {
    switch (eventType) {
      case '.docx':
        return 'yellow';
      case '.pdf':
        return 'pink';
      case '.mp3':
        return 'grey';
      case '.psd':
        return 'blue';
      default:
        return 'darkred';
    }
  }};
`;

export const StatisticsItemLabel = styled.span`
  color: black;
  font-size: 13px;
`;

export const StatisticsItemValue = styled.span`
  color: black;
  font-size: 22px;
`;
