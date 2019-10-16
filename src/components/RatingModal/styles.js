import styled from 'styled-components/native';

export const Container = styled.View`
  background: #323035;
  flex-direction: column;
  border-radius: 8px;
  padding: 12px;
  margin: 0px 30px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 0px auto;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 10px 5px;
`;

export const RatingLabel = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 2px 9px;
`;

export const TextField = styled.TextInput.attrs ({
  placeholderTextColor: '#acacac',
  selectionColor: '#0062cc'
})`
  color: #ffffff;
  background: #212023;
  border: 0;
  border-radius: 5px;
  padding: 10px 12px;
  box-shadow: ${props => props.error ? '0 0 0 1px #D63230' : 'none'};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const RateButton = styled.TouchableOpacity`
  color: #ffffff;
  background: #0062cc;
  align-items: center;
  width: 100px;
  margin: 15px auto 0px;
  padding: 10px;
  border-radius: 25px;
`;

export const Cancel = styled(RateButton)`
  background: transparent;
  border: 1px solid #ffffff60;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
`;