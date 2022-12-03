import "../../main-styles";
import Cards from "./Cards.js";
import "./cards.scss";

(function($) {
  const className = "cards";

  new Cards($(`.js-${className}`));
})(jQuery);