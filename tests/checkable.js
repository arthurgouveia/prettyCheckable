describe('checkOnLabelClick', function(){

  it('should add a class to the fake checkable and check the hidden input when label is clicked', function(){

    $('label[for=Test1]').click();

    var input = $('input#Test1');

    expect(input.attr('checked')).toEqual('checked');
    expect(input.parent().find('a').hasClass('checked')).toEqual(true);

  });

});

describe('checkOnFakeInputClick', function(){

  it('should add a class to the fake checkable and check the hidden input when fake input is clicked', function(){

    var input = $('input#Test2');

    input.parent().find('a').click();

    expect(input.attr('checked')).toEqual('checked');
    expect(input.parent().find('a').hasClass('checked')).toEqual(true);

  });

});

describe('toggleCheckedForRadios', function(){

  it('should toggle the checked attributes between radios of the same name', function(){

    var checked = $('input[name=Test3]:checked').parent().find('a');

    var notChecked = $('input[name=Test3]:not(:checked)').parent().find('a');

    notChecked.click();

    expect(notChecked.hasClass('checked')).toEqual(true);
    expect(notChecked.parent().find('input').attr('checked')).toEqual('checked');
    expect(checked.hasClass('checked')).toEqual(false);
    expect(checked.parent().find('input').attr('checked')).toEqual(undefined);

  });

});

