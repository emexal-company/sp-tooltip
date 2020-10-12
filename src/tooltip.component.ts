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


import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './tooltip.styles';
import standardTemplate from './tooltip.template';

@customElement('sp-tooltip')
export class Tooltip extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: Boolean }) public top: boolean = false;
  @property({ type: Boolean }) public left: boolean = false;
  @property({ type: Boolean }) public right: boolean = false;
  @property({ type: Boolean }) public bottom: boolean = false;
  @property({ type: Boolean }) public info: boolean = false;
  @property({ type: Boolean }) public topinfo: boolean = false;
  @property({ type: Boolean }) public positive: boolean = false;
  @property({ type: Boolean }) public negative: boolean = false;
  @property({ type: Boolean }) public success: boolean = false;
  @property({ type: Boolean }) public error: boolean = false;
  @property({ type: Boolean }) public infoSmall: boolean = false;
  @property({ type: Boolean }) public successSmall: boolean = false;
  @property({ type: Boolean }) public alertSmall: boolean = false;
  @property({ type: Boolean }) public helpSmall: boolean = false;
  @property({ type: Boolean }) public open: boolean = true;
  @property({ type: String })  public label: string = '';
  
  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-tooltip': Tooltip;
  }
}
