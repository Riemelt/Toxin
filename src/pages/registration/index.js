import '../../main-styles';
import '../../layouts/layout';
import Registration from './Registration.js';
import './registration.scss';
import data from './data.json';

(function ($) {
  const className = 'registration';

  new Registration({
    $element: $(`.js-${className}`),
    options: data,
  });
}(jQuery));
