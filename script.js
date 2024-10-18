

const section0 = document.querySelector(".section0"); 
const gentEl = document.getElementById("gents");
const unisexEl = document.getElementById("unisex");
const ladiesEl = document.getElementById("ladies");

// Add event listeners for the buttons
gentEl.addEventListener("click", () => showFn(0));
unisexEl.addEventListener("click", () => showFn(1));
ladiesEl.addEventListener("click", () => showFn(2));

function showFn(index) {
    // Toggle the display of section0
    section0.style.display = "block"; // Show the section
    section0.innerHTML = ''; // Clear any existing images

    const imageDiv1 = document.createElement("div");
    imageDiv1.className = "image-div1";

    // Define image URLs for each category
    const imageUrls = [
        [
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTQzfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1599665860824-2c05cba96b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTgyfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        ],
        [
            "https://images.unsplash.com/photo-1599012307536-78ccb4253705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1610737249253-1405407a33ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoaW5nfGVufDB8fDB8fHww"
        ],
        [
            "https://images.unsplash.com/photo-1578200308673-6c2cc33a697d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2MHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1638381953877-4bbd4fb4bd65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1658828911599-067ee5eb6a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
        ]
    ];

    // Get the images for the selected category
    const selectedImages = imageUrls[index];

    // Create image elements for each URL
    selectedImages.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Fashion Image";
        imageDiv1.appendChild(img);
    });

    // Append the image container to the section
    section0.appendChild(imageDiv1);

    function hidSection0() {
        section0.style.display = "none";
    }

    if(section0.style.display = "block") {

        setTimeout(hidSection0, 60000);
    }
}


/*const section0 = document.querySelector(".section0");
const gentEl = document.getElementById("gents");
const unisexEl = document.getElementById("unisex");
const ladiesEl = document.getElementById("ladies");

gentEl.addEventListener("click", showFn);
unisexEl.addEventListener("click", showFn);
ladiesEl.addEventListener("click", showFn);


function showFn() {
    // Toggle the display of section0
    if (section0.style.display === "none" || section0.style.display === "") {
        section0.style.display = "block";
        section0.innerHTML = ''; // Clear any existing images

        const imageDiv1 = document.createElement("div");
        imageDiv1.className = "image-div1";
        let gentsImageUrls = [
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTQzfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1599665860824-2c05cba96b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTgyfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"

            [ "https://images.unsplash.com/photo-1599012307536-78ccb4253705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1610737249253-1405407a33ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoaW5nfGVufDB8fDB8fHww"]

                ["https://images.unsplash.com/photo-1578200308673-6c2cc33a697d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2MHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1638381953877-4bbd4fb4bd65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1658828911599-067ee5eb6a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"]
        ];

        gentsImageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Gents Fashion Image";
            imageDiv1.appendChild(img);
        });

        section0.appendChild(imageDiv1);
    } else {
        section0.style.display = "none";
    }
}*/

/*
const images = [
    ['gents1.jpg', 'gents2.jpg', 'gents3.jpg'],  // 0 index for Gents
    ['unisex1.jpg', 'unisex2.jpg'],              // 1 index for Unisex
    ['ladies1.jpg', 'ladies2.jpg', 'ladies3.jpg'] // 2 index for Ladies
];

const imageDisplay = document.getElementById('imageDisplay');

document.getElementById('gentsBtn').addEventListener('click', () => displayImages(0));
document.getElementById('unisexBtn').addEventListener('click', () => displayImages(1));
document.getElementById('ladiesBtn').addEventListener('click', () => displayImages(2));

function displayImages(index) {
    imageDisplay.innerHTML = ''; // Clear previous images
    images[index].forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Image';
        imgElement.style.width = '100px'; // Set width for display
        imgElement.style.margin = '5px'; // Add some margin
        imageDisplay.appendChild(imgElement);
    });
}
*/


/*const section0 = document.querySelector(".section0");
const gentEl = document.getElementById("gents");
const unisexEl = document.getElementById("unisex");
const ladiesEl = document.getElementById("ladies");

gentEl.addEventListener("click", gentsFn);
unisexEl.addEventListener("click", unisexFn);
ladiesEl.addEventListener("click", ladiesFn);



function gentsFn() {
    // Toggle the display of section0
    if (section0.style.display === "none" || section0.style.display === "") {
        section0.style.display = "block";
        section0.innerHTML = ''; // Clear any existing images

        const imageDiv1 = document.createElement("div");
        imageDiv1.className = "image-div1";
        const gentsImageUrls = [
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTQzfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1599665860824-2c05cba96b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTgyfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        ];

        gentsImageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Gents Fashion Image";
            imageDiv1.appendChild(img);
        });

        section0.appendChild(imageDiv1);
    } else {
        section0.style.display = "none";
    }
}

function unisexFn() {
    // If section0 is already displayed, just update the inner HTML
    if (section0.style.display === "block") {
        section0.innerHTML = ''; // Clear existing images

        const imageDiv2 = document.createElement("div");
        imageDiv2.className = "image-div2";
        const imageUrls = [
            "https://images.unsplash.com/photo-1599012307536-78ccb4253705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1610737249253-1405407a33ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoaW5nfGVufDB8fDB8fHww"
        ];

        imageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Unisex Fashion Image";
            imageDiv2.appendChild(img);
        });

        section0.appendChild(imageDiv2);
    } else  {
        if (section0.style.display === "none" || section0.style.display === "")
        // Normal function behavior if display is none
         {
            section0.style.display = "block";
            section0.innerHTML = ''; // Clear any existing images

            const imageDiv2 = document.createElement("div");
            imageDiv2.className = "image-div2";
            const imageUrls = [
                "https://images.unsplash.com/photo-1599012307536-78ccb4253705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1610737249253-1405407a33ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoaW5nfGVufDB8fDB8fHww"
            ];

            imageUrls.forEach(url => {
                const img = document.createElement("img");
                img.src = url;
                img.alt = "Image";
                imageDiv2.appendChild(img);
            });

            section0.appendChild(imageDiv2);
        }
    }
}

function ladiesFn() {
    // Similar logic for ladiesFn
    if (section0.style.display === "none" || section0.style.display === "") {
        section0.style.display = "block";
        section0.innerHTML = ''; // Clear any existing images

        const imageDiv3 = document.createElement("div");
        imageDiv3.className = "image-div3";
        const imageUrls = [
            "https://images.unsplash.com/photo-1578200308673-6c2cc33a697d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2MHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1638381953877-4bbd4fb4bd65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1658828911599-067ee5eb6a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
        ];

        imageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Image";
            imageDiv3.appendChild(img);
        });

        section0.appendChild(imageDiv3);
    } else {
        section0.style.display = "none";
    }
}*/










































/*const section0 = document.querySelector(".section0");
const gentEl = document.getElementById("gents");
const unisexEl = document.getElementById("unisex");
const ladiesEl = document.getElementById("ladies");

gentEl.addEventListener("click", gentsFn);
unisexEl.addEventListener("click", unisexFn);
ladiesEl.addEventListener("click", ladiesFn);

function gentsFn() {
    // Toggle the display of section0
    if (section0.style.display === "none" || section0.style.display === "") {
        section0.style.display = "block";

        // Check if the images already exist
        if (!section0.querySelector(".image-div1")) {
            section0.innerHTML = ''; // Clear any existing images
            const imageDiv1 = document.createElement("div");
            imageDiv1.className = "image-div1";

            const gentsImageUrls = [
                "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTQzfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1599665860824-2c05cba96b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTgyfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            ];

            gentsImageUrls.forEach(url => {
                const img = document.createElement("img");
                img.src = url;
                img.alt = "Gents Fashion Image";
                imageDiv1.appendChild(img);
            });

            section0.appendChild(imageDiv1);
        }
    } else {
        section0.style.display = "none";
    }
}

function unisexFn() {
    // Toggle the display of section0
    if (section0.style.display === "none" || section0.style.display === "")  {
        section0.style.display = "block";

        if (!section0.querySelector(".image-div2")) {
            section0.innerHTML = ''; // Clear any existing images
            const imageDiv2 = document.createElement("div");
            imageDiv2.className = "image-div2";

            const imageUrls = [
                "https://images.unsplash.com/photo-1599012307536-78ccb4253705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1610737249253-1405407a33ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoaW5nfGVufDB8fDB8fHww"
            ];

            imageUrls.forEach(url => {
                const img = document.createElement("img");
                img.src = url;
                img.alt = "Image";
                imageDiv2.appendChild(img);
            });

            section0.appendChild(imageDiv2);
        }
    } 
    
    else {
        section0.style.display ="none";
    }
}

function ladiesFn() {
    // Toggle the display of section0
    if (section0.style.display === "none" || section0.style.display === "") {
        section0.style.display = "block";

        
        if (!section0.querySelector(".image-div3")) {
            section0.innerHTML = ''; // Clear any existing images
            const imageDiv3 = document.createElement("div");
            imageDiv3.className = "image-div3";

            const imageUrls = [
                "https://images.unsplash.com/photo-1578200308673-6c2cc33a697d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2MHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1638381953877-4bbd4fb4bd65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1658828911599-067ee5eb6a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
            ];

            imageUrls.forEach(url => {
                const img = document.createElement("img");
                img.src = url;
                img.alt = "Image";
                imageDiv3.appendChild(img);
            });

            section0.appendChild(imageDiv3);
        }
    } 
    
    else {
        section0.style.display = "none";
    }
}*/
