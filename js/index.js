var left = 50
var position = 0


const huevex = document.getElementById("huevex");
const ICON_PRINCIPAL = document.getElementById("icon-principal")
const DATE = document.getElementById("timeline-date")
const TITLE = document.getElementById("timeline-title")
const INFO = document.getElementById("timeline-info")

const ITEMS_TIMELINE = [
    {
        id: 0,
        date: 'MARZO 2020',
        title: 'PRIMER VIDEO EN NUESTRO CANAL DE YOUTUBE',
        imageSrc: '../makumbasx/assets/images/icons-history/primer-video.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kLhfFWDfbv4" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share"allowfullscreen></iframe>`
    },
    {
        id: 1,
        date: '28 MARZO 2020',
        title: 'SE CREA LA SERIE "MEJORES MOMENTOS PUBG LITE"',
        imageSrc: '../makumbasx/assets/images/icons-history/mejores-pubglite.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/--e4-kitukc" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" allowfullscreen></iframe>`
    },
    {
        id: 2,
        date: '7 MAYO 2020',
        title: 'SE CREA LA SERIE "CORAJES, LLOROS Y MÁS PUBG LITE"',
        imageSrc: '../makumbasx/assets/images/icons-history/corajes-pubglite.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Q9tgRrWqAfc" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" allowfullscreen></iframe>`
    },
    {
        id: 3,
        date: '7 JUNIO 2020',
        title: 'ESPECIAL CAPITULO 10 DE LA SERIE "MEJORES MOMENTOS PUBG LITE"',
        imageSrc: '../makumbasx/assets/images/icons-history/especial-pubglite.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/exlFLRujkLY" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" allowfullscreen></iframe>`
    },
    {
        id: 4,
        date: 'JULIO 2020',
        title: 'PRIMERA VICTORIA EN LA PLGS',
        imageSrc: '../makumbasx/assets/images/icons-history/primera-victoria.png',
        inner: `<video src="../makumbasx/assets/videos/PRIMERVICTORIA.mp4" 
                controls poster="../makumbasx/assets/images/posters/PORTADA1VICTORIA.png" 
                class="w-50"></video>`
    },
    {
        id: 5,
        date: '6 NOVIEMBRE 2020',
        title: 'SUBIMOS EL VIDEO MÁS VISITADO DE NUESTRO CANAL',
        imageSrc: '../makumbasx/assets/images/icons-history/videomasvisto.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vLqBD2U7LNc" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                web-share" allowfullscreen></iframe>`
    },
    {
        id: 6,
        date: '26 ABRIL 2021',
        title: 'FIN DE LA SERIE "MEJORES MOMENTOS PUBG LITE"',
        imageSrc: '../makumbasx/assets/images/icons-history/final-mejoresmomentoslite.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tlyTsbzmfcw" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" allowfullscreen></iframe>`
    },
    {
        id: 7,
        date: '8 DE ENERO 2023',
        title: 'SE CREA LA SERIE "MEJORES MOMENTOS WARZONE 2.0"',
        imageSrc: '../makumbasx/assets/images/icons-history/mejores-wz.png',
        inner: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zb6S5OY_i1U" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" allowfullscreen></iframe>`
    },
]


for (let i = 0; i < ITEMS_TIMELINE.length; i++) {
    const icon = document.createElement("div");
    icon.classList = i == 0 ? 'icon-history bg-cover' : 'icon-history-secondary bg-cover'
    icon.style.backgroundImage = 'url(' + ITEMS_TIMELINE[i].imageSrc + ')';
    icon.id = ITEMS_TIMELINE[i].id
    huevex.appendChild(icon)
}

function move(orientation) {

    if (orientation == 0 && position >= 1) {
        position -= 1
        left = huevex.offsetLeft + 130;
        const currentElement = document.getElementById(position.toString())
        const prevElement = document.getElementById((position + 1).toString())

        currentElement.classList = 'icon-history bg-cover'
        prevElement.classList = 'icon-history-secondary bg-cover'
        loadIconPrincipal(ITEMS_TIMELINE[position])

    }
    else if (orientation == 1 && position <= (huevex.childElementCount - 2)) {
        position += 1
        left = huevex.offsetLeft - 130;
        const currentElement = document.getElementById(position.toString())
        const prevElement = document.getElementById((position - 1).toString())

        currentElement.classList = 'icon-history bg-cover'
        prevElement.classList = 'icon-history-secondary bg-cover'
        loadIconPrincipal(ITEMS_TIMELINE[position])


    }

    huevex.style.marginLeft = left + 'px';
}


function loadIconPrincipal(item) {
    DATE.innerText = item['date']
    TITLE.innerText = item['title']
    INFO.innerHTML = item['inner']
}



