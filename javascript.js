// Variables

// Ready block
$(document).ready(function () {

    var email = "arthursaunders1973@gmail.com"; // Replace this with your email address
    var encodedEmail = encodeEmail(email);
    document.getElementById("encoded-email").innerHTML = encodedEmail;  

    // Function to update the image gallery based on the selected letter
    function updateImageGallery(letter) {
        const imagesArray = file_names[letter.toUpperCase()]; // Accessing arrays based on selected letter

        // Clear the existing gallery
        $('.slot').empty()

        //Add image and Text to intro

        let introData = intro[letter];
        console.log(introData);
        if(introData){
            let introImageFileName = imagesArray[introData['index']];
            introImageFileName = introImageFileName.split('.')[0] + '.jpg';

            let introImage = $('<img>').attr('src', 'downloads/' + letter + '/' + introImageFileName).addClass('img-fluid w-100');
            introImage.attr('width',introData['width'] );
            introImage.attr('height',introData['height'] );            

            $('#galleryIntroImage').append(introImage); 
            $('#galleryIntroText #index').append('Number ' + (introData['index'] + 1));
            $('#galleryIntroText #title').append(introData['title']);
            $('#galleryIntroText #description').append(introData['description']);
            $('#galleryIntroText #medium').append(introData['medium']);
            $('#count').append(imagesArray.length);

            if(introData['imageShape'] === 'square'){
                $('#galleryIntroImage').removeClass('col-md-6').addClass('col-md-5');
                $('#galleryIntroImage').removeClass('col-12').addClass('col-10');
                //$('.extra-col').removeClass('d-none');

            }else{
                $('#galleryIntroImage').removeClass('col-md-5').addClass('col-md-6');
                $('#galleryIntroImage').removeClass('col-10').addClass('col-12');
                $('.extra-col').addClass('d-none');
            }
        }    

        //let row = $('<div class="row"></div>');

        // Loop through the images array and assign `col-3` to each to ensure they take up 1/4th the width.
        imagesArray.forEach((image,index) => {
            // Lets try for 4 columns per row for square images and 3 columns per row for anything else
            if(introData['imageShape'] === 'square'){
                colClass = 'col-3';
            }else{
                colClass = 'col-4';
            }
            const column = $('<div></div>').addClass('thumbnail-wrapper mb-4 ' + colClass);
            column.attr('data-index', index); // Store the index in the column data
            const img = $('<a></a>').attr('href', 'downloads/' + letter + '/' + image.split('.')[0] + '.jpg').attr('data-fancybox', 'images').addClass('d-block'); // Link to SVG file

            const imgElem = $('<img>').attr('src', 'downloads/' + letter + '/' + image).addClass('img-fluid w-100 thumbnail'); // Image source
            imgElem.attr('width',introData['width'] );
            imgElem.attr('height',introData['height'] );
            img.append(imgElem);

            // Optional: Add the file name as a caption or label
            const fileName = image.split('.')[0]; // Getting the file name without extension
            const number = index + 1;
            const fileNameDiv = $('<div></div>').text(number).addClass('text-center fileNameDiv'); // Center-align the file name

            // Append elements together
            column.append(img);
            column.append(fileNameDiv); // Append file name div if needed            
            
            // Append the column to the container
            $('#image-gallery .row').append(column);            
            
        });

    }

    // Function to show the statement div and hide the gallery
    function showStatement() {
        $('#statement').show();
        $('#introAndGallery').hide();

        // Add active class to the statement link
        $('.statement-link').addClass('active');

        // Remove active class from all gallery links
        $('.gallery-link').removeClass('active');

    }

    // Function to hide the statement div and show the gallery content
    function hideStatement() {
        $('#statement').hide();
        $('#introAndGallery').show();

        // Remove active class from the statement link
        $('.statement-link').removeClass('active');

    }

    // Event listener for gallery links
    $('.gallery-link').click(function (event) {
        event.preventDefault();
        const selectedLetter = $(this).data('letter');
        console.log(selectedLetter);
        const queryString = $(this).data('query-string');
        history.pushState({}, null, '?' + queryString); // Update URL with query string
        $('.gallery-link').removeClass('active');
        $(this).addClass('active');
        
        //$('.navbar-collapse').toggleClass('show');
        
        updateImageGallery(selectedLetter);
        hideStatement();
    });

    // Event listener for statement link
    $('.statement-link').click(function (event) {
        event.preventDefault();
        showStatement();
    });

    // Call the updateImageGallery function initially with the default letter if query string exists
    // Call the updateImageGallery function initially with the default letter if query string exists
    var queryString = window.location.search;
    if (queryString) {
        var selectedQueryString = queryString.substring(1); // Remove '?' from query string
        var $selectedLink = $('.gallery-link[data-query-string="' + selectedQueryString + '"]');
        if ($selectedLink.length > 0) {
            var selectedLetterFromLink = $selectedLink.data('letter');
            $('.gallery-link').removeClass('active'); // Remove active class from all gallery links
            $selectedLink.addClass('active'); // Add active class to the selected gallery link
            updateImageGallery(selectedLetterFromLink);
            hideStatement();
        } else {
            showStatement();
        }
    } else {
        // If no query string, show default statement
        showStatement();
    }

});

function encodeEmail(email) {
    var encoded = "";
    for (var i = 0; i < email.length; i++) {
      var charCode = email.charCodeAt(i);
      encoded += "&#" + charCode + ";";
    }
    return encoded;
  }

  function decodeEmail(encodedEmail) {
    var email = "";
    var parts = encodedEmail.split(";");
    parts.pop(); // Remove the last empty element
    for (var i = 0; i < parts.length; i++) {
      var charCode = parseInt(parts[i].substring(2)); // Remove "&#"
      email += String.fromCharCode(charCode);
    }
    return email;
  }






