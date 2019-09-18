let peso = null;
let mercurio = 3.7;
let venus = 8.87;
let tierra = 9.8;
let marte = 3.71;
let jupiter = 24.79;
let saturno = 10.44;
let urano = 8.87;
let neptuno = 11.15;
let ceres = 0.27;
let pluton = 0.60;

function pesoIntroduciodo(ps) {
    peso = parseFloat(ps.value);

    let mer = mercurio;
    mer = (peso * mer) / tierra;

    let ven = venus;
    ven = (peso * ven) / tierra;

    let tie = tierra;
    tie = (peso * tie) / tierra;

    let mar = marte;
    mar = (peso * mar) / tierra;

    let jup = jupiter;
    jup = (peso * jup) / tierra;

    let sat = saturno;
    sat = (peso * sat) / tierra;

    let ura = urano;
    ura = (peso * ura) / tierra;

    let nep = neptuno;
    nep = (peso * nep) / tierra;

    let cer = ceres;
    cer = (peso * cer) / tierra;

    let plu = pluton;
    plu = (peso * plu) / tierra;

    document.getElementById("mercurio").innerHTML = parseFloat(mer).toFixed(2);
    document.getElementById("venus").innerHTML = parseFloat(ven).toFixed(2);
    document.getElementById("tierra").innerHTML = parseFloat(tie).toFixed(2);
    document.getElementById("marte").innerHTML = parseFloat(mar).toFixed(2);
    document.getElementById("jupiter").innerHTML = parseFloat(jup).toFixed(2);
    document.getElementById("saturno").innerHTML = parseFloat(sat).toFixed(2);
    document.getElementById("urano").innerHTML = parseFloat(ura).toFixed(2);
    document.getElementById("neptuno").innerHTML = parseFloat(nep).toFixed(2);
    document.getElementById("ceres").innerHTML = parseFloat(cer).toFixed(2);
    document.getElementById("pluton").innerHTML = parseFloat(plu).toFixed(2);
}