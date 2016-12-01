angular.module('n.ui.foundation.tpls', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('uib/template/accordion/accordion-group.html',
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"accordion-item\" ng-class=\"{'is-active': isOpen}\" ng-keypress=\"toggleOpen($event)\">\n" +
    "        <a role=\"button\" class=\"accordion-title\" data-toggle=\"collapse\" aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle>\n" +
    "            <span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">\n" +
    "                {{heading}}\n" +
    "            </span>\n" +
    "        </a>\n" +
    "    <!--</h4>-->\n" +
    "    <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" uib-collapse=\"!isOpen\">\n" +
    "        <div class=\"accordion-content\" ng-transclude></div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/accordion/accordion.html',
    "<div role=\"tablist\" class=\"accordion\" ng-transclude></div>"
  );


  $templateCache.put('uib/template/alert/alert.html',
    "<button class=\"close-button\" aria-label=\"Dismiss alert\" type=\"button\" ng-show=\"closeable\" ng-click=\"close({$event: $event})\">\n" +
    "    <span aria-hidden=\"true\">&times;</span>\n" +
    "</button>\n" +
    "<div ng-transclude></div>"
  );


  $templateCache.put('uib/template/datepicker/datepicker.html',
    "<div ng-switch=\"datepickerMode\">\n" +
    "    <div uib-daypicker ng-switch-when=\"day\" tabindex=\"0\" class=\"uib-daypicker\"></div>\n" +
    "    <div uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\" class=\"uib-monthpicker\"></div>\n" +
    "    <div uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\" class=\"uib-yearpicker\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/datepicker/day.html',
    "<table role=\"grid\" class=\"uib-datepicker\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(-1)\" tabindex=\"-1\">\n" +
    "                    <i class=\"fi-chevron-left\"></i>\n" +
    "                    <span class=\"show-for-sr\">previous</span>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "            <th colspan=\"{{::5 + showWeeks}}\">\n" +
    "                <button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"button expanded hollow\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\">\n" +
    "                    <strong>{{title}}</strong>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(1)\" tabindex=\"-1\">\n" +
    "                    <i class=\"fi-chevron-right\"></i>\n" +
    "                    <span class=\"show-for-sr\">next</span>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
    "            <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\">\n" +
    "                <small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "            <td ng-if=\"showWeeks\" class=\"text-center\">\n" +
    "                <em>{{ weekNumbers[$index] }}</em>\n" +
    "            </td>\n" +
    "            <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
    "                <button type=\"button\" class=\"button hollow\" uib-is-class=\"'selected' for selectedDt, 'active' for activeDt on dt\" ng-click=\"select(dt.date)\" ng-disabled=\"::dt.disabled\" tabindex=\"-1\">\n" +
    "                    <span ng-class=\"::{'text-muted': dt.secondary}\">\n" +
    "                        {{::dt.label}}\n" +
    "                    </span>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>"
  );


  $templateCache.put('uib/template/datepicker/month.html',
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(-1)\" tabindex=\"-1\">\n" +
    "                    <i class=\"fi-chevron-left\"></i>\n" +
    "                    <span class=\"show-for-sr\">previous</span>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "            <th colspan=\"{{::yearHeaderColspan}}\">\n" +
    "                <button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"button expanded hollow\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\">\n" +
    "                    <strong>{{title}}</strong>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(1)\" tabindex=\"-1\">\n" +
    "                    <i class=\"fi-chevron-right\"></i>\n" +
    "                    <span class=\"show-for-sr\">next</span>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "            <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
    "                <button type=\"button\" class=\"button hollow\" uib-is-class=\"'selected' for selectedDt, 'active' for activeDt on dt\" ng-click=\"select(dt.date)\" ng-disabled=\"::dt.disabled\" tabindex=\"-1\">\n" +
    "                    <span ng-class=\"::{'text-info': dt.current}\">\n" +
    "                        {{::dt.label}}\n" +
    "                    </span>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>"
  );


  $templateCache.put('uib/template/datepicker/year.html',
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(-1)\" tabindex=\"-1\">\n" +
    "                    <i class=\"fi-chevron-left\"></i>\n" +
    "                    <span class=\"show-for-sr\">previous</span>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "            <th colspan=\"{{::columns - 2}}\">\n" +
    "                <button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"button expanded hollow\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\">\n" +
    "                    <strong>{{title}}</strong>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(1)\" tabindex=\"-1\">\n" +
    "                    <i class=\"fi-chevron-right\"></i>\n" +
    "                    <span class=\"show-for-sr\">next</span>\n" +
    "                </button>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
    "            <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
    "                <button type=\"button\" cclass=\"button hollow\" uib-is-class=\"'selected' for selectedDt, 'active' for activeDt on dt\" ng-click=\"select(dt.date)\" ng-disabled=\"::dt.disabled\" tabindex=\"-1\">\n" +
    "                    <span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>"
  );


  $templateCache.put('uib/template/datepickerPopup/popup.html',
    "<div role=\"presentation\" class=\"uib-datepicker-popup uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
    "    \n" +
    "    <div ng-transclude></div>\n" +
    "    \n" +
    "    <div ng-if=\"showButtonBar\" class=\"uib-button-bar clearfix\">\n" +
    "        \n" +
    "        <div class=\"float-left\">\n" +
    "          \n" +
    "            <button type=\"button\" class=\"button hollow small uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">\n" +
    "              {{ getText('current') }}\n" +
    "          </button>\n" +
    "          \n" +
    "            <button type=\"button\" class=\"button alert small hollow uib-clear\" ng-click=\"select(null, $event)\">\n" +
    "              {{ getText('clear') }}\n" +
    "          </button>\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        <button type=\"button\" class=\"button secondary hollow small float-right uib-close\" ng-click=\"close($event)\">\n" +
    "            {{ getText('close') }}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/modal/window.html',
    "<div class=\"reveal {{size ? size : ''}}\" uib-modal-transclude>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/pager/pager.html',
    "<li class=\"pagination-previous\" ng-class=\"{'disabled':noPrevious()||ngDisabled}\">\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('previous')}} <span class=\"show-for-sr\">page</span>\n" +
    "    </a>\n" +
    "\n" +
    "</li>\n" +
    "\n" +
    "<li class=\"pagination-next\" ng-class=\"{disabled: noNext()||ngDisabled, next: align}\">\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('next')}}\n" +
    "    </a>\n" +
    "</li>"
  );


  $templateCache.put('uib/template/pagination/pagination.html',
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\n" +
    "    <a ng-click=\"selectPage(1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('first')}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('previous')}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\">\n" +
    "    <a ng-click=\"selectPage(page.number, $event)\" ng-disabled=\"ngDisabled&&!page.active\" uib-tabindex-toggle>\n" +
    "        {{page.text}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('next')}}\n" +
    "    </a>\n" +
    "</li>\n" +
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\n" +
    "    <a ng-click=\"selectPage(totalPages, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\n" +
    "        {{::getText('last')}}\n" +
    "    </a>\n" +
    "</li>"
  );


  $templateCache.put('uib/template/popover/popover-html.html',
    "<div>\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/popover/popover-template.html',
    "<div>\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div uib-tooltip-template-transclude=\"contentExp()\" tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/popover/popover.html',
    "<div>\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\n" +
    "    <div ng-bind=\"content\"></div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/progressbar/bar.html',
    "<div class=\"progress-meter\" role=\"progressbar\" ng-class=\"type\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\n" +
    "    <p class=\"progress-meter-text\" ng-transclude></p>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/progressbar/progress.html',
    "<div class=\"progress\" ng-class=\"type\" ng-transclude aria-labelledby=\"{{::title}}\"></div>"
  );


  $templateCache.put('uib/template/progressbar/progressbar.html',
    "<div class=\"progress\" ng-class=\"type\">\n" +
    "    <div class=\"progress-meter\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\n" +
    "        <p class=\"progress-meter-text\" ng-transclude></p>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/rating/rating.html',
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\n" +
    "    \n" +
    "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"material-icons\" ng-attr-title=\"{{r.title}}\">\n" +
    "        <span ng-if=\"$index < value\" class=\"{{r.stateOn || 'text-color-primary fi-star'}}\"></span>\n" +
    "        <span ng-if=\"$index >= value\" class=\"{{r.stateOff || 'fi-star'}}\"></span>\n" +
    "    </i>\n" +
    "</span>"
  );


  $templateCache.put('uib/template/tabs/tab.html',
    "<li ng-class=\"[{'is-active': active, 'is-disabled': disabled}, classes]\" class=\"tabs-title\">\n" +
    "    <a ng-click=\"select($event)\" aria-selected=\"{{active}}\" uib-tab-heading-transclude>\n" +
    "        {{heading}}\n" +
    "    </a>\n" +
    "</li>"
  );


  $templateCache.put('uib/template/tabs/tabset.html',
    "<div>\n" +
    "    <ul class=\"tabs\" ng-class=\"{'vertical': vertical}\" ng-transclude>\n" +
    "    </ul>\n" +
    "    <div class=\"tabs-content\" ng-class=\"{'vertical': vertical}\">\n" +
    "        <div class=\"tabs-panel\" ng-repeat=\"tab in tabset.tabs\" ng-class=\"{'is-active': tabset.active === tab.index}\" uib-tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('uib/template/timepicker/timepicker.html',
    "<table class=\"uib-timepicker\">\n" +
    "    <tbody>\n" +
    "        <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "            <td class=\"uib-increment hours\">\n" +
    "                <button ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noIncrementHours()\" tabindex=\"-1\">\n" +
    "                    <i class=\"material-icons\" ng-include=\"'node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_up_24px.svg'\"></i>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "            <td>&nbsp;</td>\n" +
    "            <td class=\"uib-increment minutes\">\n" +
    "                <button ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"-1\">\n" +
    "                    <i class=\"material-icons\" ng-include=\"'node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_up_24px.svg'\"></i>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "            <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "            <td ng-show=\"showSeconds\" class=\"uib-increment seconds\">\n" +
    "                <button ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"-1\">\n" +
    "                    <i class=\"material-icons\" ng-include=\"'node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_up_24px.svg'\"></i>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "            <td ng-show=\"showMeridian\"></td>\n" +
    "        </tr>\n" +
    "        \n" +
    "        <tr>\n" +
    "            <td class=\"form-group uib-time hours\">\n" +
    "                <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"text-center\" ng-class=\"{'is-invalid-input': invalidHours}\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
    "            </td>\n" +
    "            <td class=\"uib-separator\">:</td>\n" +
    "            <td class=\"form-group uib-time minutes\">\n" +
    "                <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"text-center\" ng-class=\"{'is-invalid-input': invalidMinutes}\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
    "            </td>\n" +
    "            <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
    "            <td class=\"form-group uib-time seconds\" ng-show=\"showSeconds\">\n" +
    "                <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"text-center\" ng-class=\"{'is-invalid-input': invalidSeconds}\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
    "            </td>\n" +
    "            <td ng-show=\"showMeridian\" class=\"uib-time am-pm\">\n" +
    "                <button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"button small secondary hollow\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">\n" +
    "                    {{meridian}}\n" +
    "                </button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        \n" +
    "        <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
    "            <td class=\"uib-decrement hours\">\n" +
    "                <button ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noDecrementHours()\" tabindex=\"-1\">\n" +
    "                    <i class=\"material-icons\" ng-include=\"'node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg'\"></i>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "            <td>&nbsp;</td>\n" +
    "            <td class=\"uib-decrement minutes\">\n" +
    "                <button ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"-1\">\n" +
    "                    <i class=\"material-icons\" ng-include=\"'node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg'\"></i>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "            <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
    "            <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\">\n" +
    "                <button ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"-1\">\n" +
    "                    <i class=\"material-icons\" ng-include=\"'node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg'\"></i>\n" +
    "                </button>\n" +
    "            </td>\n" +
    "            <td ng-show=\"showMeridian\"></td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>"
  );


  $templateCache.put('uib/template/tooltip/tooltip-html-popup.html',
    "<!--<div class=\"tooltip-arrow\"></div>-->\n" +
    "<div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>"
  );


  $templateCache.put('uib/template/tooltip/tooltip-popup.html',
    "<!--<div class=\"tooltip-arrow\"></div>-->\n" +
    "<div class=\"tooltip-inner\" ng-bind=\"content\"></div>"
  );


  $templateCache.put('uib/template/tooltip/tooltip-template-popup.html',
    "<!--<div class=\"tooltip-arrow\"></div>-->\n" +
    "<div class=\"tooltip-inner\" uib-tooltip-template-transclude=\"contentExp()\" tooltip-template-transclude-scope=\"originScope()\"></div>"
  );


  $templateCache.put('uib/template/typeahead/typeahead-match.html',
    "<a href tabindex=\"-1\" ng-bind-html=\"match.label | uibTypeaheadHighlight:query\" ng-attr-title=\"{{match.label}}\"></a>"
  );


  $templateCache.put('uib/template/typeahead/typeahead-popup.html',
    "<ul class=\"menu vertical\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li class=\"uib-typeahead-match\" ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" +
    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\">\n" +
    "        </div>\n" +
    "    </li>\n" +
    "</ul>"
  );

}]);
