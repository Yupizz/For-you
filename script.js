/* =========================
   CAMBIAR DE PANTALLA
========================= */

function siguiente(numero) {

    const pantallas =
        document.querySelectorAll(".pantalla");


    pantallas.forEach(function(pantalla) {

        pantalla.classList.add("oculto");

    });


    const nuevaPantalla =
        document.getElementById(
            "pantalla" + numero
        );


    nuevaPantalla.classList.remove(
        "oculto"
    );


    /* Si llega a la pantalla 2 */
    if (numero === 2) {

        iniciarCarga();

    }


    /* Si llega al final */
    if (numero === 5) {

        crearCorazones();

    }

}


/* =========================
   BARRA DE CARGA
========================= */

function iniciarCarga() {

    const barra =
        document.getElementById(
            "barraCarga"
        );


    const numero =
        document.getElementById(
            "numeroCarga"
        );


    const boton =
        document.getElementById(
            "botonCarga"
        );


    let progreso = 0;


    boton.classList.add("oculto");


    barra.style.width = "0%";


    numero.textContent = "0";


    const intervalo =
        setInterval(function() {

            progreso++;


            barra.style.width =
                progreso + "%";


            numero.textContent =
                progreso;


            if (progreso >= 100) {

                clearInterval(intervalo);


                setTimeout(function() {

                    boton.classList.remove(
                        "oculto"
                    );

                }, 500);

            }

        }, 35);

}


/* =========================
   CORAZONES FINALES
========================= */

function crearCorazones() {

    for (let i = 0; i < 40; i++) {

        const corazon =
            document.createElement("div");


        corazon.textContent = "❤️";


        corazon.style.position =
            "fixed";


        corazon.style.left =
            Math.random() * 100 + "vw";


        corazon.style.top =
            "-30px";


        corazon.style.fontSize =
            (Math.random() * 15 + 10)
            + "px";


        corazon.style.zIndex =
            "50";


        corazon.style.animation =
            "caer " +
            (Math.random() * 3 + 2) +
            "s linear";


        document.body.appendChild(
            corazon
        );


        setTimeout(function() {

            corazon.remove();

        }, 5500);

    }

}


/* =========================
   ANIMACIÓN DE CORAZONES
========================= */

const estilo =
    document.createElement("style");


estilo.innerHTML = `

    @keyframes caer {

        to {

            transform:
                translateY(110vh)
                rotate(720deg);

            opacity: 0;

        }

    }

`;


document.head.appendChild(estilo);