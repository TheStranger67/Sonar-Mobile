import styled from 'styled-components/native';

export const Container = styled.View`
  background: #323035;
  border: 1px solid #4340471a;
  border-radius: 5px;
  padding: 10px;
`;

export const Header = styled.View`
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Description = styled.View`
  margin-bottom: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
`;

export const PostItem = styled.View`
  flex: 1;
  background: #434047aa;
  border: 1px solid #ffffff05;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const DownloadButton = styled.TouchableOpacity`
  color: #ffffff;
  background: #0062cc;
  width: 100px;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  border-radius: 25px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const SubTitle = styled(Title)`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const PrimaryText = styled.Text`
  color: #ffffff;
`;

export const Strong = styled(PrimaryText)`
  font-weight: bold;
  margin-right: 2px;
`;

export const SecondaryText = styled.Text`
  color: #cecece;
`;