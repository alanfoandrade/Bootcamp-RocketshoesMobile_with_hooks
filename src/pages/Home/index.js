import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPriceBrl } from '../../util/format';

import {
  HomeContainer,
  ProductList,
  ProductContainer,
  ProductImg,
  ProductTitle,
  ProductValue,
  AddToCartButton,
  ProductAmount,
  ProductAmountText,
  AddToCartButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state =>
    state.cart.reduce((cartProducts, product) => {
      cartProducts[product.id] = product.amount;

      return cartProducts;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPriceBrl(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <ProductContainer key={item.id}>
        <ProductImg source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductValue>{item.priceFormatted}</ProductValue>
        <AddToCartButton onPress={() => handleAddToCart(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" size={17} color="#fff" />
            <ProductAmountText>{cartItems[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
        </AddToCartButton>
      </ProductContainer>
    );
  }

  renderProduct.propTypes = {
    item: PropTypes.shape().isRequired,
  };

  return (
    <HomeContainer>
      <ProductList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </HomeContainer>
  );
}
