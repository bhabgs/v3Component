import { defineComponent, watch, computed, App } from "vue";
import { id, transfromTo } from "@/util";
import { Chart, Geometry } from "@antv/g2";
import {
  AttributeOption,
  LegendCfg,
  ScaleOption,
} from "@antv/g2/lib/interface";

const chartId = `zbar_${id()}`;

let CHART: Chart = null as any;

const barProps = {
  width: {
    default: 500,
    type: Number,
  },
  height: {
    default: 500,
    type: Number,
  },
  sourceData: {
    default: [],
  },
  autoFit: {
    default: false,
  },
  padding: {
    default: [],
  },
  transfrom: {
    default: (null as unknown) as TRANSFROMITEM,
  },
  legend: {
    default: true as LegendCfg,
  },
  interaction: {
    default: "element-active",
  },
  scale: {
    default: (null as unknown) as Record<string, ScaleOption>,
  },
  color: {
    default: ("type" as unknown) as AttributeOption,
  },
};

const bar = defineComponent({
  name: "zbar",
  props: barProps,

  setup(props) {
    return {
      renderData: computed(() => {
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
      color: props.color,
    };
  },

  mounted() {
    this.create();
  },

  created() {
    watch(this.sourceData, () => {
      CHART.changeData(this.renderData);
    });
  },

  methods: {
    // 渲染chart
    renderChart() {
      CHART.data(this.renderData);
      // scale
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
    create() {
      const { width, height, autoFit, padding } = this;

      const chartOption: any = {
        container: chartId,
        padding,
        autoFit,
      };

      if (!autoFit) {
        chartOption.width = width;
        chartOption.height = height;
      }

      CHART = new Chart(chartOption);
      this.renderChart();
    },
  },

  render() {
    return <div id={chartId} class={chartId}></div>;
  },
});

bar.install = (app: App) => {
  app.component(bar.name, bar);
};

export default bar;
