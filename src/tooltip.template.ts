/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Tooltip } from './tooltip.component';

import '@spectrum/sp-icon';

export default function standardTemplate(this: Tooltip) {

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
      'is-open': this.open
   };

   const svg = [];
   if (this.infoSmall) { svg.push(html`<sp-icon name="InfoSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`); }
   if (this.successSmall) { svg.push(html`<sp-icon name="SuccessSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`); }
   if (this.alertSmall) { svg.push(html`<sp-icon name="AlertSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`); }
   if (this.helpSmall) { svg.push(html`<sp-icon name="HelpSmall" class="spectrum-Tooltip-typeIcon"></sp-icon>`); }

   return html`
      <span class="spectrum-Tooltip ${classMap(classes)}">
         ${svg}
         <span class="spectrum-Tooltip-label">${this.label}</span>
         <span class="spectrum-Tooltip-tip"></span>
      </span>
      `;
}
