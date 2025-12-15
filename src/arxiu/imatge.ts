export function imatge(id: string) {
  const texto = document.getElementById(id)!;
  const img = document.createElement('img');
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Collage_of_Six_Cats-02.jpg';
  img.style.width = '150px'
  img.style.height = '150px'
  texto.appendChild(img)
}
