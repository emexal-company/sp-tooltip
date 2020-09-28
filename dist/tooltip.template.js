import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export default function standardTemplate() {
    const classes = {
        'spectrum-Tooltip--top': this.top || this.info || this.success || this.error || this.positive || this.negative,
        'spectrum-Tooltip--left': this.left,
        'spectrum-Tooltip--right': this.right,
        'spectrum-Tooltip--bottom': this.bottom,
        'spectrum-Tooltip--info': this.info,
        'spectrum-Tooltip--positive': this.positive,
        'spectrum-Tooltip--negative': this.negative,
        'spectrum-Tooltip--success': this.success,
        'spectrum-Tooltip--error': this.error,
    };
    const svg = [];
    if (this.infoSmall) {
        svg.push(html `<sp-icon name="InfoSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`);
    }
    if (this.successSmall) {
        svg.push(html `<sp-icon name="SuccessSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`);
    }
    if (this.alertSmall) {
        svg.push(html `<sp-icon name="AlertSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`);
    }
    if (this.helpSmall) {
        svg.push(html `<sp-icon name="HelpSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`);
    }
    return html `
      <span class="spectrum-Tooltip ${classMap(classes)} is-open">
         ${svg}
         <span class="spectrum-Tooltip-label">${this.label}</span>
         <span class="spectrum-Tooltip-tip"></span>
      </span>
      `;
}
//# sourceMappingURL=tooltip.template.js.map