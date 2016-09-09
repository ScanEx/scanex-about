var balloonHtml = [
    '<div class="balloon js-baloon">',
    '<div class="balloon-pic">',
    '<div class="img"></div>',
    '</div>',
    '<div class="balloon-title">ГК «СКАНЭКС»</div>',
    '<div class="balloon-content">',
    '<p>',
    '108811, г. Москва, Киевское шоссе, 1, Бизнес-парк «Румянцево», корп.А,<br> 8 подъезд, офис 732',
    '</p>',
    '<p>',
    'Телефон: <a class="phone" href="tel:+74957397385">+7 <span>(495)</span> 739-73-85</a><br>',
    '<a href="mailto:info@scanex.ru">info@scanex.ru</a>',
    '</p>',
    '</div>',
    '</div>'
].join('\n')

// balloonHtml = [
//     '<div class="balloon">hello</div>'
// ].join('\n')

function setLeafletMarkerIcon() {
    L.Icon.Default = L.Icon.Default.extend({
        options: {
            iconUrl: 'app/map-pin.png',
            iconSize: [61, 58],
            iconAnchor: [25, 58],
            popupAnchor: [0, 0],
            shadowUrl: 'app/map-pin.png',
            shadowSize: [0, 0],
            shadowAnchor: [0, 0]
        }
    })

    L.Icon.Default.imagePath = 'app'

    L.Marker = L.Marker.extend({
        options: {
            icon: new L.Icon.Default()
        }
    })
}

function init(cm) {
    var center = [ 55.634070, 37.440005]
    var map = L.map(document.body, {
        attributionControl: false
    }).setView(center, 15)
    map.gmxBaseLayersManager.initDefaults({
        apiKey: 'E5FB6CCB5D23B5E119D2F1B26BCC57BD'
    }).then(function() {
        map.gmxBaseLayersManager.setActiveIDs(['OSMHybrid']).setCurrentID('OSMHybrid')
    })

    setLeafletMarkerIcon()

    var marker = L.marker(center).addTo(map)
    var popup = L.popup({
            maxWidth: 330
        })
        .setContent(balloonHtml)
    marker.bindPopup(popup)
    marker.openPopup()
}

window.addEventListener('load', init)
