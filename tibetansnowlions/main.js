//
// Place any custom JS here
//
function changeTitle(e) {  
            document.title = e; 

        } 

function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function setMinWidthAndColor() {
            let typingTextElement = document.getElementById("menuTitle");
            typingTextElement.style.minWidth = "410px";
            typingTextElement.style.color = getRandomColor();
        }
let text = "Tibetan Snowlions 2024 Summer CS Program"
let index = 0;
function typeTitle() {
            setMinWidthAndColor()
            if (index < text.length) {
                document.getElementById("menuTitle").textContent += text.charAt(index);
                index++;
                setTimeout(typeTitle, 100);
            } else {
                setTimeout(() => {
                    document.getElementById("menuTitle").textContent = "";
                    index = 0;
                    document.getElementById("menuTitle").style.minWidth = '250px';
                    typeTitle();
                }, 1000); // Pause for 1 second before repeating
            }
        }

typeTitle();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let button = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}//
// Place any custom JS here
//
