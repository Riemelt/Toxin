import header from '../../components/header/data.json';
import Layout from './Layout.js';
import './layout.scss';

(function($){
  const className = 'layout';
  const options = {
    header,
  };

  new Layout({
    options,
    $element: $(`.js-${className}`),
  });
})(jQuery);