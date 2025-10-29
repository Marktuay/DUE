
// Cargar Timeline.js desde CDN
var script = document.createElement('script');
script.src = 'https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js';
script.onload = function() {
    var timelineData = {
        "title": {
            "text": {
                "headline": "30 Aniversario DUE",
                "text": "Línea de tiempo de los hitos más importantes."
            }
        },
        "events": [
            {
                "start_date": {"year": "2006", "month": "04", "day": "10"},
                "text": {
                    "headline": "Fundación DUE",
                    "text": "Inicio de la organización. Este evento marca el comienzo de una nueva etapa. Aquí puedes agregar una descripción más larga para que el layout se ajuste y la imagen aparezca a la izquierda."
                },
                "media": {
                    "url": "images/1.png",
                    "caption": "Foto de la fundación"
                }
            },
            {
                "start_date": {"year": "2008", "month": "06", "day": "15"},
                "text": {
                    "headline": "Primer evento importante",
                    "text": "Evento inaugural con participación internacional."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+2",
                    "caption": "Evento inaugural"
                }
            },
            {
                "start_date": {"year": "2010", "month": "09", "day": "20"},
                "text": {
                    "headline": "Expansión internacional",
                    "text": "DUE se expande a nuevos países."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+3",
                    "caption": "Mapa de expansión"
                }
            },
            {
                "start_date": {"year": "2012", "month": "03", "day": "05"},
                "text": {
                    "headline": "Reconocimiento nacional",
                    "text": "Premio nacional por impacto social."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+4",
                    "caption": "Premio recibido"
                }
            },
            {
                "start_date": {"year": "2014", "month": "11", "day": "12"},
                "text": {
                    "headline": "Nuevo edificio",
                    "text": "Inauguración de la nueva sede."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+5",
                    "caption": "Foto del edificio"
                }
            },
            {
                "start_date": {"year": "2016", "month": "02", "day": "28"},
                "text": {
                    "headline": "Lanzamiento de plataforma digital",
                    "text": "Presentación de la plataforma web."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+6",
                    "caption": "Plataforma web"
                }
            },
            {
                "start_date": {"year": "2018", "month": "07", "day": "19"},
                "text": {
                    "headline": "Alianza internacional",
                    "text": "Firma de alianza con organizaciones europeas."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+7",
                    "caption": "Firma de alianza"
                }
            },
            {
                "start_date": {"year": "2025", "month": "10", "day": "29"},
                "text": {
                    "headline": "30 Aniversario",
                    "text": "Celebración de los 30 años de DUE."
                },
                "media": {
                    "url": "https://via.placeholder.com/800x400.png?text=Evento+8",
                    "caption": "Celebración aniversario"
                }
            }
        ]
    };
    var options = {
        language: 'es',
        timenav_position: 'bottom',
        height: 700,
        width: 1000
    };
    var timeline = new TL.Timeline('timeline-embed', timelineData, options);
};
document.head.appendChild(script);