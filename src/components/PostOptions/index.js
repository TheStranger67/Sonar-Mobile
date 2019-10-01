import React from 'react';
import { Text } from 'react-native';
import { renderers } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function PostOptions ({ postID }) {
  return (
    <Menu renderer={renderers.SlideInMenu}>
      <MenuTrigger children={
        <Icon name='gear' style={styles.menuIcon}></Icon>
      }/>
      <MenuOptions style={styles.options}>
        <MenuOption style={styles.option}>
          <Icon name='edit' style={styles.optionIcon}></Icon>
          <Text style={styles.optionText}> Editar </Text>
        </MenuOption>
        <MenuOption style={styles.option}>
          <Icon name='trash' style={styles.optionIcon}></Icon>
          <Text style={styles.optionText}> Excluir </Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = {
  menuIcon: {
    color: '#ffffff',
    fontSize: 18,
    width: 19,
    marginTop: 1,
    marginLeft: 9,
  },
  options: {
    height: 'auto',
    backgroundColor: '#151416',
  },
  option: {
    backgroundColor: '#151416',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  optionIcon: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 7,
  },
  optionText: {
    color: '#ffffff',
  }
};
