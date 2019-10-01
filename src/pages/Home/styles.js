import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #212023;
`;

export const BarDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 0px;
`;

export const SearchBar = styled(TextInput).attrs ({
  placeholderTextColor: '#acacac',
})`
  flex: 1;
  color: #ffffff;
  background: #323035;
  text-align: center;
  margin-bottom: 12px;
  padding: 5px 20px;
  border-radius: 25px;
`;

export const FiltersButton = styled.TouchableOpacity`
  padding: 10px 2px 10px 15px;
  margin-bottom: 12px;
  border-radius: 25px;
`;

export const FlatList = styled.FlatList`
  background: transparent;
  border-radius: 5px;
`;

export const Separator = styled.View`
  background: transparent;
  height: 12px;
`;

export const EmptyItem = styled.View`
  color: #bebebe;
  background: #323035;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
`;

export const LoadingMore = styled.ActivityIndicator.attrs ({
  color: '#ffffff'
})`
  margin: 12px 0px;
`;

export const ListFooter = styled.View`
  background: #212023;
  width: 100%;
  height: 12px;
`;

export const Text = styled.Text`
  color: #ffffff;
`;
