angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/sf-radio-checkbox/sfRadioCheckbox.html','<div sf-field-model="sf-new-array"\n     sf-new-array\n     ng-controller="radioCheckbox"\n     class="form-group schema-form-checkboxes {{form.htmlClass}}"\n     ng-class="{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}">\n  <label class="control-label {{form.labelHtmlClass}}"\n         sf-field-model\n         schema-validate="form"\n         ng-show="showTitle()">{{form.title}}</label>\n<div>\n  <div class="sf-radio-checkbox {{btnClass}}" ng-repeat="val in titleMapValues track by $index"\n  ng-hide="form.titleMap[$index].hide"\n  ng-class="form.titleMap[$index].htmlClass">\n    <label>\n      <input type="checkbox"\n             ng-disabled="form.readonly"\n             sf-changed="form"\n             class="{{form.fieldHtmlClass}}"\n             ng-model="titleMapValues[$index]"\n             name="{{form.key.slice(-1)[0]}}"\n             ng-click="check($event, form.titleMap[$index])">\n      <span ng-bind-html="form.titleMap[$index].name" class="{{form.textHtmlClass}}"></span>\n    </label>\n<div>\n  </div>\n  <div class="help-block" sf-message="form.description"></div>\n</div>\n');}]);
angular.module('sfRadioCheckbox', [
  'schemaForm',
  'templates'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'sfRadioCheckbox',                      // Form type that should render this add-on
    'src/templates/sf-radio-checkbox/sfRadioCheckbox.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );

}).controller('radioCheckbox', function($scope){
  $scope.$applyAsync(function() {
    if($scope.form.htmlClass === 'radioBtn'){
      $scope.btnClass = 'col-md-'+(12/$scope.form.titleMap.length);
    }
  })
  $scope.check = function ($event, item) {
    if($event.target.checked) {
      $scope.form.titleMap.map(function(titleMap){
        if(titleMap.value === item.value) {
          titleMap.hide = false
          titleMap.htmlClass = 'visible'
        } else {
          titleMap.hide = true
          titleMap.htmlClass = ''
        }
        return titleMap
      })
    } else {
      $scope.form.titleMap.map(function(titleMap){
        titleMap.hide = false
        titleMap.htmlClass = ''
        return titleMap
      })
    }
  }
});;
