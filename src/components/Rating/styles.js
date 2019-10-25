import styled from 'styled-components/native';

export const Container = styled.View`
  background: #323035;
  border: 1px solid #4340471a;
  border-radius: 5px;
  margin: 0px 12px;
  padding: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const RatingCount = styled.Text`
  color: #bebebe;
  margin: 0px 6px 0px 0px;
`;

export const AverageRating = styled.Text`
  color: #ffffff;
  margin: 0px 0px 0px 6px;
`;

export const Comment = styled.View`
  margin: 8px 0 0;
`;

export const UserName = styled.Text`
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
`;
