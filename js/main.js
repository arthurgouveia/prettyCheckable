(function (window, document, $) {
    'use strict';

    var inputs = $('input.prettyCheckable:not(#TestDisabled)').each(function() {
        $(this).prettyCheckable({
            labelPosition: 'right'
        });
    });

    var specificInput = $('#TestDisabled').prettyCheckable();

    $('input[name=colors]').on('change', function(){

        if ($(this).val() === 'yes') {

            $('div#other-colors').slideDown();

        } else {

            $('div#other-colors').slideUp();

        }

    });

    $('input[name=disabledTrigger]').on('change', function(){

        if ($(this).val() === 'yes') {

            $('#TestDisabled').prettyCheckable('enable');

        } else {

            $('#TestDisabled').prettyCheckable('disable');

        }

    });

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;

    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

    //preparing inputs for the Jasmine tests
    $('#jasmine').on('show', function(){
        $('input#Test1, input#Test2').removeAttr('checked').parent().find('a').removeClass('checked');
    });

    $('#jasmine').on('shown', function(){
        execJasmine();
    });

})(window, document, jQuery);