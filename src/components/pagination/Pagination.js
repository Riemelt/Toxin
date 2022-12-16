import 'paginationjs';

class Pagination {
  #className = 'pagination';

  #$component;
  #$paginationContainer;
  #$pagesInfo;

  #options;

  constructor($parent, options = {}) {
    this.#init($parent, options);
  }

  #init($parent, options) {
    this.#$component = $parent.find(`.js-${this.#className}`);
    this.#options    = options;

    this.#$paginationContainer = this.#$component.find(`.js-${this.#className}__pagination-container`);
    this.#$pagesInfo           = this.#$component.find(`.js-${this.#className}__pages-info`);

    this.#initPaginationjs();
  }

  #initPaginationjs() {
    const { pageSize = 12 } = this.#options;

    this.#$paginationContainer.pagination({
      pageSize,
      dataSource:       this.#initData.bind(this),
      pageRange:        1,
      autoHidePrevious: true,
      autoHideNext:     true,
      prevText:         '',
      nextText:         '',
      callback:         this.#renderPagination.bind(this),
    });
  }

  #initData(done) {
    const { itemsCount = 0 } = this.#options;
    const result = [];

    for (let i = 1; i <= itemsCount; i++) {
      result.push(i);
    }

    done(result);
  }

  #renderPagination(_, pagination) {
    this.#updatePagesInfo(pagination);
  }

  #updatePagesInfo({ pageNumber, pageSize, totalNumber }) {
    const itemsFrom  = (pageNumber - 1) * pageSize + 1;
    const itemsTo    = pageNumber * pageSize;
    const totalItems = totalNumber >= 100 ? '100+' : totalNumber;
    const pagesInfo  = this.#buildPagesInfoText(itemsFrom, itemsTo, totalItems);
    this.#setPagesInfo(pagesInfo);
  }

  #setPagesInfo(text) {
    this.#$pagesInfo.html(text);
  }

  #buildPagesInfoText(itemsFrom, itemsTo, totalItems) {
    return `${itemsFrom} – ${itemsTo} из ${totalItems} вариантов аренды`;
  }
}

export default Pagination;