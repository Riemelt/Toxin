import '../../main-styles';
import '../../layouts/layout';
import SearchRoomFilter from './SearchRoomFilter.js';
import './search-room-filter.scss';
import data from './data.json';

(function($) {
  const className = 'search-room-filter';

  new SearchRoomFilter($(`.js-${className}`), data);
})(jQuery);