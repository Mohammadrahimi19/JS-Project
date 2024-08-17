var $ = document
var kg = $.querySelector('#kg')
var Ghad = $.querySelector('#Ghad')
var statusBMI = $.querySelector('.status')
var BMI = $.querySelector('.BMI')
var kgLabel = $.querySelector('.kgLabel')
var ghadLabel = $.querySelector('.ghadLabel')
function BMIcalculator() {
    var kgValue = kg.value
    var ghadValue = Ghad.value

    kgLabel.innerHTML = kgValue + ' Kg'
    ghadLabel.innerHTML = ghadValue + ' Ghad'

    var BmiResult = (kgValue / (Math.pow(ghadValue / 100, 2))).toFixed(1)
    console.log(BmiResult);
    BMI.innerHTML = BmiResult

    if (BmiResult < 18.5) {
        statusBMI.innerHTML = 'کم وزن'
        statusBMI.classList.add('text-danger')
        statusBMI.classList.remove('text-success')
    }
    else if (18.5 <= BmiResult && BmiResult < 24.9) {
        statusBMI.innerHTML = ' نرمال'
        statusBMI.classList.add('text-success')
        statusBMI.classList.remove('text-danger')

    } else if (BmiResult >= 25 && BmiResult < 29.9) {
        statusBMI.innerHTML = ' اضافه وزن'
        statusBMI.classList.add('text-danger')
        statusBMI.classList.remove('text-success')
    }

}


kg.addEventListener('input', BMIcalculator)
Ghad.addEventListener('input', BMIcalculator)