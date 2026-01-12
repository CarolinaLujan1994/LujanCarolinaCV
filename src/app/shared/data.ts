import { Experience } from './models/experience.model';
import { Education } from './models/education.model';
import { Certificates } from './models/certificates.model';
import { Materias } from './models/materias.model';
import { Projects } from './models/proyectos.model';

export const EXPERIENCIA: Experience[] = [{
  rol: 'Programadora',
  empresa: 'Hospital de Clínicas - Gral. José de San Martín',
  periodo: 'Feb 2021 - Jul 2023',
  tareas: [
    'Desarrollo front-end y back-end según especificaciones',
    'Planificación y ejecución de proyectos',
    'Testing y documentación técnica detallada',
    'Resolución de problemas y presentación de soluciones'
  ]
}];

export const EDUCACION: Education[] = [{
  institucion: 'Universidad Nacional de Hurlingham',
  titulo: 'Tecnicatura Universitaria en Programación de Videojuegos',
  periodo: 'Jul 2023 - Actualidad'
}];

export const CONTACTO = {
  telefono: '+54 9 11 3371-9211',
  email: 'lujancarolina1994@gmail.com',
  email2: 'carolinaanahi.lujan@estudiantes.unahur.edu.ar',
  ubicacion: 'Tres de Febrero, Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/lujancarolina1994/',
  github: 'https://github.com/CarolinaLujan1994',
  instagram: 'https://www.instagram.com/___mizuart/'
};

export const OTRASEXPERIENCIAS: Experience[] = [
  {
    rol: 'Empleada',
    empresa: 'Álvarez (temporal)',
    periodo: 'Ene 2020 - Nov 2020',
    tareas: [
      'Armado de bombillas'
    ]
  },
  {
    rol: 'Emprendimiento familiar',
    empresa: 'Autómono',
    periodo: 'Mar 2018 - Ene 2019',
    tareas: [
      'Venta y producción de productos de pastelería'
    ]
  },

  {
    rol: 'Empleada',
    empresa: 'Cinemark Hoyts Argentina (temporal)',
    periodo: 'Jul 2016 - Ago 2016',
    tareas: [
      'Atención al cliente',
      'Limpieza da salas'
    ]
  },

  {
    rol: 'Auxiliar',
    empresa: 'Avios Group SRL',
    periodo: 'Oct 2014 - Dic 2015',
    tareas: [
      'Atención en guardarropas',
      'Proveedor de insumos a corredores',
      'Guía caminos'
    ]
  }
]

export const CERTIFICACIONES: Certificates[] = [
  {
    img: 'assets/certificates/certificado6.jpg',
    titulo: 'Testing',
  },
  {
    img: 'assets/certificates/certificado5.jpg',
    titulo: 'Análisis de datos en Power BI',
  },
  {
    img: 'assets/certificates/certificado1.jpg',
    titulo: 'Testing QA de calidad de software',
  },
  {
    img: 'assets/certificates/certificado4.jpg',
    titulo: 'Excel Fundamentos',
  },
  {
    img: 'assets/certificates/certificado3.jpg',
    titulo: 'Base de Datos Inicial',
  },
  {
    img: 'assets/certificates/certificado2.jpg',
    titulo: 'Introducción a Data Analytics',
  }
];

export const MATERIASAPROBADAS: Materias[] = [
  { id: 1, nombre: 'Matemática para informática I' },
  { id: 2, nombre: 'Introducción a lógica y problemas computacionales' },
  { id: 3, nombre: 'Introducción a los Videojuegos' },
  { id: 4, nombre: 'Nuevos entornos y lenguajes: la producción de conocimiento en la cultura digital' },
  { id: 5, nombre: 'Taller de diseño conceptual de juegos' },
  { id: 6, nombre: 'Programación estructurada' },
  { id: 7, nombre: 'Arte digital para videojuegos' },
  { id: 8, nombre: 'Inglés I' },
  { id: 9, nombre: 'Bases de Datos' },
  { id: 10, nombre: 'Programación con objetos' },
  { id: 11, nombre: 'Introducción a motores de videojuegos' },
  { id: 12, nombre: 'Materia UNAHUR' },
  { id: 13, nombre: 'Programación de videojuegos I' },
  { id: 14, nombre: 'Electiva I' },
  { id: 15, nombre: 'Construcción de interfaces de usuario' },
  { id: 16, nombre: 'Inglés II' },
  { id: 17, nombre: 'Electiva II' },
]

export const PROYECTOS: Projects[] = [
  {
    nombre: 'House Scape',
    tipo: 'Juego',
    descripcion: 'Big Red es una manzana que ha cobrado vida y sueña con escapar de la casa. Recolectando monedas, esquivando enemigos y superando obstáculos en una aventura llena de acción y desafíos',
    link: 'https://nicosalanitri.itch.io/house-scape',
    anio: '2024'
  },
  {
    nombre: 'Dragon Slug',
    tipo: 'Juego',
    descripcion: 'Vita, la dragona verde, debe recuperar los huevos robados por los minotauros. Enfrentará enemigos y peligros mortales en una misión donde la furia de una madre decidirá el destino de su especie',
    link: 'https://wenchu77.itch.io/dragon-slug',
    anio: '2024'
  },
  {
    nombre: 'El Anciano Gran Mago',
    tipo: 'Animación',
    descripcion: 'Basado en un cuento de Javier Villafañe',
    link: 'https://drive.google.com/drive/u/0/folders/1_1w64YJBQL5kafScUQdCzRBAqsXp-z4W',
    anio: '2025'
  },
  {
    nombre: 'Arcane Scape',
    tipo: 'Juego',
    descripcion: 'Un mago anciano despierta en un bosque encantado invadido por fantasmas. Para restaurar la paz, deberá explorar, recolectar corazones y pócimas mágicas, y enfrentar peligros mientras limpia el bosque de entidades espectrales',
    link: 'https://carolinalujan1994.github.io/ProgramacionVideoJuegos1/',
    anio: '2025'
  },
  {
    nombre: 'Construcción de Interfaces',
    tipo: 'Documento',
    descripcion: 'Proyecto para la construcción de un posible juego, detallando narrativa, mecánicas, interfaz y referencia a otros títulos, con conclusiones sobre diseño de HUD experiencia del jugador',
    link: 'https://docs.google.com/presentation/d/1i3NyrCEBKHY1uRxWf5JZlBUyG2HQPdqscLqc9FLj4wY/edit?slide=id.p#slide=id.p',
    anio: '2025'
  },
  {
    nombre: 'Registro de usuarios',
    tipo: 'Aplicación web',
    descripcion: 'Mini sistema de registro de usuarios desarrollado en Angular. El mismo permite agregar, editar y eliminar inscriptos, mostrando la lista en una tabla con ids',
    link: 'https://carolinalujan1994.github.io/RegistroDeUsuariosConAngular/',
    anio: '2026'
  },
];
