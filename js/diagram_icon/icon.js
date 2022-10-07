function enable_automatic_drawio_edit_icon(on_click) {
  $(document).ready(function() {
    $("img[src*='.drawio.png'], img[src*='.drawio.svg'").each(function() {
      var src = $(this).attr("src");

      $(this).wrap('<div class="diagram_icon_wrapper"></div>');
      $(this).after(`<a class="diagram_icon" href="" target="_blank"></a>`);

      diagram_button({
          target_id: $(this).next(),
          open_url: src,
          on_click: function() {
            if (on_click) { on_click(src); }
          }
        } 
      );

    });
  });
};