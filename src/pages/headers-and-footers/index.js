import "../../main-styles";
import "../../layouts/layout-base";

import HeadersAndFooters from "./HeadersAndFooters.js";
import "./headers-and-footers.scss";

(function($){

  const className = "headers-and-footers";

  new HeadersAndFooters($(`.js-${className}`));

})(jQuery);