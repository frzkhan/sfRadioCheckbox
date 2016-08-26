angular.module('sfRadioCheckbox', [
  'schemaForm',
  'templates'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'sfRadioCheckbox',                      // Form type that should render this add-on
    'src/templates/sfRadioCheckbox.html',  // Template name in $templateCache
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
