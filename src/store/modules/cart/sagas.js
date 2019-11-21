import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import NavigationService from '../../../services/navigation';
import { formatPriceBrl } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import api from '../../../services/api';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  const itemExists = yield select(state => state.cart.find(i => i.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const cartAmount = itemExists ? itemExists.amount : 0;

  const amount = cartAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Desculpe, estoque insuficiente');
    return;
  }

  if (itemExists) {
    yield put(updateAmountSuccess(id, amount));

    NavigationService.navigate('Cart');
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPriceBrl(response.data.price),
    };

    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  console.tron.log(id);
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Desculpe, estoque insuficiente');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
