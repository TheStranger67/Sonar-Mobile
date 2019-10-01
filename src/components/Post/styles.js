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

export const Rating = styled.View`
  flex-direction: row;
`;

export const RatingCount = styled.Text`
  color: #bebebe;
  margin: 0px 8px 0px 0px;
`;

export const AverageRating = styled.Text`
  color: #ffffff;
  margin: 0px 0px 0px 6px;
`;

export const Description = styled.View`
  margin-bottom: 8px;
`;

export const PostItem = styled.View`
  background: #434047aa;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff05;
  padding: 7px 8px 5px;
  border-radius: 5px;
  margin-top: 8px;
`;

export const ContentBox = styled.View`
  flex-direction: column;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
  align-items: center;
`;

export const DownloadButton = styled.TouchableOpacity`
  color: #ffffff;
  background: #0062cc;
  width: 38px;
  height: 37px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const UserName = styled.Text`
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
`;

export const PrimaryText = styled.Text`
  color: #ffffff;
`;

export const SecondaryText = styled.Text`
  color: #cecece;
`;

export const ContentIcon = styled(Icon)`
  width: 15px;
  margin-right: 8px;
`;