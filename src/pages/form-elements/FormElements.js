import {
  $getElement,
} from '../../utilities/utilities';
import Comment from '../../components/comment';
import DropdownCounter from '../../components/dropdown-counter';
import DropdownDatepicker from '../../components/dropdown-datepicker';
import Expander from '../../components/expander';
import LikeButton from '../../components/like-button';
import Pagination from '../../components/pagination';
import InputField from '../../components/input-field';
import RangeSlider from '../../components/range-slider';
import RateButton from '../../components/rate-button';
import '../../components/label';
import '../../components/radio-buttons-field';
import '../../components/bullet-list';
import '../../components/button';
import '../../components/checkbox-list';
import '../../components/header-ui-kit';
import '../../components/container';
import '../../components/room-info';
import '../../components/toggle-switch';

class FormElements {
  #className = 'form-elements';
  #$component;

  constructor({
    $element,
    options = {},
  }) {
    this.#init($element, options);
  }

  #init($element, {
    dropdownDefault = {},
    inputFieldMasked = {},
    dateDropdownDouble = {},
    dateDropdownSingle = {},
    rangeSlider = {},
    pagination = {},
    dropdownMedium = {},
    dropdownMediumOpened = {},
    dropdownInitialOpened = {},
    dropdownOpened = {},
    comment = {},
  }) {
    this.#$component = $element;

    const $dropdownDefault = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-default',
    });

    new DropdownCounter({
      $parent: $dropdownDefault,
      options: dropdownDefault,
    });

    const $inputFieldMasked = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'input-field-masked',
    });

    new InputField({
      $parent: $inputFieldMasked,
      options: inputFieldMasked,
    });

    const $dateDropdownDouble = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'date-dropdown-double',
    });

    new DropdownDatepicker({
      $parent: $dateDropdownDouble,
      options: dateDropdownDouble,
    });

    const $dateDropdownSingle = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'date-dropdown-single',
    });

    new DropdownDatepicker({
      $parent: $dateDropdownSingle,
      options: dateDropdownSingle,
    });

    const $likeButtonDefault = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'like-button-default',
    });

    new LikeButton($likeButtonDefault);

    const $likeButtonActive = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'like-button-active',
    });

    new LikeButton($likeButtonActive);

    const $rateButton1 = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'rate-button-1',
    });

    new RateButton({
      $parent: $rateButton1,
    });

    const $rateButton2 = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'rate-button-2',
    });

    new RateButton({
      $parent: $rateButton2,
    });

    const $rangeSlider = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'range-slider',
    });

    new RangeSlider({
      $parent: $rangeSlider,
      options: rangeSlider,
    });

    const $pagination = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'pagination-wrapper',
    });

    new Pagination({
      $parent: $pagination,
      options: pagination,
    });

    const $dropdownMedium = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-medium',
    });

    new DropdownCounter({
      $parent: $dropdownMedium,
      options: dropdownMedium,
    });

    const $dropdownMediumOpened = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-medium-opened',
    });

    new DropdownCounter({
      $parent: $dropdownMediumOpened,
      options: dropdownMediumOpened,
    });

    const $dropdownInitialOpened = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-initial-opened',
    });

    new DropdownCounter({
      $parent: $dropdownInitialOpened,
      options: dropdownInitialOpened,
    });

    const $dropdownOpened = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'dropdown-opened',
    });

    new DropdownCounter({
      $parent: $dropdownOpened,
      options: dropdownOpened,
    });

    const $expander = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'expander',
    });

    new Expander($expander);

    const $expanderOpened = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'expander-opened',
    });

    new Expander($expanderOpened);

    const $comment = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'comment',
    });

    new Comment({
      $parent: $comment,
      options: comment,
    });
  }
}

export default FormElements;
