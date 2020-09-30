const id = () => {
  return Number(
    Math.random().toString().substr(3, length) + Date.now()
  ).toString(36);
};

const transfromTo: (
  data: Array<any>,
  transfrom: TRANSFROMITEM
) => Array<TRANSFROMITEM> = (data, transfrom) => {
  return data.map((item: any, key) => {
    const itemData = {
      type: item[transfrom.type || "type"] || 0,
      value: item[transfrom.value || "value"] || 0,
      percent: item[transfrom.percent || "percent"] || 0,
    };
    item = { ...itemData, ...item };
    return item;
  });
};

export { id, transfromTo };
