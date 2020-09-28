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
import { DemoTooltip } from './demo-tooltip.component';

import '@spectrum/sp-tooltip';
import '@spectrum/sp-container';


export default function template(this: DemoTooltip) {
  return html`
  <sp-container>
  <sp-rule medium label="Neutral"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip top label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip top label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Informative"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip info label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip info label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip info infoSmall label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip info infoSmall label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Positive"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip positive label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip positive label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip positive successSmall label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip positive successSmall label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Negative"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip negative label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip negative label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip negative alertSmall label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip negative alertSmall label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Directions"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip top label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip left label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip right label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-tooltip bottom label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Success"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip success label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Error"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip error label="Label"></sp-tooltip></pre>
  </sp-demo>
  <sp-rule medium label="Help"></sp-rule>
  <sp-demo width="200">
  <pre><sp-tooltip info helpSmall label="Label"></sp-tooltip></pre>
  </sp-demo>
 </sp-container>
  `;
  
}
