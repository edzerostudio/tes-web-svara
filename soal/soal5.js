/**
 * mencari nilai terbasar
 * @angka1 14
 * @angka2 59
 * @angka3 52
 * @angka4 4
 * @angka5 38
 *
 * @return sebuah @String
 */
function nilaiTerbesar(angka1, angka2, angka3, angka4, angka5) {
  let besar = 0;
  //tempat coding disini
  var lebihBesar = false;
  
  var arrayAngka = [angka1, angka2, angka3, angka4, angka5];
  for (let i = 0; i < arrayAngka.length; i++) {
    for (let j = i++; j < arrayAngka.length; j++) {
      if(arrayAngka[i] > arrayAngka[j]){
        lebihBesar = true;
      } else {
        lebihBesar = false;
      }
    }
    if(lebihBesar){
      besar = arrayAngka[i];
    }
    lebihBesar = false;
  }

  /*
  if(angka1 > angka2) {
    if(angka1 > angka3) {
      if(angka1 > angka4) {
        if(angka1 > angka5) {
          besar = angka1;
        } else {
          besar = angka5;
        }
      } else {
        if(angka4 > angka5) {
          besar = angka4;
        } else {
          besar = angka5;
        }
      }
    } else {
      if(angka3 > angka4) {
        if(angka3 > angka5) {
          besar = angka3;
        } else {
          besar = angka5;
        }
      } else {
        if(angka4 > angka5) {
          besar = angka4;
        } else {
          besar = angka5;
        }
      }
    }
  } else {
    if(angka2 > angka3) {
      if(angka2 > angka4) {
        if(angka2 > angka5) {
          besar = angka2;
        } else {
          besar = angka5;
        }
      } else {
        if(angka4 > angka5) {
          besar = angka4;
        } else {
          besar = angka5;
        }
      }
    } else {
      if(angka3 > angka4) {
        if(angka3 > angka5) {
          besar = angka3;
        } else {
          besar = angka5;
        }
      } else {
        if(angka4 > angka5) {
          besar = angka4;
        } else {
          besar = angka5;
        }
      }
    }
  }
  */

  return 'Nilai terbesar adalah: ' + besar;
}
