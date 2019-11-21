import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPriceBrl } from '../../util/format';
import colors from '../../styles/colors';

import {
  CartContainer,
  CartItemsList,
  CartItem,
  ItemInfo,
  ItemImg,
  ItemDetails,
  ItemTitle,
  ItemValue,
  RemoveItemButton,
  ItemControlBar,
  DecreaseItemButton,
  ItemAmount,
  IncreaseItemButton,
  ItemSubTotal,
  CartTotal,
  CartTotalText,
  CartTotalValue,
  NavButtons,
  BuyButton,
  BuyButtonText,
  EmptyCart,
  EmptyText,
  GoShoppingButton,
  GoShoppingButtonText,
} from './styles';

export default function Cart({ navigation }) {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPriceBrl(product.price * product.amount),
    })),
  );

  const total = useSelector(state =>
    formatPriceBrl(
      state.cart.reduce((totalProduct, product) => {
        return totalProduct + product.price * product.amount;
      }, 0),
    ),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <CartContainer>
      {products.length ? (
        <>
          <CartItemsList>
            {products.map(product => (
              <CartItem key={product.id}>
                <ItemInfo>
                  <ItemImg source={{ uri: product.image }} />
                  <ItemDetails>
                    <ItemTitle>{product.title}</ItemTitle>
                    <ItemValue>{product.priceFormatted}</ItemValue>
                  </ItemDetails>
                  <RemoveItemButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.purple}
                    />
                  </RemoveItemButton>
                </ItemInfo>
                <ItemControlBar>
                  <DecreaseItemButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.purple}
                    />
                  </DecreaseItemButton>
                  <ItemAmount value={String(product.amount)} />
                  <IncreaseItemButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.purple}
                    />
                  </IncreaseItemButton>
                  <ItemSubTotal>{product.subTotal}</ItemSubTotal>
                </ItemControlBar>
              </CartItem>
            ))}
          </CartItemsList>
          <CartTotal>
            <CartTotalText>TOTAL</CartTotalText>
            <CartTotalValue>{total}</CartTotalValue>
            <NavButtons>
              <GoShoppingButton onPress={() => navigation.navigate('Home')}>
                <GoShoppingButtonText>CONTINUAR COMPRAS</GoShoppingButtonText>
              </GoShoppingButton>
              <BuyButton>
                <BuyButtonText>FINALIZAR PEDIDO</BuyButtonText>
              </BuyButton>
            </NavButtons>
          </CartTotal>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={70} color="#ddd" />
          <EmptyText>Carrinho vazio!</EmptyText>
          <GoShoppingButton onPress={() => navigation.navigate('Home')}>
            <GoShoppingButtonText>ESCOLHER PRODUTO</GoShoppingButtonText>
          </GoShoppingButton>
        </EmptyCart>
      )}
    </CartContainer>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
