import '../../main-styles';
import Cards from './Cards.js';
import './cards.scss';
import data from './data.json';

(function ($) {
  const className = 'cards';

  new Cards({
    $element: $(`.js-${className}`),
    options: data,
  });
}(jQuery));
