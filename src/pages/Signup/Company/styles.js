import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs ({
  colors: ['#0062cc', '#d81e5b'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})` 
  flex: 1;
  padding: 25px;
`;

export const FormContainer = styled.View`
  background: #212023ac;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
`;
