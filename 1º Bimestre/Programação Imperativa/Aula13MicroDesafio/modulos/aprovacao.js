
/*Verificando a média e o número de faltas para aprovação ou não */
exports.passou = (media, faltas) => {
        if (media > 7.6 && faltas <= 2) {
            return true;
        } else if (media < 7) {
            return false;
        } else if (faltas > 2) {
            return false;
        } else {
            return true;
        }
}

