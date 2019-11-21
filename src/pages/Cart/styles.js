import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const CartContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  padding: 10px;
  margin: 27px 15px 0;
  border-radius: 4px;
`;

export const CartItemsList = styled.View``;

export const CartItem = styled.View``;

export const ItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImg = styled.Image`
  width: 65px;
  height: 65px;
`;

export const ItemDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ItemTitle = styled.Text``;

export const ItemValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ItemControlBar = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const DecreaseItemButton = styled.TouchableOpacity``;

export const ItemAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 40px;
  height: 30px;
`;

export const IncreaseItemButton = styled.TouchableOpacity``;

export const ItemSubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const CartTotal = styled.View`
  margin-top: 30px;
`;

export const CartTotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
  font-size: 18px;
`;

export const CartTotalValue = styled.Text`
  text-align: center;
  margin-bottom: 25px;
  font-size: 32px;
  font-weight: bold;
`;

export const NavButtons = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const BuyButton = styled.TouchableOpacity`
  background: ${colors.purple};
  padding: 12px;
  border-radius: 4px;
  flex: 1;
  margin-left: 2px;
`;

export const BuyButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const EmptyCart = styled.View`
  align-items: center;
  padding: 15px;
`;

export const EmptyText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
`;

export const GoShoppingButton = styled.TouchableOpacity`
  background: ${colors.purple};
  padding: 12px;
  border-radius: 4px;
  margin-right: 2px;
`;

export const GoShoppingButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
