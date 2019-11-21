import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 25px 25px 0;
  justify-content: space-between;
`;

export const LogoContainer = styled.TouchableWithoutFeedback``;

export const HeaderLogo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CartItems = styled.Text`
  color: #fff;
  background: ${colors.purple};
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  text-align: center;
  font-size: 12px;
  padding: 2px;
  position: absolute;
  top: -8px;
  right: -8px;
  overflow: hidden;
`;
