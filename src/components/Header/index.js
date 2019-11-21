import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  HeaderContainer,
  LogoContainer,
  HeaderLogo,
  CartContainer,
  CartItems,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <HeaderContainer>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <HeaderLogo />
        </LogoContainer>
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <CartItems>{cartSize || 0}</CartItems>
        </CartContainer>
      </HeaderContainer>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
