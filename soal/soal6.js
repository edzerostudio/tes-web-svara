/**
 * Menghilangkan nilai dari Array.
 * @arrayBuah @Array campuran buah dan hewan
 * @arrayHewan @Array dari hewan
 *
 * @return sebuah @Array
 */
function hapusArray(arrayBuah, arrayHewan) {
  const arrayBuahBaru = [];
  var campuran = false; //membuat Array baru

  //tempat coding disini
  for (let i = 0; i < arrayBuah.length; i++) {
    for (let j = 0; j < arrayHewan.length; j++) {
      if(arrayBuah[i].toString() == arrayHewan[j].toString()){
        campuran = true;
      }
    }
    if (campuran == false) {
      arrayBuahBaru.push(arrayBuah[i]);
    }
    campuran = false;
  }

  return arrayBuahBaru;
}
