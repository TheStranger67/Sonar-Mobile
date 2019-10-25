import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #212023;
  padding-top: 12px;
`;

export const FlatList = styled.FlatList`
  background: transparent;
  border-radius: 5px;
  margin-top: 12px;
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
  margin: 0px 12px;
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