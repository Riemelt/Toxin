import Comment            from '../../components/comment';
import DropdownCounter    from '../../components/dropdown-counter'
import DropdownDatepicker from '../../components/dropdown-datepicker';
import Expander           from '../../components/expander';
import LikeButton         from '../../components/like-button';
import Pagination         from '../../components/pagination';
import InputField         from '../../components/input-field';
import RangeSlider        from '../../components/range-slider';
import '../../components/label';
import '../../components/radio-buttons-field';
import '../../components/bullet-list';
import '../../components/button';
import '../../components/checkbox-list';
import '../../components/header-ui-kit'
import '../../components/container';
import '../../components/rate-button';
import '../../components/room-info';
import '../../components/toggle-switch';

import data from './data.json';

class FormElements {
  #className = 'form-elements';

  #$component;

  constructor($element) {
    this.#init($element);
  }

  #init($element) {
    this.#$component = $element;

    new DropdownCounter($(`.js-${this.#className}__dropdown-default`, this.#$component), data.dropdownDefault);
    new InputField($(`.js-${this.#className}__input-field-masked`, this.#$component), data.inputFieldMasked);
    new DropdownDatepicker($(`.js-${this.#className}__date-dropdown-double`, this.#$component), data.dateDropdownDouble);
    new DropdownDatepicker($(`.js-${this.#className}__date-dropdown-single`, this.#$component), data.dateDropdownSingle);
    new LikeButton($(`.js-${this.#className}__like-button-default`, this.#$component));
    new LikeButton($(`.js-${this.#className}__like-button-active`, this.#$component));
    new RangeSlider($(`.js-${this.#className}__range-slider`, this.#$component), data.rangeSlider);
    new Pagination($(`.js-${this.#className}__pagination-wrapper`, this.#$component), data.pagination);
    new DropdownCounter($(`.js-${this.#className}__dropdown-medium`, this.#$component), data.dropdownMedium);
    new DropdownCounter($(`.js-${this.#className}__dropdown-medium-opened`, this.#$component), data.dropdownMediumOpened);
    new DropdownCounter($(`.js-${this.#className}__dropdown-initial-opened`, this.#$component), data.dropdownInitialOpened);
    new DropdownCounter($(`.js-${this.#className}__dropdown-opened`, this.#$component), data.dropdownOpened);
    new Expander($(`.js-${this.#className}__expander`, this.#$component));
    new Expander($(`.js-${this.#className}__expander-opened`, this.#$component));
    new Comment($(`.js-${this.#className}__comment`, this.#$component), data.comment);
  }
}

export default FormElements;