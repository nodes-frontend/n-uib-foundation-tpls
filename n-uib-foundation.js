angular.module('n.ui.foundation.tpls', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('uib/template/accordion/accordion-group.html',
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"accordion-item\" ng-class=\"{'is-active': isOpen}\" ng-keypress=\"toggleOpen($event)\">\r" +
    "\n" +
    "        <a role=\"button\" class=\"accordion-title\" data-toggle=\"collapse\" aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "            <span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">\r" +
    "\n" +
    "                {{heading}}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    <!--</h4>-->\r" +
    "\n" +
    "    <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" uib-collapse=\"!isOpen\">\r" +
    "\n" +
    "        <div class=\"accordion-content\" ng-transclude></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/accordion/accordion.html',
    "<div role=\"tablist\" class=\"accordion\" ng-transclude></div>"
  );


  $templateCache.put('uib/template/alert/alert.html',
    "<button class=\"close-button\" aria-label=\"Dismiss alert\" type=\"button\" ng-show=\"closeable\" ng-click=\"close({$event: $event})\">\r" +
    "\n" +
    "    <span aria-hidden=\"true\"><i class=\"fa fa-close\"></i></span>\r" +
    "\n" +
    "</button>\r" +
    "\n" +
    "<div ng-transclude></div>"
  );


  $templateCache.put('uib/template/datepicker/datepicker.html',
    "<div ng-switch=\"datepickerMode\">\r" +
    "\n" +
    "    <div uib-daypicker ng-switch-when=\"day\" tabindex=\"0\" class=\"uib-daypicker\"></div>\r" +
    "\n" +
    "    <div uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\" class=\"uib-monthpicker\"></div>\r" +
    "\n" +
    "    <div uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\" class=\"uib-yearpicker\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/datepicker/day.html',
    "<table role=\"grid\" class=\"uib-datepicker\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(-1)\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-left\"></i>\r" +
    "\n" +
    "                    <span class=\"show-for-sr\">previous</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th colspan=\"{{::5 + showWeeks}}\">\r" +
    "\n" +
    "                <button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"button expanded hollow\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <strong>{{title}}</strong>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(1)\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "                    <span class=\"show-for-sr\">next</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th ng-if=\"showWeeks\" class=\"text-center\"></th>\r" +
    "\n" +
    "            <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\">\r" +
    "\n" +
    "                <small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\" role=\"row\">\r" +
    "\n" +
    "            <td ng-if=\"showWeeks\" class=\"text-center\">\r" +
    "\n" +
    "                <em>{{ weekNumbers[$index] }}</em>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"button hollow\" uib-is-class=\"'selected' for selectedDt, 'active' for activeDt on dt\" ng-click=\"select(dt.date)\" ng-disabled=\"::dt.disabled\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <span ng-class=\"::{'text-muted': dt.secondary}\">\r" +
    "\n" +
    "                        {{::dt.label}}\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>"
  );


  $templateCache.put('uib/template/datepicker/month.html',
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(-1)\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-left\"></i>\r" +
    "\n" +
    "                    <span class=\"show-for-sr\">previous</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th colspan=\"{{::yearHeaderColspan}}\">\r" +
    "\n" +
    "                <button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"button expanded hollow\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <strong>{{title}}</strong>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(1)\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "                    <span class=\"show-for-sr\">next</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\" role=\"row\">\r" +
    "\n" +
    "            <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"button hollow\" uib-is-class=\"'selected' for selectedDt, 'active' for activeDt on dt\" ng-click=\"select(dt.date)\" ng-disabled=\"::dt.disabled\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <span ng-class=\"::{'text-info': dt.current}\">\r" +
    "\n" +
    "                        {{::dt.label}}\r" +
    "\n" +
    "                    </span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>"
  );


  $templateCache.put('uib/template/datepicker/year.html',
    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(-1)\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-left\"></i>\r" +
    "\n" +
    "                    <span class=\"show-for-sr\">previous</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th colspan=\"{{::columns - 2}}\">\r" +
    "\n" +
    "                <button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"button expanded hollow\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <strong>{{title}}</strong>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "            <th>\r" +
    "\n" +
    "                <button type=\"button\" class=\"button expanded hollow uib-datepicker__icon-button\" ng-click=\"move(1)\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-right\"></i>\r" +
    "\n" +
    "                    <span class=\"show-for-sr\">next</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\" role=\"row\">\r" +
    "\n" +
    "            <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\r" +
    "\n" +
    "                <button type=\"button\" cclass=\"button hollow\" uib-is-class=\"'selected' for selectedDt, 'active' for activeDt on dt\" ng-click=\"select(dt.date)\" ng-disabled=\"::dt.disabled\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>"
  );


  $templateCache.put('uib/template/datepickerPopup/popup.html',
    "<div role=\"presentation\" class=\"uib-datepicker-popup uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div ng-transclude></div>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <div ng-if=\"showButtonBar\" class=\"uib-button-bar clearfix\">\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div class=\"float-left\">\r" +
    "\n" +
    "          \r" +
    "\n" +
    "            <button type=\"button\" class=\"button hollow small uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">\r" +
    "\n" +
    "              {{ getText('current') }}\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "          \r" +
    "\n" +
    "            <button type=\"button\" class=\"button alert small hollow uib-clear\" ng-click=\"select(null, $event)\">\r" +
    "\n" +
    "              {{ getText('clear') }}\r" +
    "\n" +
    "          </button>\r" +
    "\n" +
    "            \r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <button type=\"button\" class=\"button secondary hollow small float-right uib-close\" ng-click=\"close($event)\">\r" +
    "\n" +
    "            {{ getText('close') }}\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/modal/window.html',
    "<div class=\"reveal {{size ? size : ''}}\" uib-modal-transclude>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/pager/pager.html',
    "<li class=\"pagination-previous\" ng-class=\"{'disabled':noPrevious()||ngDisabled}\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('previous')}} <span class=\"show-for-sr\">page</span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<li class=\"pagination-next\" ng-class=\"{disabled: noNext()||ngDisabled, next: align}\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('next')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>"
  );


  $templateCache.put('uib/template/pagination/pagination.html',
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('first')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('previous')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page.number, $event)\" ng-disabled=\"ngDisabled&&!page.active\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{page.text}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('next')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(totalPages, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('last')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>"
  );


  $templateCache.put('uib/template/popover/popover-html.html',
    "<div>\r" +
    "\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\r" +
    "\n" +
    "    <div ng-bind-html=\"contentExp()\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/popover/popover-template.html',
    "<div>\r" +
    "\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\r" +
    "\n" +
    "    <div uib-tooltip-template-transclude=\"contentExp()\" tooltip-template-transclude-scope=\"originScope()\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/popover/popover.html',
    "<div>\r" +
    "\n" +
    "    <h3 ng-bind=\"uibTitle\" ng-if=\"uibTitle\"></h3>\r" +
    "\n" +
    "    <div ng-bind=\"content\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/progressbar/bar.html',
    "<div class=\"progress-meter\" role=\"progressbar\" ng-class=\"type\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\r" +
    "\n" +
    "    <p class=\"progress-meter-text\" ng-transclude></p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/progressbar/progress.html',
    "<div class=\"progress\" ng-class=\"type\" ng-transclude aria-labelledby=\"{{::title}}\"></div>"
  );


  $templateCache.put('uib/template/progressbar/progressbar.html',
    "<div class=\"progress\" ng-class=\"type\">\r" +
    "\n" +
    "    <div class=\"progress-meter\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\r" +
    "\n" +
    "        <p class=\"progress-meter-text\" ng-transclude></p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/rating/rating.html',
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\" aria-valuetext=\"{{title}}\">\r" +
    "\n" +
    "    \r" +
    "\n" +
    "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"material-icons\" ng-attr-title=\"{{r.title}}\">\r" +
    "\n" +
    "        <span ng-if=\"$index < value\" class=\"{{r.stateOn || 'fa fa-fw fa-star'}}\"></span>\r" +
    "\n" +
    "        <span ng-if=\"$index >= value\" class=\"{{r.stateOff || 'fa fa-fw fa-star-o'}}\"></span>\r" +
    "\n" +
    "    </i>\r" +
    "\n" +
    "</span>"
  );


  $templateCache.put('uib/template/tabs/tab.html',
    "<li ng-class=\"[{'is-active': active, 'is-disabled': disabled}, classes]\" class=\"tabs-title\">\r" +
    "\n" +
    "    <a ng-click=\"select($event)\" aria-selected=\"{{active}}\" uib-tab-heading-transclude>\r" +
    "\n" +
    "        {{heading}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>"
  );


  $templateCache.put('uib/template/tabs/tabset.html',
    "<div>\r" +
    "\n" +
    "    <ul class=\"tabs\" ng-class=\"{'vertical': vertical}\" ng-transclude>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "    <div class=\"tabs-content\" ng-class=\"{'vertical': vertical}\">\r" +
    "\n" +
    "        <div class=\"tabs-panel\" ng-repeat=\"tab in tabset.tabs\" ng-class=\"{'is-active': tabset.active === tab.index}\" uib-tab-content-transclude=\"tab\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/timepicker/timepicker.html',
    "<table class=\"uib-timepicker\">\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr class=\"text-center\" ng-show=\"::showSpinners\">\r" +
    "\n" +
    "            <td class=\"uib-increment hours\">\r" +
    "\n" +
    "                <button ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noIncrementHours()\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-up\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>&nbsp;</td>\r" +
    "\n" +
    "            <td class=\"uib-increment minutes\">\r" +
    "\n" +
    "                <button ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-up\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-show=\"showSeconds\">&nbsp;</td>\r" +
    "\n" +
    "            <td ng-show=\"showSeconds\" class=\"uib-increment seconds\">\r" +
    "\n" +
    "                <button ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-up\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-show=\"showMeridian\"></td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <td class=\"form-group uib-time hours\">\r" +
    "\n" +
    "                <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"text-center\" ng-class=\"{'is-invalid-input': invalidHours}\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td class=\"uib-separator\">:</td>\r" +
    "\n" +
    "            <td class=\"form-group uib-time minutes\">\r" +
    "\n" +
    "                <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"text-center\" ng-class=\"{'is-invalid-input': invalidMinutes}\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\r" +
    "\n" +
    "            <td class=\"form-group uib-time seconds\" ng-show=\"showSeconds\">\r" +
    "\n" +
    "                <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"text-center\" ng-class=\"{'is-invalid-input': invalidSeconds}\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-show=\"showMeridian\" class=\"uib-time am-pm\">\r" +
    "\n" +
    "                <button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"button small secondary hollow\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">\r" +
    "\n" +
    "                    {{meridian}}\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <tr class=\"text-center\" ng-show=\"::showSpinners\">\r" +
    "\n" +
    "            <td class=\"uib-decrement hours\">\r" +
    "\n" +
    "                <button ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noDecrementHours()\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-down\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td>&nbsp;</td>\r" +
    "\n" +
    "            <td class=\"uib-decrement minutes\">\r" +
    "\n" +
    "                <button ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-down\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-show=\"showSeconds\">&nbsp;</td>\r" +
    "\n" +
    "            <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\">\r" +
    "\n" +
    "                <button ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"button small secondary hollow expanded\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"-1\">\r" +
    "\n" +
    "                    <i class=\"fa fa-angle-down\"></i>\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td ng-show=\"showMeridian\"></td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>"
  );


  $templateCache.put('uib/template/tooltip/tooltip-html-popup.html',
    "<!--<div class=\"tooltip-arrow\"></div>-->\r" +
    "\n" +
    "<div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>"
  );


  $templateCache.put('uib/template/tooltip/tooltip-popup.html',
    "<!--<div class=\"tooltip-arrow\"></div>-->\r" +
    "\n" +
    "<div class=\"tooltip-inner\" ng-bind=\"content\"></div>"
  );


  $templateCache.put('uib/template/tooltip/tooltip-template-popup.html',
    "<!--<div class=\"tooltip-arrow\"></div>-->\r" +
    "\n" +
    "<div class=\"tooltip-inner\" uib-tooltip-template-transclude=\"contentExp()\" tooltip-template-transclude-scope=\"originScope()\"></div>"
  );


  $templateCache.put('uib/template/typeahead/typeahead-match.html',
    "<a href tabindex=\"-1\" ng-bind-html=\"match.label | uibTypeaheadHighlight:query\" ng-attr-title=\"{{match.label}}\"></a>"
  );


  $templateCache.put('uib/template/typeahead/typeahead-popup.html',
    "<ul class=\"menu vertical\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\r" +
    "\n" +
    "    <li class=\"uib-typeahead-match\" ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\r" +
    "\n" +
    "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>"
  );

}]);
