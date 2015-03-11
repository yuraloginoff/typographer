/*
 *  jQuery Typographer plugin
 *  Adds unbreakable spaces after prepositions
 *  http://jqueryboilerplate.com
 *
 *  Made by Yurij Loginov
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {

	var pluginName 	= "typographer",
		defaults 	= {
			prepositions: ["в","во","без","до","из","к","ко","на","по","о","от","перед","при","через","с","у","не","за","над","для","об","под","про","и","а","но","да","или","ли","бы","то","что","как","я","он","мы","они","ни","же","вы"],
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
				prepositions = settings.prepositions.map(function (item, index) {
					return ' ' + item + ' ';
				}),
				regex = RegExp( prepositions.join('|'), 'gi' ),
				replacement = function (str, p1, p2, offset, s) {
					return str.slice(0, -1) + nbsp;
				}

			$(elem).html(function() {
				return $(elem).html().replace(regex, replacement);
			});
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