import '../../main-styles';
import '../../layouts/layout';
import Landing from './Landing.js';
import './landing.scss';
import data from './data.json';

(function ($) {
  const className = 'landing';

  new Landing({
    $element: $(`.js-${className}`),
    options: data,
  });
}(jQuery));
