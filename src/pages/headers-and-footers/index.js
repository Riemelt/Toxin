import "../../main-styles";
import "../../layouts/layout-base"

import "./headers-and-footers.scss"
import HeadersAndFooters from "./HeadersAndFooters.js";

(function($){

  const className = "headers-and-footers";

  new HeadersAndFooters($(`.js-${className}`));

})(jQuery);