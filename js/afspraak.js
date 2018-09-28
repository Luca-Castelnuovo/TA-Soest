const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const postalcode = document.querySelector('#postalcode');
const house = document.querySelector('#house');
const problem = document.querySelector('#problem');
const submit = document.querySelector('#submit');

submit.addEventListener("click", function() {
    jQuery.ajax({
        type: "POST",
        url: '/php/afspraak.php',
        dataType: "JSON",
        cache: false,
        data: {
            name: name.value,
            email: email.value,
            phone: phone.value,
            postalcode: postalcode.value,
            house: house.value,
            problem: problem.value,
        },

        success: function(response) {
            if (response.status) {
                alert("Uw bericht is verstuurd");
            } else {
                alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
            }
        },

        error: function() {
            alert("Uw bericht is niet verstuurd, probeer het later opnieuw");
        }
    });
});
