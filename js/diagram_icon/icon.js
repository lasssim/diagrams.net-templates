$(document).ready(function() {
  $("img[src*='drawio']").each(function() {
    var src = $(this).attr("src");

    $(this).wrap('<div class="diagram_icon_wrapper"></div>');
    $(this).after(`<a class="diagram_icon" href="" target="_blank"></a>`);

    diagram_button({
      target_id: $(this).next(),
      open_url: src
    }, function() {
      console.log("clicked");
    }
    );


  });
});