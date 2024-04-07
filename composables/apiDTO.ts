export interface ItableChart {
  table: TableItem[];
  chart: chart;
}

export interface TableItem {
  name: string;
  successful: string;
  unsuccessful: string;
}

export interface chart {
  labels: string[];
  datasets: datasets[];
}

interface datasets {
  label: string;
  borderColor: string;
  backgroundColor: string;
  data: number[];
}
