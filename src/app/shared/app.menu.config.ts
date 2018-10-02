import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'introduction', name: 'INTRODUCTION', icon: 'home', route: '/main/home' },
  { id: 'candlestick', name: 'CANDLESTICK', icon: 'insert_chart_outlined', route: '/main/candlestick' },
  { id: 'discrete_bar', name: 'DISCRETE_BAR', icon: 'bar_chart', route: '/main/discrete-bar' },
  { id: 'donut', name: 'DONUT', icon: 'donut_large', route: '/main/donut' },
  { id: 'directedGraph', name: 'DIRECTEDGRAPH', icon: 'share', route: '/main/directedGraph' },
  { id: 'line', name: 'LINE', icon: 'show_chart', route: '/main/line' },
  { id: 'lineplusbar', name: 'LINEPLUSBAR', icon: 'show_chart', route: '/main/lineplusbar' },
  { id: 'multi_bar', name: 'MULTI_BAR', icon: 'insert_chart', route: '/main/multi-bar' },
  { id: 'multi_bar_horizontal', name: 'MULTI_BAR_HORIZONTAL', icon: 'insert_chart', route: '/main/multi-bar-horizontal' },
  { id: 'ohlc', name: 'OHLCCHART', icon: 'insert_chart_outlined', route: '/main/ohlc' },
  { id: 'pie', name: 'PIE', icon: 'pie_chart', route: '/main/pie' },
  { id: 'scatter', name: 'SCATTER', icon: 'scatter_plot', route: '/main/scatter' }
];



