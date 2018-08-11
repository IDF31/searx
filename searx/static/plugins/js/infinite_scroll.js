//@license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3-0
$(document).ready(function() {
    var win = $(window);
    win.scroll(function() {
        if ($(document).height() - win.height() == win.scrollTop()) {
            var formData = $('#pagination form:last').serialize();
            if (formData) {
                $('#pagination').html('<div class="loading-spinner"></div>');
                $.post('./', formData, function (data) {
                    var body = $(data);
                    $('#pagination').remove();
                    $('#main_results').append('<hr/>');
                    $('#main_results').append(body.find('.result'));
                    $('#main_results').append(body.find('#pagination'));
                });
            }
        }
    });
});
//@license-end
