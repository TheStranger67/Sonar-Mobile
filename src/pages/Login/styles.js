import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs ({
  colors: ['#d81e5b', '#0062cc'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})` 
  flex: 1;
  padding: 15px;
`;

export const FormContainer = styled.View`
  background: #212023ac;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
`;

export const FormTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin: 0px auto 20px;
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

