import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'introduction', name: 'INTRODUCTION', icon: 'home', route: '/main/home' },
  { id: 'customchart', name: 'CREATECHART', icon: 'draw', route: '/main/custom-chart' },
  {
    id: 'line', name: 'LINE_CHARTS', icon: 'show_chart', opened: false, items: [
      { id: 'line', name: 'LINE', icon: 'show_chart', route: '/main/line-chart/line' },
      // { id: 'lineplusbar', name: 'LINEPLUSBAR', icon: 'multiline_chart', route: '/main/line-chart/lineplusbar' },
      // { id: 'parallelCoordinates', name: 'PARALLELCOORDINATES', icon: 'insert_chart', route: '/main/line-chart/parallelCoordinates' },
      // { id: 'ohlc', name: 'OHLCCHART', icon: 'insert_chart_outlined', route: '/main/line-chart/ohlc' }
    ]
  },
  {
    id: 'barchart', name: 'BARCHART', icon: 'bar_chart', opened: false, items: [
      { id: 'discrete_bar', name: 'DISCRETE_BAR', icon: 'bar_chart', route: '/main/bar-chart/discrete-bar' },
      { id: 'multi_bar', name: 'MULTI_BAR', icon: 'insert_chart', route: '/main/bar-chart/multi-bar' },
      { id: 'multi_horizontal', name: 'MULTI_BAR_HORIZONTAL', icon: 'insert_chart', route: '/main/bar-chart/multi-bar-horizontal' },
      // { id: 'bullet', name: 'BULLET', icon: 'insert_chart', route: '/main/bar-chart/bullet' },
    ]
  },
  {
    id: 'areachart', name: 'AREACHART', icon: 'insert_photo', opened: false, items: [
      { id: 'stackedArea', name: 'STACKEDAREA', icon: 'timeline', route: '/main/area/stackedArea' },
      // { id: 'radar', name: 'RADAR', icon: 'insert_chart', route: '/main/area/radar' },
    ]
  },
  // {
  //   id: 'bublechart', name: 'BUBBLECHART', icon: 'bubble_chart', opened: false, items: [
  //     { id: 'bubble', name: 'BUBBLE', icon: 'bubble_chart', route: '/main/bubble/bubble' },
  //     { id: 'scatter', name: 'SCATTER', icon: 'scatter_plot', route: '/main/bubble/scatter' },
  //   ]
  // },
  // {
  //   id: 'gauge', name: 'GAUGE', icon: 'insert_chart', opened: false, items: [
  //     { id: 'gaugeDashboard', name: 'GAUGEDASHBOARD', icon: 'insert_chart_outlined', route: '/main/gauge/gaugeDashboard' },
  //     { id: 'gaugeSimple', name: 'GAUGESIMPLE', icon: 'network_check', route: '/main/gauge/gaugeSimple' },
  //     { id: 'gaugeSlim', name: 'GAUGESLIM', icon: 'data_usage', route: 'main/gauge/gaugeSlim' },
  //     { id: 'gaugeSpace', name: 'GAUGESPACE', icon: 'insert_chart_outlined', route: '/main/gauge/gaugeSpace' },
  //     { id: 'radialPercent', name: 'RADIALPERCENT', icon: 'trip_origin', route: '/main/gauge/radialPercent' }
  //   ]
  // },
  {
    id: 'otherchart', name: 'OTHERCHART', icon: 'timeline', opened: false, items: [
      { id: 'donut', name: 'DONUT', icon: 'donut_large', route: '/main/other-charts/donut' },
      { id: 'pie', name: 'PIE', icon: 'pie_chart', route: '/main/other-charts/pie' },
      // { id: 'candlestick', name: 'CANDLESTICK', icon: 'insert_chart_outlined', route: '/main/other-charts/candlestick' },
      // { id: 'directedGraph', name: 'DIRECTEDGRAPH', icon: 'share', route: '/main/other-charts/directedGraph' }
    ]
  },
  { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }

];

