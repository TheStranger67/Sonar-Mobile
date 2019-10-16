import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
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

export const ContentIcon = styled(Icon)`
  width: 15px;
  margin-right: 8px;
`;

export const PrimaryText = styled.Text`
  color: #cecece;
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
