import { defineComponent, computed, watch, createVNode } from 'vue';
import { Chart } from '@antv/g2';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var id = function () {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
};

var transfromTo = function (data, transfrom) {
  return data.map(function (item, key) {
    var itemData = {
      type: item[transfrom.type || "type"] || 0,
      value: item[transfrom.value || "value"] || 0,
      percent: item[transfrom.percent || "percent"] || 0
    };
    item = __assign(__assign({}, itemData), item);
    return item;
  });
};

var chartId = "zbar_" + id();
var CHART = null;
var barProps = {
  width: {
    default: 500,
    type: Number
  },
  height: {
    default: 500,
    type: Number
  },
  sourceData: {
    default: []
  },
  autoFit: {
    default: false
  },
  padding: {
    default: []
  },
  transfrom: {
    default: null
  },
  legend: {
    default: true
  },
  interaction: {
    default: "element-active"
  },
  scale: {
    default: null
  },
  color: {
    default: "type"
  }
};
var bar = defineComponent({
  name: "zbar",
  props: barProps,
  setup: function (props) {
    return {
      renderData: computed(function () {
        return transfromTo(props.sourceData, props.transfrom);
      }),
      sourceData: props.sourceData,
      legend: props.legend,
      interaction: props.interaction,
      width: props.width,
      height: props.height,
      autoFit: props.autoFit,
      padding: props.padding,
      scale: props.scale,
      color: props.color
    };
  },
  mounted: function () {
    this.create();
  },
  created: function () {
    var _this = this;

    watch(this.sourceData, function () {
      CHART.changeData(_this.renderData);
    });
  },
  methods: {
    // 渲染chart
    renderChart: function () {
      CHART.data(this.renderData); // scale

      if (this.scale) {
        CHART.scale(this.scale);
      }

      CHART.interval().position("type*value").color(this.color);

      if (!this.legend && typeof this.legend === "boolean") {
        CHART.legend(false);
      }

      CHART.interaction(this.interaction);
      CHART.render();
    },
    // 创建实例
    create: function () {
      var _a = this,
          width = _a.width,
          height = _a.height,
          autoFit = _a.autoFit,
          padding = _a.padding;

      var chartOption = {
        container: chartId,
        padding: padding,
        autoFit: autoFit
      };

      if (!autoFit) {
        chartOption.width = width;
        chartOption.height = height;
      }

      CHART = new Chart(chartOption);
      this.renderChart();
    }
  },
  render: function () {
    return createVNode("div", {
      "id": chartId,
      "class": chartId
    }, null);
  }
});

bar.install = function (app) {
  app.component(bar.name, bar);
};

/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-10-09 09:33:32
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-10-09 10:05:14
 */
var component = [bar];
var version = '0.0.1';

var install = function (app) {
  component.map(function (item) {
    app.use(item);
  });
};

var index = {
  install: install,
  version: version
};

export default index;
