// Kullanıcıya listeye kaç adet isim eklemek istediğini soralım. 
// Kullanıcı cevabına göre isimleri girelim ve daha sonra console'da yazdıralım. (isimler birden fazla eklenebilir)
// Kullanıcıya liste içinden hangi ismi aradığını soralım.
// Kullanıcının vereceği cevaba göre "... ismi listenizde .... adet bulundu" gibi mesaj çıkartalım.

let firstNames = []
let addFirstNames = Number(prompt('Listeye kaç adet isim eklemek istediğinizi sayı olarak yazınız.'));
let firstName;

function addNames(){
  for(let i = 0; i < addFirstNames; i++){
    firstName = prompt('Eklemek istediğiniz ismi giriniz. (Aynı ismi birden çok girebilirsiniz.)').toLowerCase();
    firstNames.push(firstName);
  }
  for(let i = 0; i < firstNames.length; i++){
    console.log(firstNames[i]);
  }
}

let searchedName;
let counter = 0;

function searchNames(){
  if(addFirstNames > 0){
    searchedName = prompt('Aradığınız ismi giriniz.').toLowerCase();
  }
  for(let i = 0; i < firstNames.length; i++){
    if(firstNames[i] === searchedName) {
    counter++;
    }
  }
  if (counter > 0) {
    console.log(`${searchedName} ismi listede ${counter} adet bulunuyor.`);
    return;
  }
  console.log(`${searchedName} ismi listede bulunmuyor.`);
}

addNames();
searchNames();
