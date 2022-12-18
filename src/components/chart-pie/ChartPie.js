import {
  Chart,
  DoughnutController,
  ArcElement,
} from 'chart.js';

import {
  declOfNum,
  $getElement,
} from '../../utilities/utilities.js';

class ChartPie {
  #className = 'chart-pie';
  #options;

  #$component;
  #$chart;
  #$legendItems;
  #$bullets;

  #$reviewsValue;
  #$reviewsLabel;

  static #DICTIONARY = ['голос', 'голоса', 'голосов'];

  constructor({
    $parent,
    options = {}
  }) {
    this.#init($parent, options);
    this.#render();
  }

  #init($parent, options) {
    this.#options = options;
    this.#$component = $parent.find(`.js-${this.#className}`);

    this.#$chart = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'chart',
    });

    this.#$legendItems = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'legend-item',
    });

    this.#$bullets = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'bullet',
    });

    this.#$reviewsValue = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'reviews-value',
    });

    this.#$reviewsLabel = $getElement({
      $parent: this.#$component,
      component: this.#className,
      element: 'reviews-label',
    });

    this.#initChartReviews();
    this.#initLegend();
    this.#initChart();
  }

  #render() {
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$legendItems.on(
      'mouseover.chart-pie',
      this.#handleChartLegendMouseover.bind(this)
    );
  }

  #initLegend() {
    this.#$bullets.each(this.#initBullet.bind(this));
  }

  #initBullet(index, element) {
    const { data = [] } = this.#options;
    const dataIndex     = data.length - index - 1;
    const $element      = $(element);

    const {
      firstColor  = 'black',
      secondColor = 'black',
    } = data[dataIndex].gradient;

    $element.css(
      'background-image',
      `linear-gradient(180deg, ${firstColor} 0%, ${secondColor} 100%)`
    );
  }

  #initChartReviews() {
    const { data = [] } = this.#options;
    const dataFiltered = data.filter(item => item?.active);

    if (dataFiltered.length > 0) {
      this.#updateChartReviews(
        dataFiltered[0].value,
        dataFiltered[0].gradient.firstColor
      );
    }
  }

  #initChart() {
    Chart.register(
      DoughnutController,
      ArcElement,
    );

    const context = this.#$chart.get(0).getContext('2d');
    const {
      radius          = 0,
      borderWidth     = 2,
      cutout          = '90%',
      data: chartData = [],
    } = this.#options;

    const values          = chartData.map(item => item.value);
    const labels          = chartData.map(item => item.label);
    const backgroundColor = chartData.map(item => {
      return this.#createGradient(context, item.gradient);
    });

    const data = {
      labels,
      datasets: [
        {
          radius,
          backgroundColor,
          borderWidth,
          cutout,
          data: values,
          hoverOffset: 4,
        }
      ],
    };

    const config = {
      data,
      type: 'doughnut',
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          }
        },
        onHover: this.#handleChartHover.bind(this),
      }
    };

    new Chart(
      context,
      config,
    );
  }

  #handleChartLegendMouseover(event) {
    const index = this.#$legendItems.index(event.currentTarget);
    const { data = [] } = this.#options;
    const realIndex = data.length - index - 1;

    const { value } = data[realIndex];
    const color = data[realIndex].gradient.firstColor;

    this.#updateChartReviews(value, color);
  }

  #handleChartHover(_, item) {
    if (Array.isArray(item) && item.length) {
      const { data } = this.#options;
      const index = item[0]?.index;

      const { value } = data[index];
      const color = data[index]?.gradient?.firstColor;

      this.#updateChartReviews(value, color);
    }
  }

  #updateChartReviews(value, color) {
    this.#$reviewsValue.html(value);
    this.#$reviewsValue.css('color', color);

    const newLabel = declOfNum(value, ChartPie.#DICTIONARY);

    this.#$reviewsLabel.html(newLabel);
    this.#$reviewsLabel.css('color', color);
  }

  #createGradient(context, gradient) {
    const chartCanvas = this.#$chart.get(0);
    const { height, width } = chartCanvas;

    const linearGradient = context.createLinearGradient(
      width / 2,
      0,
      width / 2,
      height
    );

    linearGradient.addColorStop(0, gradient.firstColor);
    linearGradient.addColorStop(1, gradient.secondColor);

    return linearGradient;
  }
}

export default ChartPie;