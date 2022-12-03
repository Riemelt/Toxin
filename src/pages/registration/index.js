import "../../main-styles";
import "../../layouts/layout";
import Registration from "./Registration.js";
import "./registration.scss";
import data from "./data.json";

(function($) {
  const className = "registration";

  new Registration($(`.js-${className}`), data);
})(jQuery);