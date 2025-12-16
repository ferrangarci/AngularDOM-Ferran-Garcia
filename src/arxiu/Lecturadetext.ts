let textGuardat = '';

export function Lecturadetext(idOrigen: string) {
  const origen = document.getElementById(idOrigen)!;
  textGuardat = origen.innerText;
}

export function mostrartext(idDesti: string) {
  const desti = document.getElementById(idDesti)!;
  desti.innerText = textGuardat;
}
