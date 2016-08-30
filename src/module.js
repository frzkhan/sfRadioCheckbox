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
    $scope.$watch('titleMapValues', function(v, o) {
      if($scope.titleMapValues.contains(true) && angular.equals(v, o)) {
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

  Array.prototype.contains = function(needle) {
      // Per spec, the way to identify NaN is that it is not equal to itself
      var findNaN = needle !== needle;
      var indexOf;

      if(!findNaN && typeof Array.prototype.indexOf === 'function') {
          indexOf = Array.prototype.indexOf;
      } else {
          indexOf = function(needle) {
              var i = -1, index = -1;

              for(i = 0; i < this.length; i++) {
                  var item = this[i];

                  if((findNaN && item !== item) || item === needle) {
                      index = i;
                      break;
                  }
              }

              return index;
          };
      }
      return indexOf.call(this, needle) > -1;
  };
});
