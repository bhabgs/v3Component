import { ScaleConfig } from '@antv/g2/lib/dependents';
import { defineComponent, reactive, watch } from 'vue';

const sourceData = reactive([
  { name: '未知', value: 654, percent: 0.01 },
  { name: '17 岁以下', value: 654, percent: 0.02 },
  { name: '18-24 岁', value: 4400, percent: 0.2 },
  { name: '25-29 岁', value: 5300, percent: 0.24 },
  { name: '30-39 岁', value: 6200, percent: 0.28 },
  { name: '40-49 岁', value: 3300, percent: 0.14 },
  { name: '50 岁以上', value: 1500, percent: 0.06 },
]);

const scale: Record<string, ScaleConfig> = {
  type: {
    formatter(v) {
      return v;
    },
  },
};

export default defineComponent({
  setup(props) {},
  created() {
    setTimeout(() => {
      sourceData.unshift({ name: 'any', value: 654, percent: 0.01 });
    }, 3000);
  },
  render() {
    return (
      <zbar
        style={{ height: `300px`, width: '500px' }}
        autoFit
        sourceData={sourceData}
        padding={[10, 0, 50, 0]}
        transfrom={{
          type: 'name',
          value: 'value',
          percent: 'percent',
        }}
        scale={scale}
      />
    );
  },
});
