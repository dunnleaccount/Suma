'use strict';

angular.module('sumaAnalysis')
  .directive('sumaTimepicker', function () {
    return {
      restrict: 'A',
      templateUrl: 'views/directives/timepicker.html',
      scope: {model: '=', placeholder: '@'},
      link: function (scope, el, attrs) {
        var inputGroup = el.find('.input-group'),
            inputGroupAddon = el.find('.input-group-addon');

        // Initialize
        inputGroup.datetimepicker({
          defaultDate: moment(scope.placeholder, 'HH:mm'),
          pickDate: false,
          pickTime: true,
          format: 'HH:mm',
          icons: {
            time: 'fa fa-clock-o',
            up: 'fa fa-arrow-up',
            down: 'fa fa-arrow-down'
          }
        });

        // Respond to changes from input
        inputGroup.on('dp.change', function () {
          scope.$apply(function () {
            scope.model = el.find('input').val();
          });
        });

        // Respond to changes from model
        inputGroupAddon.on('click', function (e) {
          inputGroup.data('DateTimePicker').setDate(moment(scope.model, 'HH:mm'));
          inputGroup.data('DateTimePicker').show();
        });
      }
    };
  });
