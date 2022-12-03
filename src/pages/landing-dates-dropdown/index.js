import "../../main-styles";
import "../../layouts/layout";
import Landing from "../landing/Landing.js";
import "../landing/landing.scss";
import data from "./data.json";

(function($) {
  const className = "landing";

  new Landing($(`.js-${className}`), data);

})(jQuery);