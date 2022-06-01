import "../../main-styles";
import "../../layouts/layout-ui-kit"

import Cards from "./cards";
import "./cards.scss"

(function($){

  const className = "cards";

  new Cards($(`.js-${className}`));

})(jQuery);