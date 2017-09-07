import { MenuRootItem } from 'ontimize-web-ng2';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'introduction', name: 'INTRODUCTION', icon: 'home', route: '/main/home' },
  { id: 'line', name: 'LINE', icon: 'show_chart', route: '/main/line' },
  { id: 'pie', name: 'PIE', icon: 'pie_chart', route: '/main/pie' },
  { id: 'discrete_bar', name: 'DISCRETE_BAR', icon: 'insert_chart', route: '/main/discrete-bar' },
  { id: 'multi_bar', name: 'MULTI_BAR', icon: 'insert_chart', route: '/main/multi-bar' },
  { id: 'multi_bar_horizontal', name: 'MULTI_BAR_HORIZONTAL', icon: 'insert_chart', route: '/main/multi-bar-horizontal' }
];



