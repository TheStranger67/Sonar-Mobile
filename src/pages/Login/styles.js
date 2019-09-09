import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs ({
  colors: ['#d81e5b', '#0062cc'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})` 
  flex: 1;
  padding: 30px;
`;

export const FormContainer = styled.View`
  background: #212023ac;
  padding: 20px;
  border-radius: 8px;
`;

export const FormHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  padding: 1px 8px;
`;

export const FormTitle = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderSpace = styled.View`
  width: 30px;
`;

export const SignupButton = styled.TouchableOpacity`
  align-items: center;
  width: 150px;
  margin: 10% auto 0px;
  padding: 10px;
  border: 1px solid #ffffff50;
  border-radius: 25px;
  font-weight: 500;
`;

