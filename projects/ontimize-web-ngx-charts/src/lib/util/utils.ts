import { MatDialog } from "@angular/material";
import { Constants } from "./constants";

export class Utils {
  static setFullscreenDialog(fullscreen: boolean, dialogRef: any): void {
    if (!fullscreen) {
      dialogRef.updateSize("100%", "100%");
    } else {
      dialogRef.updateSize(Constants.DEFAULT_WIDTH_DIALOG, Constants.DEFAULT_HEIGHT_DIALOG);
    }
  }

  static openModalVisor(dialog: MatDialog, component: any, data: object) {
    dialog.open(component, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: Constants.DEFAULT_HEIGHT_DIALOG,
      width: Constants.DEFAULT_WIDTH_DIALOG,
      panelClass: ['o-dialog-class', 'o-table-dialog', 'o-report'],
      data: data
    });
  }
  static adaptColorScheme(colorScheme: string[]): { domain: string[] } {
    return { domain: colorScheme };
  }
}
