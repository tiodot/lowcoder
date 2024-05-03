import { JSONObject } from "lowcoder-sdk";
import { XAXisComponentOption } from "echarts";

export type I18nObjects = {
  defaultDataSource: JSONObject[];
  defaultEchartsJsonOption: Record<string, unknown>;
  defaultGaugeChartOption: Record<string, unknown>;
  defaultFunnelChartOption: Record<string, unknown>;
  defaultSankeyChartOption: Record<string, unknown>;
  defaultCandleStickChartOption: Record<string, unknown>;
  defaultRadarChartOption: Record<string, unknown>;
  defaultMapJsonOption: Record<string, unknown>;
  timeXAxisLabel?: XAXisComponentOption["axisLabel"];
  imageEditorLocale?: Record<string, string>;
};
