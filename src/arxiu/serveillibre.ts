import { Llibre } from './Llibre';
let llibreGuardat: Llibre;

export function crearLlibre() {
  llibreGuardat = new Llibre(
    'Angular',
    ['Hola', 'Adeu', 'Kevinash']
  );
}

export function mostrarLlibre(id: string) {
  const div = document.getElementById(id)!;

  div.innerHTML = `
    <h2>${llibreGuardat.titol}</h2>
    <ul>
      ${llibreGuardat.tematiques.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;
}
