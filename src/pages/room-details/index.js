import "../../main-styles";
import "../../layouts/layout";

import RoomDetails from "./RoomDetails.js";
import "./room-details.scss";

import data from "./data.json";

(function($){

  const className = "room-details";

  new RoomDetails($(`.js-${className}`), data);

})(jQuery);