import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const HomeContainer = styled.View`
  background: ${colors.dark};
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  padding: 27px 15px 0 15px;
`;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-right: 15px;
  width: 220px;
`;
export const ProductImg = styled.Image`
  height: 200px;
  width: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const ProductValue = styled.Text`
  margin: 14px 0px;
  font-size: 25px;
  font-weight: bold;
  margin-top: auto;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: ${colors.purple};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;
export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.purple)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
export const AddToCartButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
