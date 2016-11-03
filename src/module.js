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
    if(/radioBtn/.test($scope.form.htmlClass)) {
      $scope.btnClass = 'col-xs-'+(12/$scope.form.titleMap.length);
    }
    $scope.$watch('titleMapValues', function(v, o) {
      if($scope.titleMapValues.indexOf(true) !== -1) {
        $scope.form.titleMap.map(function(titleMap, i) {
          titleMap.hide = !$scope.titleMapValues[i]
          if(!titleMap.hide) {
            titleMap.htmlClass = 'visible'
          }
        })
      } else {
        $scope.form.titleMap.map(function(titleMap){
          titleMap.hide = false
          titleMap.htmlClass = ''
          return titleMap;
        });
      }
    }, true)
  })
});
