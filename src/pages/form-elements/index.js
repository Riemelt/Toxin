import '../../main-styles';
import FormElements from './FormElements.js';
import './form-elements.scss';
import data from './data.json';

(function ($) {
  const className = 'form-elements';

  new FormElements({
    $element: $(`.js-${className}`),
    options: data,
  });
}(jQuery));
