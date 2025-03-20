$(document).ready(()=>{
    $('#register').submit(function(e){
        e.preventDefault();
        const password = $('#password').val();
        const username = $('#username').val();
        $.ajax({
            url: '/auth/register',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username, password }),
            success: function(response) {
                alert(response.message);
            //   $('#message').text(response.message);
            //   window.location.href = '/dashboard';
            },
            error: function(xhr) {
              alert(xhr.responseJSON.message);
            }
          });
    })
})