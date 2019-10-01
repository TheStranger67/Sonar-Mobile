import styled from 'styled-components/native';

export const Container = styled.View`
  background: #323035;
  flex-direction: column;
  border-radius: 8px;
  padding: 12px;
  margin: 0px 40px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 0px auto;
`;

export const FilterGroup = styled.View`
  flex-direction: column;
  margin-top: 12px;
`;

export const Filter = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 2px 10px;
`;

export const FilterToggle = styled.Switch.attrs ({
  trackColor: {false: '#212023', true: '#0062cc'}
})``;

export const FilterButton =styled.TouchableOpacity`
  color: #ffffff;
  background: #0062cc;
  align-items: center;
  width: 100px;
  margin: 15px auto 0px;
  padding: 10px;
  border-radius: 25px;
`;

export const PrimaryText = styled.Text`
  color: #ffffff;
  margin-bottom: 8px;
`;

export const SecondaryText = styled.Text`
  color: #cecece;
  margin-left: 3px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
`;
