export class ChartLegendConfiguration {
    width: string = "auto";
    height: string = "auto";
    align: boolean =  true;
    rightAlign: boolean = true;
    maxKeyLength: number = 20;
    padding: number = 20;
    updateState: boolean = true;
    radioButtonMode: boolean = false;
    expanded: boolean = false;
    vers: string = "classic";

    public getLegendOptions(){
        let legend = {
            width: this.width,
            height: this.height,
            align: this.align,
            rightAlign: this.rightAlign,
            maxKeyLength: this.maxKeyLength,
            padding: this.padding,
            updateState: this.updateState,
            radioButtonMode: this.radioButtonMode,
            expanded: this.expanded,
            vers: this.vers
        }
        return legend;
    }
}