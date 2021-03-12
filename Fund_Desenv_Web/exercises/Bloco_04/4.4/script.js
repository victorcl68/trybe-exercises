let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

/* console.log('Bem vinda, ' + info.personagem);

console.log(info);

for (let i in info) {
  console.log(i);
}

for (let i in info) {
  console.log(info[i]);
} */

for (let j in info) {
  if (
    info[j] === info.recorrente &&
    info[j] === "Sim" &&
    info2[j] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {  
    console.log(info[j] + " e " + info2[j]);
  }
}
