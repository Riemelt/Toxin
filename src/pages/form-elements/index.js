import "../../main-styles";
import "../../layouts/layout-base"

import FormElements from "./FormElements.js";
import "./form-elements.scss";

(function($) {
  const className = "form-elements";
  new FormElements($(`.js-${className}`));
})(jQuery);