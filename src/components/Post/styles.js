import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  margin-bottom: 8px;
`;

export const Rating = styled.TouchableOpacity`
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

export const Description = styled.View`
  margin-bottom: 8px;
`;

export const UserName = styled.Text`
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
`;

export const ContentIcon = styled(Icon)`
  width: 15px;
  margin-right: 8px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const FooterDiv = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingButton = styled.TouchableOpacity`
  background: transparent;
  color: #ffffff;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

export const PrimaryText = styled.Text`
  color: #ffffff;
`;

export const SecondaryText = styled.Text`
  color: #cecece;
`;

export const ButtonText = styled(PrimaryText)`
  margin-left: 8px;
`;