import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import DatePicker from 'react-native-datepicker';

const inputStyle = css`
  background: #212023;
  text-align: center;
  width: 100%;
  color: #ffffff;
  font-size: 14px;
  border-radius: 25px;
  padding: 6px 20px;
  border: ${props => props.error ? '1px solid #D63230' : 'none'};
`;

export const FormField = styled.View`
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  color: #ffffff;
  align-self: center;
  margin-bottom: 7px;
`;

export const Input = styled.TextInput.attrs ({
  placeholderTextColor: '#acacac',
  selectionColor: '#0062cc'
})`${inputStyle}`;

export const MaskedInput = styled(TextInputMask).attrs ({
  placeholderTextColor: '#acacac',
  selectionColor: '#0062cc'
})`${inputStyle}`;

export const DateInput = styled(DatePicker).attrs ({
  customStyles: {
    dateTouchBody: {
      height: 27,
    },
    dateInput: {
      height: 27,
      borderWidth: 0,
    },
    placeholderText: {
      color: '#bebebe'
    },
    dateText: {
      color: '#fff'
    },
  }
})`
  background: #212023;
  width: 100%;
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
  font-weight: 500;
`;

