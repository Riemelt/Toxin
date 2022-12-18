import ChartPie        from '../../components/chart-pie';
import CardReservation from '../../components/card-reservation';
import Comments        from '../../components/comments';
import '../../components/container';
import '../../components/gallery';
import '../../components/room-info';
import '../../components/bullet-list';
import {
  $getElement,
} from '../../utilities/utilities';

class RoomDetails {
  #className = 'room-details';
  #$component;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
  }

  #init($element, {
    comments = {},
    cardReservation = {},
    chartReviews = {},
  }) {
    this.#$component = $element;

    const $comments = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'comments',
    });

    new Comments({
      $parent: $comments,
      options: comments,
    });

    const $cardReservation = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'card-reservation',
    });

    new CardReservation({
      $parent: $cardReservation,
      options: cardReservation,
    });

    const $chartReviews = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'chart-reviews',
    });
    
    new ChartPie({
      $parent: $chartReviews,
      options: chartReviews,
    });
  }
}

export default RoomDetails;