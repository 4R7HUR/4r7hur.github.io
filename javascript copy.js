$(document).ready(function(){
    // List of popular sans-serif fonts
    var sansSerifFonts = [
        'Verdana',
        'Roboto',
        'Open Sans',
        'Lato',
        'Nunito',
        'Montserrat',
        'Source Sans Pro',
        'Ubuntu'
    ];
    
    // Select a random font from the list
    var randomFont = sansSerifFonts[Math.floor(Math.random() * sansSerifFonts.length)];
    
    // Set the body font to the random font
    $('body').css('font-family', randomFont + ', sans-serif');
    


// Number of columns for the grid layout
const columns = 4;
var selectedThumbnailSize = 'col-xl-1'; // Default size
var timeSize = ''; // Default size

// Get the container div
const container = document.getElementById('image-gallery');

function updateImageGallery(letter) {
    const imagesArray = file_names[letter.toUpperCase()]; // Accessing arrays based on selected letter

    // Clear the existing gallery
    container.innerHTML = '';

    // Instead of creating new rows per every few images, we'll just work within a single row.
    let row = document.createElement('div');
    row.classList.add('row');

    // Loop through the images array and assign `col-3` to each to ensure they take up 1/4th the width.
    imagesArray.forEach((image) => {
        // Create a column for each image with a fixed size of 3 units.
        const column = document.createElement('div');



        column.classList.add('thumbnail-wrapper', 'col-12', 'col-md-6', 'col-lg-4', selectedThumbnailSize, 'mb-4'); // Added 'mb-4' for some margin below each image

        const img = document.createElement('a');
        img.href = 'downloads/' + letter + '/' + image.split('.')[0] + '.jpg'; // Link to SVG file
        img.setAttribute('data-fancybox', 'images'); // Add data attribute for Fancybox
        img.classList.add('d-block'); // Ensure the link is block-level to contain the image correctly

        const imgElem = document.createElement('img');
        imgElem.src = 'downloads/' + letter + '/' + image; // Image source
        imgElem.classList.add('img-fluid', 'w-100'); // Ensure the image is responsive

        img.appendChild(imgElem);

        // Optional: Add the file name as a caption or label
        const fileName = image.split('.')[0]; // Getting the file name without extension
        const fileNameDiv = document.createElement('div');
        fileNameDiv.textContent = fileName;
        fileNameDiv.classList.add('text-center', 'fileNameDiv', 'd-none'); // Center-align the file name

        // Append elements together
        column.appendChild(img);
        column.appendChild(fileNameDiv); // Append file name div if needed
        row.appendChild(column);
    });

    // Append the row to the container
    container.appendChild(row);

    //show #thumbnailSizeWrapper using the bootstap class for xl screens, d-xl-block
    document.getElementById('thumbnailSizeWrapper').classList.add('d-xl-block');


}

// Function to show the statement div and hide the gallery
function showStatement() {
    document.getElementById('statement').style.display = 'block';
    document.getElementById('image-gallery').style.display = 'none';

    // Add active class to the statement link
    document.querySelector('.statement-link').classList.add('active');

    // Remove active class from all gallery links
    document.querySelectorAll('.gallery-link').forEach(function (link) {
        link.classList.remove('active');
    });

    //hide #thumbnailSizeWrapper by removing the bootstap class for xl screens, d-xl-block
    document.getElementById('thumbnailSizeWrapper').classList.remove('d-xl-block');
}

// Function to hide the statement div and show the gallery
function hideStatement() {
    document.getElementById('statement').style.display = 'none';
    document.getElementById('image-gallery').style.display = 'block';


    // Add active class to the first gallery link by default
    //document.querySelector('.gallery-link').classList.add('active');

    // Remove active class from the statement link
    document.querySelector('.statement-link').classList.remove('active');
}

// Event listener for gallery links
document.querySelectorAll('.gallery-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of following the link
        const selectedLetter = this.getAttribute('data-letter');

        // Remove active class from all links
        document.querySelectorAll('.gallery-link').forEach(function (link) {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        this.classList.add('active');

        // Update the gallery based on the selected letter
        updateImageGallery(selectedLetter);

        // Hide the statement divselectedThumbnailSize
        hideStatement();
    });
});

// Event listener for statement link
document.querySelector('.statement-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action of following the link
    // Show the statement div
    showStatement();
});

// Call the updateImageGallery function initially with the default letter
//updateImageGallery('A');
showStatement();



    $('#thumbnailSize').change(function () {

        selectedThumbnailSize = $(this).val(); // Get the selected value from the dropdown
        $('.thumbnail-wrapper').removeClass('col-xl-1 col-xl-2 col-xl-3'); // Remove existing xl classes
        $('.thumbnail-wrapper').addClass(selectedThumbnailSize); // Add the selected xl class


        if (selectedThumbnailSize === 'col-xl-1') {
            $('.fileNameDiv').addClass('d-none');
        } else if (selectedThumbnailSize === 'col-xl-2') {
            $('.fileNameDiv').removeClass('d-none');
        } else if (selectedThumbnailSize === 'col-xl-3') {
            $('.fileNameDiv').removeClass('d-none');
        }

    });
});
