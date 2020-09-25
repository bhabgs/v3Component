import { defineComponent } from "vue";

const bar: any = {
  name: "zbar",
  render() {
    return (
      <div
        class="aaa"
        onClick={() => {
          alert(0);
        }}
      >
        Vue 3.0
      </div>
    );
  },
};

bar.install = (app) => {
  app.component(bar.name, bar);
};

export default bar;
