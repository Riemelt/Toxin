import "../../main-styles";
import "../../layouts/layout";

import Registration from "./Registration.js";
import "./registration.scss";

(function($){

  const className = "registration";

  new Registration($(`.js-${className}`));

})(jQuery);