const API_BASE_URL = "https://api.caminodelerrante.com/v1/";
export async function getKickAnalitycs(): Promise<any> {
  const { data } = await useFetch(API_BASE_URL + "kick/analitycs");
  return data;
}

export async function getKick(): Promise<any> {
  const { data } = await useFetch(API_BASE_URL + "kick");
  return data;
}

export async function getPr(id: string): Promise<any> {
  const { data } = await useFetch(API_BASE_URL + "kick/" + id);
  return data;
}

export enum Classification {
  EC = "EC",
  E10 = "E10",
  E = "E",
  T = "T",
  M = "M",
  AO = "AO",
}

export enum Succes {
  SUCCES = "succes",
  FAIL = "fail",
  CANCEL = "cancel",
}

export enum Colors {
  SUCCES = "#0ED800",
  SUCCES_BORDER = "#088A00",
  FAIL = "#FE2E19",
  FAIL_BORDER = "#C21200",
  END = "#C200B0",
  END_BORDER = "#C230B5",
  FAIL_END = "#B7B6B8",
  FAIL_END_BORDER = "#808080",
}

class datasets {
  label: string = "";
  borderColor: Colors = Colors.SUCCES_BORDER;
  backgroundColor: Colors = Colors.SUCCES;
  data: number[] = [];
}

export class chartData {
  labels: string[] = [];
  datasets: datasets[] = [];
}

export class table {
  name: string = "";
  projects: number = 0;
  fail?: number = 0;
  end?: number = 0;
  fail_end?: number = 0;
}

export class generalResponse {
  projects: {
    succes: number;
    fail: number;
    cancel: number;
  } = {
    succes: 0,
    fail: 0,
    cancel: 0,
  };
  global: {
    goal: number;
    goal_fail: number;
    collected: number;
    collected_fail: number;
  } = {
    goal: 0,
    goal_fail: 0,
    collected: 0,
    collected_fail: 0,
  };
  years: table[] = [];
  years_chart: chartData = new chartData();
  months: table[] = [];
  months_chart: chartData = new chartData();
  states: table[] = [];
  states_chart: chartData = new chartData();
  printed: number = 0;
  printed_fail: number = 0;
  goals: table[] = [];
  goals_chart: chartData = new chartData();
  sponsors: table[] = [];
  sponsors_chart: chartData = new chartData();
  average_ticket: table[] = [];
  average_ticket_chart: chartData = new chartData();
  percentage_surpassed: table[] = [];
  percentage_surpassed_chart: chartData = new chartData();
}

export class CreateKickDto {
  initial_date: Date | undefined;

  final_date: Date | undefined;

  city: string | undefined;

  name: string | undefined;

  description: string | undefined;

  artist: string | undefined;

  classification: Classification | undefined;

  printed: boolean | undefined;

  closed: boolean | undefined;

  succes: Succes | undefined;

  goal: number | undefined;

  collected: number | undefined;

  sponsors: number | undefined;

  link: string | undefined;

  minimun_printed: number | undefined;
}
