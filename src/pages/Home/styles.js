import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #212023;
  padding: 15px;
`;

export const SearchBar = styled(TextInput).attrs ({
  placeholderTextColor: '#acacac',
})`
  color: #ffffff;
  background: #323035;
  text-align: center;
  margin-bottom: 15px;
  padding: 6px 20px;
  border-radius: 25px;
`;

export const FlatList = styled.FlatList`
  background: transparent;
  border-radius: 5px;
`;

export const Separator = styled.View`
  background: transparent;
  height: 15px;
`;

export const EmptyItem = styled.View`
  color: #bebebe;
  background: #323035;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: #ffffff;
`;

