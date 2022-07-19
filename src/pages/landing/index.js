import "../../main-styles";
import "../../layouts/layout"

import Landing from "./Landing.js";
import "./landing.scss"

(function($){

  const className = "landing";

  new Landing($(`.js-${className}`));

})(jQuery);