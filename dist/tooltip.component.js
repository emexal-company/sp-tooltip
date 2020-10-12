import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './tooltip.styles';
import standardTemplate from './tooltip.template';
let Tooltip = class Tooltip extends Base {
    constructor() {
        super(...arguments);
        this.top = false;
        this.left = false;
        this.right = false;
        this.bottom = false;
        this.info = false;
        this.topinfo = false;
        this.positive = false;
        this.negative = false;
        this.success = false;
        this.error = false;
        this.infoSmall = false;
        this.successSmall = false;
        this.alertSmall = false;
        this.helpSmall = false;
        this.label = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Tooltip.componentStyles = [labelStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "top", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "left", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "right", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "bottom", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "info", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "topinfo", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "positive", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "negative", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "success", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "error", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "infoSmall", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "successSmall", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "alertSmall", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Tooltip.prototype, "helpSmall", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Tooltip.prototype, "label", void 0);
Tooltip = __decorate([
    customElement('sp-tooltip')
], Tooltip);
export { Tooltip };
//# sourceMappingURL=tooltip.component.js.map