import { Base } from '@spectrum/sp-base';
export declare class Tooltip extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    top: boolean;
    left: boolean;
    right: boolean;
    bottom: boolean;
    info: boolean;
    topinfo: boolean;
    positive: boolean;
    negative: boolean;
    success: boolean;
    error: boolean;
    infoSmall: boolean;
    successSmall: boolean;
    alertSmall: boolean;
    helpSmall: boolean;
    label: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-tooltip': Tooltip;
    }
}
