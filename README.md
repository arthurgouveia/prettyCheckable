#What does it do?

This plugin replaces the default checkboxes and radio inputs for better looking ones.

##Features:

* Compatible with IE7+, Chrome, Firefox, Safari and mobile browsers;
* Custom design, kindly provided by [Bruno O. Barros](http://ilustrebob.com.br/);
* Four color options (Twitter bootstrap) + [editable PSD](goodies/prettyCheckable.psd);
* Better look & size;
* Super easy implementation;
* Selectable with Tab and checkable with keyboard;
* Change events & Chainning preserved;
* More area of click/touch. A plus for mobile devices.

##Install & Setup

[Download the files](https://github.com/arthurgouveia/prettyCheckable/zipball/master) (or [fork it](https://github.com/arthurgouveia/prettyCheckable)) and include jQuery and prettyCheckable files:

    <link rel="stylesheet" href="js/prettyCheckable/prettyCheckable.css">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="js/prettyCheckable/prettyCheckable.js"></script>

Write your inputs and add a class for the jQuery selector:

    <input type="checkbox" class="myClass" value="yes" id="answer" name="answer"/>

Setup prettyCheckable for your inputs and you're all set:

    $().ready(function(){

      $('input.myClass').prettyCheckable();

    });

You can start the plugin with the options you see on the documentation bellow and they will be applied to all matching inputs:

    $().ready(function(){

      $('input.myClass').prettyCheckable({
        color: 'red'
      });

    });

If you want to apply something to all the inputs but you need a few specific ones to be different, you can add the specifics inline:

    <input type="checkbox" class="myClass" value="yes" id="answer" name="answer" data-color="green" />

##Documentation

*None of the parameters is mandatory.*

###Options

<table>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Values</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>
        <strong>labelPosition</strong>
      </td>
      <td>
        string<br>
        <em>left, right(default)</em>
      </td>
      <td>
        <p>This is the position where the label for the inputs should be placed, if informed.</p>
      </td>
    </tr>
    <tr>
      <td>
        <strong>customClass</strong>
      </td>
      <td>
        string<br>
        <em>A class name.</em>
      </td>
      <td>
        <p>This will add a class you want to the wrapping div surrounding the input, created by the plugin.</p>
      </td>
    </tr>
    <tr>
      <td>
        <strong>color</strong>
      </td>
      <td>
        string<br>
        <em>blue(default), green, yellow or red</em>
      </td>
      <td>
        <p>Choose between one of the four colors options.</p>
      </td>
    </tr>
  </tbody>
</table>

###Inline Options

*All inline configs will overwrite the ones you initialized the plugin with.*

<table class="table table-striped">
  <tbody>
    <tr>
      <td>Name</td>
      <td>Values</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>
        <strong>data-label</strong>
      </td>
      <td>
        string<br>
        <em>Text for your label</em>
      </td>
      <td>
        <p>If informed, this will create a label attached to the input.</p>
      </td>
    </tr>
    <tr>
      <td>
        <strong>data-labelPosition</strong>
      </td>
      <td>
        string<br>
        <em>left, right(default)</em>
      </td>
      <td>
        <p>This is the position where the label for the inputs should be placed, if informed.</p>
      </td>
    </tr>
    <tr>
      <td>
        <strong>data-customClass</strong>
      </td>
      <td>
        string<br>
        <em>A class name.</em>
      </td>
      <td>
        <p>This will add a class you want to the wrapping div surrounding the input, created by the plugin.</p>
      </td>
    </tr>
    <tr>
      <td>
        <strong>data-color</strong>
      </td>
      <td>
        string<br>
        <em>blue(default), green, yellow or red</em>
      </td>
      <td>
        <p>Choose between one of the four colors options.</p>
      </td>
    </tr>
  </tbody>
</table>

###Methods

<p><em>The plugin returns an array of Plugin instances. Once you found the object you're looking for, simply call one of theses puppies. Check main.js, which I used to build the examples you see in here for more details.</em></p>

<table class="table table-striped">
  <tr>
    <td>Name</td>
    <td>Description</td>
  </tr>
  <tr>
    <td class="param-name">
      <strong>.enableInput()</strong>
    </td>
    
    <td>
      <p>Um... well... it enables the input.</p>
    </td>
  </tr>
  <tr>
    <td class="param-name">
      <strong>.disableInput()</strong>
    </td>
    <td>
      <p>If you can't figure this one out, I'm not sure you should be even reading this.</p>
    </td>
  </tr>
</table>

##Customization

If you want to create your own designed checkboxes or you just need a different color set, download the [prettyCheckable PSD](http://arthurgouveia.com/prettyCheckable/goodies/prettyCheckable.psd), do whatever you need to, add the entries to your CSS and pass the name of your color/style in the color or customClass parameters, according to the CSS code you can see on [prettyCheckable.css](http://arthurgouveia.com/prettyCheckable/js/prettyCheckable/prettyCheckable.css).
