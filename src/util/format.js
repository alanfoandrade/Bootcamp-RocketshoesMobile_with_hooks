import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPriceBrl } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
