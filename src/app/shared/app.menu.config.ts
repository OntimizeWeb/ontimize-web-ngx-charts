import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'introduction', name: 'INTRODUCTION', icon: 'home', route: '/main/home' },
  { id: 'bubble', name: 'BUBBLE', icon: 'bubble_chart', route: '/main/bubble' },
  { id: 'bullet', name: 'BULLET', icon: 'insert_chart', route: '/main/bullet' },
  { id: 'candlestick', name: 'CANDLESTICK', icon: 'insert_chart_outlined', route: '/main/candlestick' },
  { id: 'discrete_bar', name: 'DISCRETE_BAR', icon: 'bar_chart', route: '/main/discrete-bar' },
  { id: 'donut', name: 'DONUT', icon: 'donut_large', route: '/main/donut' },
  { id: 'directedGraph', name: 'DIRECTEDGRAPH', icon: 'share', route: '/main/directedGraph' },
  {
    id: 'gauge', name: 'GAUGE', icon: 'insert_chart', opened: false, items: [
      { id: 'gaugeDashboard', name: 'GAUGEDASHBOARD', icon: 'insert_chart_outlined', route: '/main/gauge/gaugeDashboard' },
      { id: 'gaugeSimple', name: 'GAUGESIMPLE', icon: 'network_check', route: '/main/gauge/gaugeSimple' },
      { id: 'gaugeSlim', name: 'GAUGESLIM', icon: 'data_usage', route: 'main/gauge/gaugeSlim' },
      { id: 'gaugeSpace', name: 'GAUGESPACE', icon: 'insert_chart_outlined', route: '/main/gauge/gaugeSpace' },
      { id: 'radialPercent', name: 'RADIALPERCENT', icon: 'trip_origin', route: '/main/gauge/radialPercent'}
    ]
  },
  { id: 'line', name: 'LINE', icon: 'show_chart', route: '/main/line' },
  { id: 'lineplusbar', name: 'LINEPLUSBAR', icon: 'show_chart', route: '/main/lineplusbar' },
  { id: 'multi_bar', name: 'MULTI_BAR', icon: 'insert_chart', route: '/main/multi-bar' },
  { id: 'multi_bar_horizontal', name: 'MULTI_BAR_HORIZONTAL', icon: 'insert_chart', route: '/main/multi-bar-horizontal' },
  { id: 'ohlc', name: 'OHLCCHART', icon: 'insert_chart_outlined', route: '/main/ohlc' },
  { id: 'pie', name: 'PIE', icon: 'pie_chart', route: '/main/pie' },
  { id: 'scatter', name: 'SCATTER', icon: 'scatter_plot', route: '/main/scatter' },
  { id: 'stackedArea', name: 'STACKEDAREA', icon: 'timeline', route: '/main/stackedArea'}
];



