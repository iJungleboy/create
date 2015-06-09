/*
//     Create.js - On-site web editing interface
//     (c) 2012 Tobias Herrmann, IKS Consortium
//     Create may be freely distributed under the MIT license.
//     
//     DropzoneWidget - by 2sic / Daniel Mettler
//     Also MIT-License
*/
(function (jQuery, undefined) {
  // Run JavaScript in strict mode
  /*global jQuery:false _:false document:false */
  'use strict';

    // # Dropzone editing widget
    //
    // todo: 
    // 1. Get successful upload to cause something outside of this object - do something with the uploaded url
    // 2. Get the div-wrapper to handle the click? 
    // [Dropzone](http://Dropzone.com/) file uploader.
  jQuery.widget('Midgard.dropzoneWidget', jQuery.Midgard.editWidget, {
    options: {
      editorOptions: {},
      disabled: true,
      vie: null
    },
    enable: function () {

        var jtag = this.element;

        // if there is an image inside, only use that as click 
        // because for unclear reasons, I cannot use the whole surrounding div
        // todo: try to ensure that the whole area is clickable
        var innerImg = jtag.find('img');
        if (innerImg.length > 0)
            jtag = innerImg;

        // prevent links around the item from reacting
        jtag.click(function (event) {
            event.preventDefault();
        });

        // create dropzone
        var dz = this.editor = new Dropzone(jtag[0], this.options.editorOptions);

        dz.


    },

    disable: function () {
      if (!this.editor) {
        return;
      }
      this.editor.destroy();
      this.editor = null;
    },

    _initialize: function () {
      // CKEDITOR.disableAutoInline = true;
    }
  });
})(jQuery);
Dropzone.autoDiscover = false;