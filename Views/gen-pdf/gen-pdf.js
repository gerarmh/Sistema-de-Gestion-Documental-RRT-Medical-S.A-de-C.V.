function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

window.addEventListener('load', async () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let folio = document.getElementById('folio').value;
        let area = document.getElementById('area').value;
        let fechasoli = document.getElementById('fechasoli').value;
        let fechaefec = document.getElementById('fechaefec').value;
        let razon = document.getElementById('razon').value;
        let procedformato = document.getElementById('procedformato').value;
        let producto = document.getElementById('producto').value;
        let matprima = document.getElementById('matprima').value;
        let especificaciones = document.getElementById('especificaciones').value;
        let proceso = document.getElementById('proceso').value;
        let metanalisis = document.getElementById('metanalisis').value;
        let equipos = document.getElementById('equipos').value;
        let siscomputo = document.getElementById('siscomputo').value;
        let instalaciones = document.getElementById('instalaciones').value;
        let espectitulo = document.getElementById('espectitulo').value;
        let cambiode = document.getElementById('cambiode').value;
        let cambioa = document.getElementById('cambioa').value;
        let capacitacion = document.querySelector('input[name="capacitacion"]:checked').value;
        let capacitaciondesc = document.getElementById('capacitaciondesc').value;
        let evaluacion = document.querySelector('input[name="evaluacion"]:checked').value;
        let evaluaciondesc = document.getElementById('evaluaciondesc').value;
        let porqueno = document.getElementById('porqueno').value;
        let reqcalificacion = document.querySelector('input[name="reqcalificacion"]:checked').value;
        let nocalificacion = document.getElementById('nocalificacion').value;
        let resultado = document.getElementById('resultado').value;
        let pruebas = document.getElementById('pruebas').value;
        let responsable = document.getElementById('responsable').value;
        let fechainicio = document.getElementById('fechainicio').value;
        let fechatermino = document.getElementById('fechatermino').value;


        generatePDF(nombre, folio, area, fechasoli, fechaefec, razon, procedformato, producto, matprima, especificaciones, proceso, metanalisis, equipos, siscomputo, instalaciones, espectitulo, cambiode, cambioa, capacitacion, capacitaciondesc, evaluacion, evaluaciondesc, porqueno, reqcalificacion, nocalificacion, resultado, pruebas, responsable, fechainicio, fechatermino);
    });
});

async function generatePDF(nombre, folio, area, fechasoli, fechaefec, razon, procedformato, producto, matprima, especificaciones, proceso, metanalisis, equipos, siscomputo, instalaciones, espectitulo, cambiode, cambioa, capacitacion, capacitaciondesc, evaluacion, evaluaciondesc, porqueno, reqcalificacion, nocalificacion, resultado, pruebas, responsable, fechainicio, fechatermino) {
    const image = await loadImage("../views/gen-pdf/formulario.png")
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(image, 'PNG', 0, 0, 600, 756);

    pdf.setFontSize(9);
    pdf.text(nombre, 45, 85);
    pdf.text(folio, 520, 52);
    pdf.text(area, 300, 85);
    pdf.text(fechasoli, 415, 85);
    pdf.text(fechaefec, 500, 85);
    pdf.text(razon, 122, 117, {align:'left', lineHeightFactor: 1.5, maxWidth: 450});

    pdf.text(espectitulo, 45, 220, {align:'justify', lineHeightFactor: 1.5, maxWidth: 510});
    pdf.text(cambiode, 42, 316, {align: 'left', lineHeightFactor: 1.2, maxWidth: 230});
    pdf.text(cambioa, 280, 316, {align: 'left', lineHeightFactor: 1.2, maxWidth: 280});
    pdf.text(capacitaciondesc, 162, 405, {align: 'left', lineHeightFactor: 1.2});
    pdf.text(evaluaciondesc, 162, 420, {align: 'left', lineHeightFactor: 1.2});
    pdf.text(porqueno, 122, 435, {align: 'justify', lineHeightFactor: 1.5, maxWidth: 230});
    pdf.text(nocalificacion, 510, 475, {align: 'justify', lineHeightFactor: 1.5});
    pdf.text(resultado, 42, 507, {align: 'justify', lineHeightFactor: 1.5, maxWidth: 510});
    pdf.text(pruebas, 280, 535, {align: 'justify', lineHeightFactor: 1.5});
    pdf.text(responsable, 45, 708);
    pdf.text(fechainicio, 415, 708);
    pdf.text(fechatermino, 500, 708);

    pdf.setFillColor(0,0,0);

    if (parseInt(capacitacion)===1) {
        pdf.circle(148, 400, 4, 'FD');
        } else {
        pdf.circle(389, 400, 4, 'FD');
        }

    if (parseInt(evaluacion)===1) {
        pdf.circle(148, 414, 4, 'FD');
        } else {
        pdf.circle(389, 414, 4, 'FD');
        }
    if (parseInt(reqcalificacion)===1) {
        pdf.circle(282.5, 471, 4, 'FD');
        } else {
        pdf.circle(349, 471, 4, 'FD');
        }

    pdf.save("example.pdf");

}