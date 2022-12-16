import Layout from './Layout.js';
import './layout.scss';

(function($){
  const className = 'layout';

  new Layout($(`.js-${className}`));
})(jQuery);