export function changesize(id: string) {
  const texto = document.getElementById(id);
  if (texto){
    texto.style.width = '100px';
  }
}
