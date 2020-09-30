interface STRINGKEY<T = any> {
  [k: string]: T;
}

interface TRANSFROMITEM {
  type: string;
  value: string;
  percent: string;
}

type ChartColor = string | Array<string> | ((v: string | number) => string);
