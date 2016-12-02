import { MainComponent } from './+main';
import { HOME_DIRECTIVES } from './+main/+home';
import { LINE_DIRECTIVES } from './+main/+line';
import { PIE_DIRECTIVES } from './+main/+pie';
import { DISCRETE_BAR_DIRECTIVES } from './+main/+discrete-bar';
import { MULTI_BAR_DIRECTIVES } from './+main/+multi-bar';
import { MULTI_BAR_HORIZONTAL_DIRECTIVES } from './+main/+multi-bar-horizontal';
import { SHARED_DIRECTIVES } from './shared';

// All directives of the application
export const APP_DIRECTIVES: any = [
  MainComponent,
  HOME_DIRECTIVES,
  LINE_DIRECTIVES,
  PIE_DIRECTIVES,
  DISCRETE_BAR_DIRECTIVES,
  MULTI_BAR_DIRECTIVES,
  MULTI_BAR_HORIZONTAL_DIRECTIVES,
  SHARED_DIRECTIVES
];
