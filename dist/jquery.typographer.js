/*! Typographer - v0.1.0 - 2015-08-18
* https://github.com/sakharstudio/typographer
* Copyright (c) 2015 Loginov Yura; Licensed MIT */
;(function ( $, window, document, undefined ) {

  var pluginName  = "typographer",
    defaults  = {
      prepositions: ["в","во","без","до","из","к","ко","на","по","о","от","при","с","у","не","за","над","для","об","под","про","и","а","но","да","или","ли","бы","то","что","как","я","он","мы","они","ни","же","вы","им"],
      nbsp: '&nbsp;'
    };

  function Plugin ( element, options ) {
    this.element = element;
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function () {
      this.addNbsp(this.element, this.settings);
    },

    addNbsp: function (elem, settings) {
      var nbsp = settings.nbsp,
        prepositions = settings.prepositions.map(function (item) {
          return ' ' + item + ' ';
        }),
        prepositions2 = settings.prepositions.map(function (item) {
          return '&nbsp;' + item + ' ';
        }),
        regex = new RegExp( prepositions.join('|'), 'gi' ),
        regex2 = new RegExp( prepositions2.join('|'), 'gi' ),
        replacement = function (str) {
          return str.slice(0, -1) + nbsp;
        };

      var str = $(elem).html().replace(regex, replacement).replace(regex2, replacement);
      $(elem).html(str);
    }
  });

  $.fn[ pluginName ] = function ( options ) {
    this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });

    return this;
  };

})( jQuery, window, document );
