import '../../main-styles';
import HeadersAndFooters from './HeadersAndFooters.js';
import './headers-and-footers.scss';
import data from './data.json';

(function($) {
  const className = 'headers-and-footers';

  new HeadersAndFooters({
    $element: $(`.js-${className}`),
    options: data,
  });
})(jQuery);