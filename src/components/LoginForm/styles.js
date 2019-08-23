import styled from'styled-components/native';
import { TextInput } from 'react-native';

export const FormField = styled.View`
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  color: #ffffff;
  margin: 0px 0px 7px 16px;
`;

export const Input = styled(TextInput).attrs ({
  placeholderTextColor: '#acacac',
})`
  background: #212023;
  width: 100%;
  color: white;
  font-size: 14px;
  border-radius: 25px;
  border: 0;
  padding: 6px 20px;
  border: ${props => props.error ? '1px solid #D63230' : 'none'};
`;

export const ErrorLabel = styled.Text`
  color: #f06d6b;
  margin: 3px 0px 0px 16px;
`;

export const ErrorMessage = styled.Text`
  color: #ffffff;
  background: #d64542;
  margin: 0px auto 25px;
  border-radius: 25px;
  padding: 9px 25px;
`;

export const Submit = styled.TouchableOpacity`
  color: #ffffff;
  background: #0062cc;
  align-items: center;
  width: 150px;
  margin: auto;
  padding: 10px;
  border-radius: 25px;
  font-weight: 500;
`;
