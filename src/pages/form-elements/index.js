import "../../styles";
import "../../layouts/layout-ui-kit"

import FormElements from "./FormElements.js";
import "./form-elements.scss";

(function($) {
  const className = "form-elements";
  new FormElements($(`.js-${className}`));
})(jQuery);