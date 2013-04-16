describe('checkOnLabelClick', function(){

  it('should add a class to the fake checkable and check the hidden input when label is clicked', function(){

    $('label[for=Test1]').click();

    var input = $('input#Test1');

    expect(input.prop('checked')).toEqual(true);
    expect(input.parent().find('a').hasClass('checked')).toEqual(true);

  });

});

describe('checkOnFakeInputClick', function(){

  it('should add a class to the fake checkable and check the hidden input when fake input is clicked', function(){

    var input = $('input#Test2');

    input.parent().find('a').click();

    expect(input.prop('checked')).toEqual(true);
    expect(input.parent().find('a').hasClass('checked')).toEqual(true);

  });

});

describe('toggleCheckedForRadios', function(){

  it('should toggle the checked attributes between radios of the same name', function(){

    var checked = $('input[name=Test3]:checked').parent().find('a');

    var notChecked = $('input[name=Test3]:not(:checked)').parent().find('a');

    notChecked.click();

    expect(notChecked.hasClass('checked')).toEqual(true);
    expect(notChecked.parent().find('input').prop('checked')).toEqual(true);
    expect(checked.hasClass('checked')).toEqual(false);
    expect(checked.parent().find('input').prop('checked')).toEqual(false);

  });

});

describe('triggerChangeEvent', function(){

  it('should trigger change events on the checkboxes/radios', function(){

    var radio1 = $('input[name=Test3]:checked');
    var checked = radio1.parent().find('a');

    var radio2 = $('input[name=Test3]:not(:checked)');
    var notChecked = radio2.parent().find('a');

    radio1.hasChanged = false;
    radio2.hasChanged = false;

    radio1.on('change', function(){ radio1.hasChanged = true; });
    radio2.on('change', function(){ radio2.hasChanged = true; });

    checked.click();
    notChecked.click();

    expect(radio1.hasChanged).toEqual(true);
    expect(radio2.hasChanged).toEqual(true);

  });

});

describe('disabledElementsBehavior', function(){

  it('should not trigger any actions if disabled', function(){

    var checkbox = $('#TestDisabled');
    var checkboxTrigger = checkbox.parent().find('a');

    checkboxTrigger.click();

    expect(checkbox.prop('checked')).toEqual(false);
    expect(checkboxTrigger.hasClass('checked')).toEqual(false);

  });

});