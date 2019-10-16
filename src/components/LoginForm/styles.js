import styled from'styled-components/native';
import { TextInput } from 'react-native';

export const FormField = styled.View`
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  color: #ffffff;
  align-self: center;
  margin-bottom: 7px;
`;

export const Input = styled(TextInput).attrs ({
  placeholderTextColor: '#acacac',
  selectionColor: '#0062cc'
})`
  background: #212023;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 14px;
  border-radius: 25px;
  padding: 6px 20px;
  border: ${props => props.error ? '1px solid #D63230' : 'none'};
`;

export const ErrorLabel = styled.Text`
  color: #f06d6b;
  align-self: center;
  margin-top: 3px;
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
`;
