import '../../main-styles';
import '../../layouts/layout';
import SignIn from './SignIn.js';
import './sign-in.scss';
import data from './data.json';

(function ($) {
  const className = 'sign-in';

  new SignIn({
    $element: $(`.js-${className}`),
    options: data,
  });
}(jQuery));
