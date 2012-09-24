$().ready(function(){

  $('input.prettyCheckable').prettyCheckable({
    labelPosition: 'right'
  });

  $('input[name=colors]').on('change', function(){

    if ($(this).val() === 'yes') {

      $('div#other-colors').slideDown();

    } else {

      $('div#other-colors').slideUp();

    }

  });

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 250;

  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var currentWindowOnload = window.onload;
  window.onload = function() {
    if (currentWindowOnload) {
      currentWindowOnload();
    }
     setTimeout(function() {execJasmine();}, 5000);
  };

  function execJasmine() {
    jasmineEnv.execute();
  }

});