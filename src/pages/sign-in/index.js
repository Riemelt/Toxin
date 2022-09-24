import "../../main-styles";
import "../../layouts/layout";

import SignIn from "./SignIn.js";
import "./sign-in.scss";

(function($){

  const className = "sign-in";

  new SignIn($(`.js-${className}`));

})(jQuery);