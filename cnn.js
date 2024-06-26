

//  Get Elements
const header = document.querySelector("#header")
const main = document.querySelector("#main")
const live = document.querySelector("#live")
const footer = document.querySelector("#footer")

// Skyscraper Contents
const skyscraper_left = document.querySelector("#skyscraper-left")
const skyscraper_right = document.querySelector("#skyscraper-right")
const skyscraper_initial_y = skyscraper_left.offsetTop - 70

//  Mobile Menu
const mobile_menu = document.querySelector("#mobile-menu")
const mobile_menu_content = document.querySelector("#mobile-menu-content")
const mobile_menu_button = document.querySelector("#mobile-menu-button")
const mobile_menu_button_icon = document.querySelector("#mobile-menu-button > i")
const desktop_search_ui = document.querySelector("#desktop-search-ui")
const desktop_search_ui_button = document.querySelector("#desktop-search-ui-button")

// Device Default Type
let device_type = 'desktop'

//  Configuración Live
let live_view_status = false
let mobile_menu_status = false
let desktop_search_ui_status = false

// Search UI
const seach_ui = () => {
    if (desktop_search_ui_status) {
        desktop_search_ui.style.display = 'none'
        desktop_search_ui_status = false
    }
    else {
        desktop_search_ui.style.display = 'grid'
        desktop_search_ui_status = true
    }
};

//  Mobile menu action
mobile_menu_button.addEventListener('click', (event) => {

    //  Validate menu status
    if (mobile_menu_status) {

        //  Change display status
        mobile_menu_status = false
        mobile_menu_content.style.display = "none"

        //  Active body scroll
        document.body.style.overflow = "scroll"

        //  Change button icon
        mobile_menu_button_icon.classList.remove('fa-xmark')
        mobile_menu_button_icon.classList.add('fa-bars')

    }
    else {

        //  Change display status
        mobile_menu_status = true
        mobile_menu_content.style.display = "block"

        //  Disable body scroll
        document.body.style.overflow = "hidden"

        //  Change button icon
        mobile_menu_button_icon.classList.remove('fa-bars')
        mobile_menu_button_icon.classList.add('fa-xmark')
    }

});

const getDevice = () => {

    // Validate Mobile
    if (navigator.userAgent.indexOf("Mobile") != -1) {
        device_type = 'mobile'
    }
    else {
        device_type = 'desktop'
    }
}

// Status On Air Player
const liveStatus = () => {

    //  Detener Live
    if (live_view_status) {
        player.stopVideo();

        setTimeout(() => {
            live.style.display = 'block'

            //  Detect Device
            if (device_type == 'desktop') {
                live.classList.remove('animate-liveIn')
                live.classList.add('animate-liveOut')
            }
            else {
                live.classList.remove('animate-liveInMobile')
                live.classList.add('animate-liveOutMobile')
            }

            //  Change Live status
            live_view_status = false
        }, 500)
    }
    else {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        //  Detect Device
        if (device_type == 'desktop') {
            live.classList.remove('animate-liveOut')
            live.classList.add('animate-liveIn')
        }
        else {
            live.classList.remove('animate-liveOutMobile')
            live.classList.add('animate-liveInMobile')
        }

        live.style.display = 'block'
        live.style.height = '0px'

        setTimeout(() => {
            player.playVideo();
        }, 1250)

        //  Change Live status
        live_view_status = true
    }
}

// Listener in Scroll
window.addEventListener('scroll', (e) => {

    // Default Values
    let scroll_limit
    let scroll_y = document.documentElement.scrollTop

    // Validate On Air Satus
    if (live_view_status) {
        scroll_limit = 508 + skyscraper_initial_y
    }
    else {
        scroll_limit = skyscraper_initial_y
    }

    // Validate Scroll Position
    if (scroll_y > scroll_limit) {
        skyscraper_left.style.position = 'fixed'
        skyscraper_left.style.top = '70px'
        skyscraper_right.style.position = 'fixed'
        skyscraper_right.style.top = '70px'
    }
    else {
        skyscraper_left.style.position = 'absolute'
        skyscraper_left.style.top = 'auto'
        skyscraper_right.style.position = 'absolute'
        skyscraper_right.style.top = 'auto'
    }
})

//  Document Complete
window.addEventListener('DOMContentLoaded', (event) => {

    // Get Device Data
    getDevice();

});

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    player = new YT.Player('youTubeLive');
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);