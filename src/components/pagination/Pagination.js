import 'paginationjs';

import {
  $getElement,
} from '../../utilities/utilities';

class Pagination {
  #className = 'pagination';

  #$component;
  #$paginationContainer;
  #$pagesInfo;

  #options;

  static #buildPagesInfoText(itemsFrom, itemsTo, totalItems) {
    return `${itemsFrom} – ${itemsTo} из ${totalItems} вариантов аренды`;
  }

  constructor({
    $parent,
    options = {},
  }) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#options = options;

    this.#$paginationContainer = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'pagination-container',
    });

    this.#$pagesInfo = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'pages-info',
    });

    this.#initPaginationjs();
  }

  #initPaginationjs() {
    const { pageSize = 12 } = this.#options;

    this.#$paginationContainer.pagination({
      pageSize,
      dataSource: this.#initData.bind(this),
      pageRange: 1,
      autoHidePrevious: true,
      autoHideNext: true,
      prevText: '',
      nextText: '',
      callback: this.#renderPagination.bind(this),
    });
  }

  #initData(done) {
    const { itemsCount = 0 } = this.#options;
    const result = [];

    for (let i = 1; i <= itemsCount; i += 1) {
      result.push(i);
    }

    done(result);
  }

  #renderPagination(...args) {
    const [, pagination] = args;
    this.#updatePagesInfo(pagination);
  }

  #updatePagesInfo({ pageNumber, pageSize, totalNumber }) {
    const itemsFrom = ((pageNumber - 1) * pageSize) + 1;
    const itemsTo = pageNumber * pageSize;
    const totalItems = totalNumber >= 100 ? '100+' : totalNumber;
    const pagesInfo = Pagination.#buildPagesInfoText(
      itemsFrom,
      itemsTo,
      totalItems,
    );
    this.#setPagesInfo(pagesInfo);
  }

  #setPagesInfo(text) {
    this.#$pagesInfo.html(text);
  }
}

export default Pagination;
