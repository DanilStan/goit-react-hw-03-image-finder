import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  width: 290px;
  height: 350px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 1px -2px 25px 2px rgba(14, 11, 11, 0.56);
  border-radius: 1px 1px 4px 4px;
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  width: 120px;
  border-radius: 50%;
  border: 1px solid;
  border-color: grey;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
`;

export const Location = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
  background: #f5f4fa;
  border-top: 1px solid #afb1b8;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: 1px -2px 24px -52px rgba(186, 202, 230, 0.65);
`;

export const Label = styled.p`
  margin-top: 1px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  margin-bottom: 0;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
`;
