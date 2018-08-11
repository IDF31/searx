//@license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3-0
$(document).ready(function() {
    if($('#q').length) {
        $('#categories label').click(function(e) {
            $('#categories input[type="checkbox"]').each(function(i, checkbox) {
                $(checkbox).prop('checked', false);
            });
            $(document.getElementById($(this).attr("for"))).prop('checked', true);
            if($('#q').val()) {
                $('#search_form').submit();
            }
            return false;
        });
        $('#time-range').change(function(e) {
            if($('#q').val()) {
                $('#search_form').submit();
            }
        });
        $('#language').change(function(e) {
            if($('#q').val()) {
                $('#search_form').submit();
            }
        });
    }
});
//@license-end
