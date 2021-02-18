if ($("#contactForm").length > 0) {
    $("#contactForm").on('submit', function(e) {
        e.preventDefault();
        $("#con_submit").html('<span>Enviando...</span>');
        var f_name = $("#fname").val();
        var l_name = $("#lname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();

        var required = 0;
        $(".required", this).each(function() {
            if ($(this).val() == '') {
                $(this).addClass('reqError');
                required += 1;
            } else {
                if ($(this).hasClass('reqError')) {
                    $(this).removeClass('reqError');
                    if (required > 0) {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: "POST",
                url: 'mail/send.php',
                data: { f_name: f_name, l_name: l_name, email: email, phone: phone, message: message },
                success: function(data) {
                    //alert(data);
                    $("#con_submit").html('<span>Hecho!</span>');
                    $("#contactForm input, #contactForm textarea").val('');
                    setTimeout(function() {
                        $("#con_submit").html('<span>Enviar</span>');
                    }, 2500);
                }
            });
        } else {
            $("#con_submit").html('<span>Error!</span>');
            $("#con_submit").removeClass('btn-primary');
            $("#con_submit").addClass('btn-danger');
            $("#error").html('Complete los campos en rojo.');
            $("#error").css({ 'color': 'red' });
        }

    });

    $(".required").on('keyup', function() {
        $(this).removeClass('reqError');
        $("#con_submit").removeClass('btn-danger');
        $("#con_submit").addClass('btn-primary');
        $("#con_submit").html('<span>Enviar</span>');
        $("#error").html('');
    });
}