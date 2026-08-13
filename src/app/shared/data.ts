import { Experience } from './models/experience.model';
import { Education } from './models/education.model';
import { Certificates } from './models/certificates.model';
import { Materias } from './models/materias.model';
import { Projects } from './models/proyectos.model';
import { Ilustrators } from './models/ilustrators.model';

export const EXPERIENCIA: Experience[] = [{
  rol: 'Programadora',
  empresa: 'Hospital de Clínicas - Gral. José de San Martín',
  periodo: 'Feb 2021 - Jul 2023',
  tareas: [
    'Parte del equipo de programación del actual portal web del hospital: ',
    'Participé en el desarrollo y mantenimiento de aplicaciones front-end y back-end utilizando Angular y TypeScript.',
    'Trabajé en la gestión y consulta de bases de datos con SQL Server.',
    'Realicé tareas de testing y documentación técnica.',
    'Colaboré con el equipo en la resolución de problemas técnicos y la implementación de mejoras en los sistemas existentes.',
    'Consumí y vinculé APIs REST para la integración de diferentes módulos.'
  ]
}];

export const EDUCACION: Education[] = [{
  institucion: 'Universidad Nacional de Hurlingham',
  titulo: 'Tecnicatura Universitaria en Programación de Videojuegos',
  periodo: 'Jul 2023 - Diciembre 2026'
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
      'Tareas operativas en línea de producción para el armado de bombillas.'
    ]
  },
  {
    rol: 'Emprendimiento familiar',
    empresa: 'Autómono',
    periodo: 'Mar 2018 - Ene 2019',
    tareas: [
      'Producción y venta de productos de pastelería artesanal.',
      'Gestión de pedidos, atención a clientes y manejo de redes sociales para la comercialización.'
    ]
  },

  {
    rol: 'Empleada',
    empresa: 'Cinemark Hoyts Argentina (temporal)',
    periodo: 'Jul 2016 - Ago 2016',
    tareas: [
      'Atención directa al público y gestión de ingresos a salas.',
      'Mantenimiento y limpieza de salas.'
    ]
  },

  {
    rol: 'Auxiliar',
    empresa: 'Avios Group SRL',
    periodo: 'Oct 2014 - Dic 2015',
    tareas: [
      'Atención en guardarropas y recepción de asistentes.',
      'Soporte logístico ofreciendo insumos necesarios a los participantes de eventos.',
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


export const PROYECTOS: Projects[] = [
  {
    nombre: 'House Scape',
    tipo: 'Juego',
    descripcion: 'Big Red es una manzana que ha cobrado vida y sueña con escapar de la casa. Recolectando monedas, esquivando enemigos y superando obstáculos en una aventura llena de acción y desafíos',
    herramientras: 'GDevelop 5',
    imagen: 'assets/imagenProyectos/houseScape.jpg',
    link: 'https://nicosalanitri.itch.io/house-scape',
    anio: '2024'
  },
  {
    nombre: 'Dragon Slug',
    tipo: 'Juego',
    descripcion: 'Vita, la dragona verde, debe recuperar los huevos robados por los minotauros. Enfrentará enemigos y peligros mortales en una misión donde la furia de una madre decidirá el destino de su especie',
    herramientras: 'GDevelop 5',
    imagen: 'assets/imagenProyectos/dragonSlug.png',
    link: 'https://wenchu77.itch.io/dragon-slug',
    anio: '2024'
  },
  {
    nombre: 'El Anciano Gran Mago',
    tipo: 'Animación',
    descripcion: 'Basado en un cuento de Javier Villafañe',
    herramientras: 'Krita',
    imagen: 'assets/imagenProyectos/elMago.png',
    link: 'https://drive.google.com/drive/u/0/folders/1_1w64YJBQL5kafScUQdCzRBAqsXp-z4W',
    anio: '2025'
  },
  {
    nombre: 'Arcane Scape',
    tipo: 'Juego',
    descripcion: 'Un mago anciano despierta en un bosque encantado invadido por fantasmas. Para restaurar la paz, deberá explorar, recolectar corazones y pócimas mágicas, y enfrentar peligros mientras limpia el bosque de entidades espectrales',
    herramientras: 'JavaScript · PixiJS',
    imagen: 'assets/imagenProyectos/arcaneScape.png',
    link: 'https://carolinalujan1994.github.io/ProgramacionVideoJuegos1/',
    anio: '2025'
  },
  {
    nombre: 'Construcción de Interfaces',
    tipo: 'Documento',
    descripcion: 'Proyecto para la construcción de un posible juego, detallando narrativa, mecánicas, interfaz y referencia a otros títulos, con conclusiones sobre diseño de HUD experiencia del jugador',
    herramientras: 'Google Slides',
    imagen: 'assets/imagenProyectos/construccionDeInterfaces.png',
    link: 'assets/documents/construccionDeInterfaces.pdf',
    anio: '2025'
  },
  {
    nombre: 'Golf 2D - EN PROCESO',
    tipo: 'Juego',
    descripcion: '',
    herramientras: 'Unity · C#',
    imagen: 'assets/imagenProyectos/enProceso.png',
    link: '',
    anio: '2026'
  },
  {
    nombre: 'Novela visual - PRÓXIMAMENTE',
    tipo: 'Juego',
    descripcion: '—',
    herramientras: 'Unity · C#',
    imagen: 'assets/imagenProyectos/enProceso.png',
    link: '',
    anio: '2026'
  },
];

export const ILUSTRACIONES: Ilustrators[] = [
  {
    imagen: 'assets/ilustraciones/ilustracion1.jpg',
    titulo: 'Ilustración 1'
  },
  {
    imagen: 'assets/ilustraciones/ilustracion2.png',
    titulo: 'Ilustración 2'
  },
  {
    imagen: 'assets/ilustraciones/ilustracion3.png',
    titulo: 'Ilustración 3'
  },
  {
    imagen: 'assets/ilustraciones/ilustracion4.png',
    titulo: 'Ilustración 4'
  },
    {
    imagen: 'assets/ilustraciones/ilustracion5.png',
    titulo: 'Ilustración 5'
  }
];