export default function calculaDivida(rendimento){
    let valor;
    let aliquota;
    let conjunto = []

    if (rendimento < 22847.77){
        valor = "Isento";

        aliquota = 0;
        conjunto = [valor,aliquota];

        return conjunto;

    } else if (rendimento < 33919.81) {
        valor = (rendimento - 1713.58)  * 0.075;

        aliquota = 7.5;
        conjunto = [valor,aliquota];
        return conjunto;

    } else if (rendimento < 45012.61) {
        valor = (rendimento - 4257.57) * 0.15;

        aliquota = 15;
        conjunto = [valor,aliquota]
        return conjunto

    } else if (rendimento < 55976.17) {
        valor = (rendimento - 7633.51) * 0.225;

        aliquota = 22.5;
        conjunto = [valor,aliquota];

        return conjunto;

    } else {
        valor = (rendimento - 10432.32) * 0.275;

        aliquota = 27.5;
        conjunto = [valor,aliquota];

        return conjunto;
    }
}