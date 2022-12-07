// Import jQuery
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Import LogoSnap CSS
var cssId = 'logosnap';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'snap.css';
    link.media = 'all';
    head.appendChild(link);
}

// HTML Code
function init() {
    let string_of_html = `
<div class="context" hidden>
<div class="context_item" onclick="logoSnapImage()" id="copy">
    <div class="inner_item">
        Copy Logo (Image)
    </div>
</div>
<div class="context_item" onclick="logoSnapSrc()" id="link">
    <div class="inner_item">
        Copy Logo (Link)
    </div>
</div>
<div class="context_item" onclick="logoSnapGuide()" id="guidelines">
    <div class="inner_item">
        Brand Guidelines
    </div>
</div>
<a href="https://github.com/reeceatkinson/logosnap" style="text-decoration: none;" id="credit">LogoSnap</a>
</div>
`;
    document.body.innerHTML += string_of_html;
}


// Open the dialog / context menu
function snapMe() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    $(".context")
        .show()
        .css({
            top: event.pageY,
            left: event.pageX
        });
    // if user clicks outside of the context menu, hide it with jQuery
    $(document).click(function () {
        $(".context").hide();
        // if user clicks outside of .context, enable the context menu
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
    );
}




// The main app that powers functions within the dialog
function logoSnapSrc() {
    // get the logo src with id snap
    //var snapLogo = document.getElementById("snap").src;
    //console.info(snapLogo);
    //navigator.clipboard.writeText(snapLogo);

    var snapLink = document.getElementById("snap").getAttribute("imagelink");
    console.info(snapLink);
    navigator.clipboard.writeText(snapLink);
}

function logoSnapImage() {
    var snapImage = document.getElementById("snap").getAttribute("imagelink");
    console.info(snapImage);
    window.open(snapImage, '_blank');
}

function logoSnapGuide() {
    var snapGuide = document.getElementById("snap").getAttribute("guidelinelink");
    console.info(snapGuide);
    window.open(snapGuide, '_blank');
}




function hideLink() {
    var element = document.getElementById("link");
    element.style.display = "none";
}

function hideCopy() {
    var element = document.getElementById("copy");
    element.style.display = "none";
}

function hideGuide() {
    var element = document.getElementById("guidelines");
    element.style.display = "none";
}


// Disable the normal context menu
