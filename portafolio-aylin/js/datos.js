/* ============================================================
   DATOS DEL PORTAFOLIO
   Modifica este archivo para actualizar textos, proyectos,
   fechas, evidencias y enlaces sin tocar la estructura visual.
   ============================================================ */

window.PORTAFOLIO = {
  perfil: {
    nombre: "Aylin Mariana Castulo Marin",
    corto: "Aylin M.",
    rol: "Estudiante de Ingeniería Informática",
    institucion: "Tecnológico de Estudios Superiores de San Felipe del Progreso",
    frase: "Tecnología, creatividad y soluciones que se convierten en proyectos.",
    descripcion: "Estudiante de Ingeniería Informática | Desarrolladora en formación | Robótica y programación.",
    semestre: "Quinto semestre",
    inicioCarrera: "Agosto de 2024"
  },

  navegacion: [
    { id: "inicio", etiqueta: "Inicio" },
    { id: "sobre-mi", etiqueta: "Sobre mí" },
    { id: "formacion", etiqueta: "Formación" },
    { id: "habilidades", etiqueta: "Habilidades" },
    { id: "cv", etiqueta: "CV" },
    { id: "proyectos", etiqueta: "Proyectos" },
    { id: "actividades", etiqueta: "Actividades" },
    { id: "venados", etiqueta: "Venados Robotics" },
    { id: "contacto", etiqueta: "Contacto" }
  ],

  hero: {
    etiqueta: "Portafolio digital · Ingeniería Informática",
    estadisticas: [
      { valor: "5.º", etiqueta: "Semestre en curso" },
      { valor: "06", etiqueta: "Proyectos documentados" },
      { valor: "2024", etiqueta: "Inicio de la carrera" },
      { valor: "ECO160", etiqueta: "Certificación en software" }
    ],
    tiraTecnologias: [
      "Java", "Python", "FastAPI", "MySQL", "JavaScript", "HTML", "CSS",
      "ESP32", "Arduino IDE", "Node.js", "Capacitor", "BLE", "KiCad"
    ]
  },

  sobreMi: {
    parrafos: [
      "¡Hola! Soy Aylin M., estudiante de Ingeniería Informática en el Tecnológico de Estudios Superiores de San Felipe del Progreso. Mi formación en esta carrera comenzó en agosto de 2024 y actualmente curso el quinto semestre.",
      "Antes de ingresar a la universidad me formé como Técnico en Programación en el CECyTEM Plantel San Felipe del Progreso, durante el periodo 2021–2024. También cuento con la certificación ECO160, relacionada con el desarrollo de código de software, obtenida en junio de 2024 por CONOCER. Estas experiencias me dieron una base para continuar aprendiendo sobre programación y desarrollo de soluciones tecnológicas.",
      "Me interesan el desarrollo de software, las bases de datos, la electrónica y la robótica. Me gusta trabajar tanto con la parte lógica de un sistema como con los componentes físicos que permiten que funcione. Por eso he participado en proyectos que combinan programación, microcontroladores, sensores, motores, aplicaciones y diseño de interfaces.",
      "Uno de los proyectos más importantes de mi trayectoria es VENATRIX, un robot minisumo autónomo desarrollado en el entorno de Venados Robotics. También he trabajado en VENATRIX APP, una propuesta de aplicación móvil para controlar y monitorear el robot mediante Bluetooth Low Energy (BLE). Estas experiencias me han permitido acercarme a la integración de software y hardware, realizar pruebas y buscar soluciones ante problemas técnicos.",
      "Además, he desarrollado proyectos académicos con Java y MySQL, Python y FastAPI, y tecnologías web. Entre ellos se encuentran un sistema de gestión de vacantes, un sistema web para un entorno hospitalario y una propuesta educativa de lotería Mazahua con tarjetas RFID."
    ],
    objetivo: "Continuar desarrollándome como ingeniera informática, fortalecer mis habilidades en software y sistemas tecnológicos, y participar en proyectos que conviertan necesidades reales en soluciones funcionales.",
    tarjetas: [
      {
        titulo: "Base técnica previa",
        texto: "Formación como Técnico en Programación antes del ingreso a la universidad."
      },
      {
        titulo: "Certificación",
        texto: "ECO160 – Desarrollo de Código de Software."
      },
      {
        titulo: "Software y hardware",
        texto: "Experiencia académica que integra programación, electrónica y robótica."
      }
    ]
  },

  formacion: {
    linea: [
      {
        titulo: "Ingeniería Informática",
        institucion: "Tecnológico de Estudios Superiores de San Felipe del Progreso",
        periodo: "Agosto de 2024 – actualidad",
        detalle: "Actualmente curso el quinto semestre de la carrera.",
        estado: "En curso"
      },
      {
        titulo: "Técnico en Programación",
        institucion: "CECyTEM Plantel San Felipe del Progreso",
        periodo: "2021 – 2024",
        detalle: "Formación previa al ingreso a la universidad, concluida antes de iniciar Ingeniería Informática.",
        estado: "Concluida"
      },
      {
        titulo: "Certificación ECO160",
        institucion: "CONOCER · Desarrollo de Código de Software",
        periodo: "Junio de 2024",
        detalle: "Certificación relacionada con el desarrollo de código de software.",
        estado: "Obtenida"
      }
    ],
    complementaria: [
      "Desarrollo de código de software.",
      "Programación y desarrollo de aplicaciones.",
      "Programación orientada a objetos.",
      "Diseño y manejo de bases de datos relacionales con MySQL.",
      "Desarrollo de servicios y aplicaciones web con Python y FastAPI.",
      "HTML, CSS y JavaScript.",
      "Electrónica básica e integración de componentes.",
      "Robótica, sensores y sistemas embebidos.",
      "Comunicación Bluetooth Low Energy (BLE) en una aplicación vinculada con un proyecto de robótica."
    ]
  },

  habilidades: {
    tecnicas: [
      { titulo: "Programación", texto: "Desarrollo de soluciones académicas con Java y Python; estructuración de código y depuración." },
      { titulo: "Programación orientada a objetos", texto: "Creación y organización de clases y funcionalidades en proyectos con Java." },
      { titulo: "Desarrollo web", texto: "Estructuración de páginas e interfaces con HTML, CSS y JavaScript." },
      { titulo: "Backend y servicios web", texto: "Desarrollo académico de aplicaciones y rutas con Python y FastAPI." },
      { titulo: "Bases de datos", texto: "Diseño y manejo de bases de datos relacionales con MySQL; conexión entre aplicaciones y almacenamiento de información." },
      { titulo: "Robótica", texto: "Integración y pruebas de sensores, motores, controladores y microcontroladores en prototipos, además de ensamble de hardware y modelado de chasis." },
      { titulo: "Electrónica básica", texto: "Identificación de componentes, revisión de conexiones y pruebas de circuitos." },
      { titulo: "Aplicaciones móviles", texto: "Trabajo en una interfaz para Android mediante tecnologías web, Capacitor y comunicación BLE." },
      { titulo: "Diseño digital", texto: "Elaboración de propuestas visuales, interfaces y recursos gráficos para presentar proyectos." }
    ],
    herramientas: [
      "Java", "Eclipse", "Python", "Visual Studio Code", "MySQL", "MySQL Workbench",
      "HTML", "CSS", "JavaScript", "FastAPI", "Uvicorn", "ESP32",
      "ESP32-C3 Super Mini", "Arduino IDE", "Sensores Sharp", "TB6612FNG",
      "Node.js", "Capacitor", "Bluetooth Low Energy (BLE)", "KiCad", "Canva", "XAMPP"
    ],
    personales: [
      "Trabajo en equipo y colaboración.",
      "Organización de actividades y seguimiento de tareas.",
      "Resolución y análisis de problemas.",
      "Creatividad aplicada al diseño de soluciones.",
      "Pensamiento lógico.",
      "Adaptación y aprendizaje autónomo.",
      "Comunicación de ideas técnicas.",
      "Paciencia y perseverancia durante las pruebas.",
      "Integración de conocimientos de software y hardware."
    ],
    nota: "La lista reúne herramientas utilizadas en actividades y proyectos académicos. No implica el mismo nivel de dominio en todas ellas."
  },

  cv: {
    perfil: "Estudiante de Ingeniería Informática, actualmente en quinto semestre, con formación previa como Técnico en Programación y certificación ECO160 – Desarrollo de Código de Software. Tengo interés en el desarrollo de software, bases de datos, aplicaciones web, electrónica y robótica. He participado en proyectos académicos y colaborativos que integran programación, microcontroladores, sensores, motores y comunicación BLE. Busco continuar fortaleciendo mis habilidades mediante proyectos tecnológicos, trabajo en equipo y aprendizaje práctico.",
    formacion: [
      {
        titulo: "Ingeniería Informática",
        institucion: "Tecnológico de Estudios Superiores de San Felipe del Progreso",
        detalle: "Agosto de 2024 – actualidad. Actualmente curso el quinto semestre de la carrera."
      },
      {
        titulo: "Técnico en Programación",
        institucion: "CECyTEM Plantel San Felipe del Progreso",
        detalle: "2021 – 2024."
      }
    ],
    certificaciones: [
      "ECO160 – Desarrollo de Código de Software. Organismo: CONOCER. Fecha de obtención: junio de 2024."
    ],
    proyectos: [
      { titulo: "VENATRIX", texto: "Participación en programación y electrónica de un robot minisumo autónomo, con ESP32-C3, sensores Sharp y controlador TB6612FNG." },
      { titulo: "VENATRIX APP", texto: "Desarrollo de interfaz y programación de una aplicación complementaria para control y monitoreo mediante BLE, utilizando tecnologías web y Capacitor." },
      { titulo: "Sistema de gestión de vacantes", texto: "Desarrollo académico con Java, Eclipse y MySQL." },
      { titulo: "Sistema web para entorno hospitalario", texto: "Desarrollo backend académico con Python y FastAPI." },
      { titulo: "Lotería Mazahua RFID", texto: "Diseño de una propuesta educativa que integra tarjetas RFID, ESP32, RC522, FastAPI y MySQL." }
    ],
    conocimientos: "Java, Python, MySQL, HTML, CSS, JavaScript, FastAPI, ESP32/ESP32-C3, Arduino IDE, sensores Sharp, TB6612FNG, Node.js, Capacitor, BLE y herramientas de diseño y desarrollo.",
    experiencia: {
      titulo: "Venados Robotics",
      texto: "Participación en actividades de robótica y desarrollo de prototipos, principalmente en proyectos de minisumo. La experiencia incluye colaboración, programación, electrónica, integración de componentes, pruebas, desarrollo de software, ensamble de hardware y modelado del chasis de los robots.",
      competencias: "CRYDTEM 2025 (segundo lugar reportado), MECAFLOW 2025, RoboMatrix Oaxaca 2026, RoboMatrix Puebla 2026 e INOVATEC 2026 en Irapuato, donde se presentó VENATRIX."
    },
    contactoEmail: "catuloaylin209@gmail.com",
    descarga: {
      disponible: true,
      archivo: "assets/CV_Aylin_Castulo_Marin.pdf",
      texto: "Descargar mi CV en PDF",
      nota: "Documento PDF disponible para consulta y descarga."
    }
  },

  proyectos: [
    {
      id: "venatrix",
      numero: "01",
      nombre: "VENATRIX",
      subtitulo: "Robot minisumo autónomo",
      categoria: "Robótica y sistemas embebidos",
      grupo: "robotica",
      resumen: "Robot minisumo autónomo desarrollado dentro de las actividades de Venados Robotics, con detección de oponente y reconocimiento de los límites del área de combate.",
      descripcion: [
        "VENATRIX es un robot minisumo autónomo desarrollado dentro de las actividades de Venados Robotics. Su propósito es detectar a un oponente y ejecutar movimientos de ataque, al mismo tiempo que reconoce los límites del área de combate para evitar salir de ella.",
        "Mi participación se ha enfocado en programación y electrónica del prototipo. He trabajado con el microcontrolador ESP32-C3 Super Mini, sensores de distancia Sharp y el controlador de motores TB6612FNG. El desarrollo ha requerido revisar la lectura de sensores, controlar los motores, ajustar velocidades y probar diferentes comportamientos del robot.",
        "Durante las pruebas también ha sido necesario revisar conexiones, observar datos mediante el monitor serial y modificar el código cuando la respuesta del hardware no coincide con lo esperado. Esto me ha permitido comprender mejor la relación entre las instrucciones del programa y el comportamiento físico del prototipo."
      ],
      objetivo: "Detectar a un oponente y ejecutar movimientos de ataque, reconociendo los límites del área de combate para evitar salir de ella.",
      tecnologias: ["ESP32-C3 Super Mini", "Arduino IDE", "C/C++", "Sensores Sharp", "TB6612FNG", "Electrónica básica"],
      participacion: "Programación, electrónica, integración y pruebas del prototipo.",
      estadoEtiqueta: "Proyecto de Venados Robotics",
      estado: "Proyecto desarrollado en el contexto de Venados Robotics. Las funciones y el comportamiento final que se publiquen deberán corresponder a la versión efectivamente probada en competencia; no se debe presentar una función experimental como resultado definitivo.",
      evidencias: [
        "Fotografías del prototipo y del proceso de construcción.",
        "Diagrama de conexiones.",
        "Fragmentos o repositorio del código.",
        "Registros de pruebas de sensores y motores.",
        "Fotografías de la participación en eventos.",
        "Video de funcionamiento, si está disponible."
      ],
      enlace: { disponible: false, url: "", texto: "Repositorio o carpeta de evidencias", nota: "Pendiente de agregar repositorio o carpeta pública de evidencias." }
    },
    {
      id: "venatrix-app",
      numero: "02",
      nombre: "VENATRIX APP",
      subtitulo: "Aplicación de control y monitoreo",
      categoria: "Aplicaciones móviles e integración con robótica",
      grupo: "apps",
      resumen: "Aplicación complementaria al proyecto de robótica, con una interfaz para enviar comandos al robot y consultar información relacionada con sus sensores.",
      descripcion: [
        "VENATRIX APP es una aplicación complementaria al proyecto de robótica. Su propósito es ofrecer una interfaz desde la cual se puedan enviar comandos al robot y consultar información relacionada con sus sensores.",
        "La propuesta contempla controles de arranque/ataque y detención, además de una sección para visualizar datos de los sensores. La comunicación prevista entre la aplicación y el dispositivo se realiza mediante Bluetooth Low Energy (BLE). Para construir la interfaz se han utilizado tecnologías web y Capacitor como herramienta para empaquetar la aplicación para Android.",
        "Mi participación se ha centrado en la propuesta visual de la interfaz y en la programación de la aplicación. Durante el trabajo ha sido importante considerar tanto la facilidad de uso como la comunicación con el hardware. La integración debe probarse con el dispositivo real antes de afirmar que todas las funciones están terminadas."
      ],
      objetivo: "Ofrecer una interfaz desde la cual se puedan enviar comandos al robot y consultar información relacionada con sus sensores mediante Bluetooth Low Energy.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "Capacitor", "Bluetooth Low Energy (BLE)"],
      participacion: "Diseño de interfaz y programación de la aplicación.",
      estadoEtiqueta: "En desarrollo",
      estado: "Desarrollo de la aplicación y preparación de la comunicación BLE. La conexión estable, los comandos implementados y la lectura en tiempo real de sensores deben documentarse con pruebas verificables antes de describirse como funciones concluidas.",
      evidencias: [
        "Capturas de pantalla de la interfaz.",
        "Logotipo o propuesta de identidad visual.",
        "Diagrama de comunicación BLE.",
        "Código fuente.",
        "Video de demostración con el robot conectado.",
        "Capturas o registros de pruebas de envío y recepción de datos."
      ],
      enlace: { disponible: false, url: "", texto: "Repositorio o carpeta de evidencias", nota: "Pendiente de agregar repositorio o carpeta de evidencias." }
    },
    {
      id: "vacantes",
      numero: "03",
      nombre: "Sistema de gestión de vacantes",
      subtitulo: "Aplicación académica con Java y MySQL",
      categoria: "Programación y bases de datos",
      grupo: "software",
      resumen: "Aplicación para gestionar información de empleadores, aspirantes y vacantes de trabajo, con registros almacenados en una base de datos MySQL.",
      descripcion: [
        "Este proyecto académico consistió en desarrollar una aplicación para gestionar información relacionada con empleadores, aspirantes y vacantes de trabajo. Su propósito fue organizar los datos y permitir que la aplicación trabajara con registros almacenados en una base de datos.",
        "Se utilizó Java para la programación y MySQL para almacenar y administrar la información. El trabajo permitió aplicar conocimientos de programación orientada a objetos, organización de clases, conexión con bases de datos y manejo de información desde una aplicación. También se trabajó con interfaces y componentes de Java, entre ellos elementos de tipo JTable para presentar registros."
      ],
      objetivo: "Organizar los datos de empleadores, aspirantes y vacantes, y permitir que la aplicación trabajara con registros almacenados en una base de datos.",
      tecnologias: ["Java", "Eclipse", "MySQL", "JTable", "Programación orientada a objetos"],
      participacion: "Desarrollo de clases y funcionalidades de la aplicación, además del trabajo de conexión y consulta de la base de datos.",
      estadoEtiqueta: "Proyecto académico",
      estado: "Proyecto académico desarrollado con Java, Eclipse y MySQL. La documentación y las evidencias de su funcionamiento se integrarán en el apartado correspondiente.",
      evidencias: [
        "Capturas de las interfaces.",
        "Diagrama de la base de datos.",
        "Código fuente.",
        "Ejemplos de registros y consultas.",
        "Capturas de la conexión entre Java y MySQL."
      ],
      aprendizaje: "Organizar los datos para que la aplicación pudiera consultarlos y mostrarlos correctamente; relacionar la lógica programada con la información almacenada.",
      enlace: { disponible: false, url: "", texto: "Repositorio o carpeta de evidencias", nota: "Pendiente de agregar repositorio o carpeta de evidencias." }
    },
    {
      id: "hospitalario",
      numero: "04",
      nombre: "Sistema web para entorno hospitalario",
      subtitulo: "Backend académico con Python y FastAPI",
      categoria: "Desarrollo backend y servicios web",
      grupo: "web",
      resumen: "Proyecto académico enfocado en la construcción de un sistema web para un entorno hospitalario, con definición de rutas y procesamiento de solicitudes.",
      descripcion: [
        "Proyecto académico desarrollado con Python y FastAPI, enfocado en la construcción de un sistema web para un entorno hospitalario. El trabajo permitió practicar la organización de una aplicación backend, la definición de rutas y el procesamiento de solicitudes.",
        "Durante el desarrollo también se trabajó con el entorno de ejecución de Python y Uvicorn para levantar la aplicación localmente. Una de las dificultades técnicas abordadas fue la configuración correcta de la ejecución y la ubicación desde la que se importa el módulo principal. Esto permitió reconocer que, además del código, la estructura del proyecto y el directorio de trabajo influyen en el funcionamiento de un servicio web."
      ],
      objetivo: "Construir un sistema web para un entorno hospitalario, practicando la organización del backend, la definición de rutas y el procesamiento de solicitudes.",
      tecnologias: ["Python", "FastAPI", "Uvicorn", "Visual Studio Code"],
      participacion: "Desarrollo académico de la aplicación backend y revisión de la estructura de ejecución.",
      estadoEtiqueta: "Proyecto académico",
      estado: "Proyecto académico de backend. La documentación de rutas, las pruebas realizadas y las capturas de ejecución se integrarán como evidencias.",
      evidencias: [
        "Capturas del sistema.",
        "Código fuente.",
        "Ejemplos de endpoints.",
        "Documentación de rutas y funcionalidades.",
        "Pruebas realizadas y capturas de ejecución."
      ],
      aprendizaje: "La configuración de la ejecución y la ubicación desde la que se importa el módulo principal influyen en el funcionamiento de un servicio web, además del código.",
      enlace: { disponible: false, url: "", texto: "Repositorio o carpeta de evidencias", nota: "Pendiente de agregar repositorio o carpeta de evidencias." }
    },
    {
      id: "loteria",
      numero: "05",
      nombre: "Lotería Mazahua RFID",
      subtitulo: "Plataforma educativa interactiva",
      categoria: "Desarrollo web, bases de datos, IoT y tecnología educativa",
      grupo: "web",
      resumen: "Propuesta de plataforma educativa que relaciona tarjetas físicas con contenido digital para apoyar el aprendizaje de palabras en español y mazahua.",
      descripcion: [
        "Lotería Mazahua RFID es una propuesta de plataforma educativa que busca relacionar tarjetas físicas con contenido digital para apoyar el aprendizaje de palabras en español y mazahua. La dinámica contempla identificar una tarjeta mediante RFID y mostrar en una página web la palabra correspondiente, su imagen y, cuando esté disponible, su audio.",
        "La arquitectura que he trabajado contempla un ESP32 conectado a un lector RFID RC522. Cuando se identifica una tarjeta, el dispositivo envía su identificador mediante una solicitud HTTP con datos JSON a una aplicación desarrollada con FastAPI. La aplicación consulta una base de datos MySQL llamada loteria_mazahua, donde se contempla una tabla targetas_rfid con campos como identificador, código de tarjeta, palabra en español, palabra en mazahua, audio e imagen.",
        "Mi trabajo ha incluido la definición de la estructura de datos, la revisión del modelo entidad-relación y relacional, la configuración de conexiones del lector RC522 y la planeación de la comunicación entre hardware, backend y página web. También he trabajado en la idea de una carcasa física para integrar los componentes."
      ],
      objetivo: "Relacionar tarjetas físicas con contenido digital para apoyar el aprendizaje de palabras en español y mazahua.",
      tecnologias: ["ESP32", "RC522", "RFID", "Python", "FastAPI", "MySQL", "HTML", "CSS", "JavaScript", "HTTP", "JSON"],
      participacion: "Diseño de la estructura de datos, modelado de la base de datos, integración planeada del lector RFID y desarrollo de la arquitectura web.",
      estadoEtiqueta: "En desarrollo",
      estado: "Proyecto en desarrollo. La descripción presenta la arquitectura y los elementos trabajados; la integración completa debe respaldarse con pruebas del recorrido tarjeta–ESP32–API–base de datos–interfaz.",
      evidencias: [
        "Modelo entidad-relación y modelo relacional.",
        "Estructura de la base de datos.",
        "Código del backend y de la interfaz.",
        "Diagrama de conexiones ESP32–RC522.",
        "Fotografías del prototipo y de la carcasa.",
        "Video de lectura de tarjeta y visualización del contenido, cuando la integración esté probada."
      ],
      enlace: { disponible: false, url: "", texto: "Repositorio o carpeta de evidencias", nota: "Pendiente de agregar repositorio o carpeta de evidencias." }
    },
    {
      id: "logistica",
      numero: "06",
      nombre: "Sistema de gestión logística",
      subtitulo: "Diseño de base de datos para una cervecería",
      categoria: "Bases de datos y análisis de sistemas",
      grupo: "datos",
      resumen: "Diseño académico de una base de datos para estructurar la información de un sistema de gestión logística de una cervecería.",
      descripcion: [
        "Como parte de mi trabajo académico reciente, he planteado el diseño de una base de datos para un sistema de gestión logística de una cervecería. El objetivo es estructurar la información que necesita un sistema de este tipo y definir tablas y relaciones que permitan organizar sus operaciones.",
        "El trabajo se ha enfocado en analizar los registros que requiere el sistema y solicitar una estructura SQL completa para implementarla en MySQL Workbench. Esta etapa permite practicar el análisis de requerimientos, la identificación de entidades, la definición de atributos y relaciones, y la construcción de una base de datos relacional."
      ],
      objetivo: "Estructurar la información que necesita un sistema de gestión logística y definir tablas y relaciones que permitan organizar sus operaciones.",
      tecnologias: ["MySQL", "MySQL Workbench"],
      participacion: "Análisis inicial de los requerimientos y diseño académico de la estructura de datos.",
      estadoEtiqueta: "Diseño en elaboración",
      estado: "Diseño en elaboración. No se presenta como un sistema logístico terminado ni como una aplicación desplegada.",
      evidencias: [
        "Diagrama entidad-relación.",
        "Modelo relacional.",
        "Script SQL de creación de la base de datos y sus tablas.",
        "Capturas de implementación en MySQL Workbench.",
        "Consultas de prueba."
      ],
      enlace: { disponible: false, url: "", texto: "Archivo SQL o repositorio", nota: "Pendiente de agregar el archivo SQL o repositorio cuando el diseño esté validado." }
    }
  ],

  actividades: {
    personales: [
      {
        id: "act-01",
        numero: "01",
        titulo: "Liderazgo y trabajo en equipo",
        producto: "Tablero Kanban y minuta digital de equipo.",
        contexto: [
          "Mi participación en Venados Robotics me ha permitido conocer la importancia del trabajo en equipo dentro de un proyecto tecnológico. En el desarrollo de VENATRIX fue necesario coordinar actividades relacionadas con la construcción, programación, electrónica y pruebas del robot. También he tenido responsabilidades de organización y acompañamiento dentro del equipo, por lo que he aprendido que liderar no significa hacer todo, sino ayudar a distribuir tareas, dar seguimiento y mantener al equipo enfocado.",
          "En el trabajo de robótica he convivido con integrantes que tienen diferentes conocimientos y ritmos de aprendizaje. Esto hace necesario explicar las actividades con claridad, escuchar propuestas y revisar los avances. El tablero Kanban y la minuta permiten convertir esa coordinación en un registro que se pueda consultar."
        ],
        fecha: "Actividad vinculada con el trabajo de equipo y la preparación de proyectos de Venados Robotics; fecha exacta de elaboración del tablero y la minuta pendiente de confirmar.",
        evidencia: "Fotografías del equipo y de las sesiones de trabajo. El tablero Kanban y la minuta digital deben adjuntarse como productos verificables.",
        enlace: "Pendiente de incorporar el enlace al tablero y el archivo final de la minuta.",
        reflexion: "Participar en Venados Robotics me ha enseñado que desarrollar un proyecto tecnológico no depende únicamente de saber programar o conectar componentes. También necesito escuchar, explicar mis ideas y ayudar a organizar el trabajo para que cada integrante tenga claro qué debe hacer. En VENATRIX he visto que una tarea pequeña puede afectar el funcionamiento de todo el robot y que dejar pendientes sin seguimiento termina complicando al equipo. También he aprendido que liderar no significa tener siempre la razón, sino mantener la comunicación, reconocer el trabajo de los demás y buscar soluciones cuando algo falla. Quiero seguir mejorando mi manera de coordinar actividades y lograr que el equipo avance sin perder de vista el objetivo común."
      },
      {
        id: "act-02",
        numero: "02",
        titulo: "Creatividad",
        producto: "Mapa mental y propuesta de diseño digital.",
        contexto: [
          "La creatividad ha estado presente en el desarrollo de mis proyectos, especialmente en la identidad visual de VENATRIX y en la propuesta de VENATRIX APP. Además de trabajar en aspectos técnicos, he tenido que pensar en cómo presentar un proyecto, qué elementos visuales lo representan y cómo organizar una interfaz para que sus funciones se entiendan con facilidad.",
          "También he trabajado en propuestas de diseño para proyectos académicos y en la idea de una carcasa física para el sistema Lotería Mazahua RFID. Estas experiencias muestran que la creatividad no se limita a la apariencia: también ayuda a imaginar distintas formas de integrar componentes, presentar información y hacer que una solución sea más clara para quien la utiliza."
        ],
        fecha: "Relacionada con el desarrollo y diseño de VENATRIX, VENATRIX APP y propuestas académicas; fechas específicas del mapa mental y de la propuesta que se entregará pendientes de confirmar.",
        evidencia: "Existen trabajos y propuestas de identidad visual e interfaz asociados a los proyectos. Falta seleccionar y adjuntar el mapa mental y la versión final de la propuesta digital que correspondan a esta actividad.",
        enlace: "Pendiente de incorporar una carpeta con bocetos, logotipo, diseños de interfaz y mapa mental.",
        reflexion: "Para mí, la creatividad también forma parte de la Ingeniería Informática, porque no basta con conseguir que algo funcione: hay que pensar cómo resolver una necesidad y cómo presentar esa solución. En proyectos como VENATRIX y VENATRIX APP he podido combinar ideas técnicas con decisiones de diseño, desde la identidad del robot hasta la organización de los controles de una aplicación. También he pensado en la forma física de integrar los componentes de Lotería Mazahua RFID. Estas experiencias me han enseñado que una primera propuesta puede cambiar después de probarla y recibir observaciones. Quiero seguir desarrollando esta habilidad para crear proyectos que sean funcionales, claros y que tengan una identidad propia."
      }
    ],

    aprendizaje: [
      {
        id: "act-03",
        numero: "03",
        titulo: "Aprendizaje basado en proyectos",
        producto: "Ficha técnica y prototipo de proyecto tecnológico.",
        contexto: [
          "El desarrollo de VENATRIX representa una experiencia de aprendizaje basado en proyectos porque he tenido que integrar conocimientos de diferentes áreas para construir y probar un robot minisumo autónomo. El trabajo involucra programación, electrónica, sensores, motores, microcontroladores y diseño físico del prototipo.",
          "Mi participación en Venados Robotics me ha permitido aplicar conocimientos del aula en un proyecto que requiere tomar decisiones, distribuir actividades y comprobar resultados mediante pruebas. Para que el robot responda de manera adecuada, es necesario relacionar las lecturas de los sensores con las instrucciones del programa y con el movimiento que producen los motores.",
          "Esta experiencia también se relaciona con la participación del equipo en encuentros y competencias. En INOVATEC 2026, realizado en Irapuato, el proyecto presentado fue VENATRIX."
        ],
        fecha: "Proceso de desarrollo de VENATRIX y preparación para INOVATEC 2026; las fechas exactas de inicio y de elaboración de la ficha técnica están pendientes de confirmar.",
        evidencia: "Fotografías del robot, diagrama electrónico, código y documentación técnica. La ficha técnica final debe adjuntarse como producto de esta actividad.",
        enlace: "Pendiente de agregar el enlace a la documentación de VENATRIX y a la ficha técnica.",
        reflexion: "El desarrollo de VENATRIX me ha permitido comprobar que los conocimientos de la carrera se relacionan entre sí cuando se trabaja en un proyecto real. No puedo pensar únicamente en el código, porque las conexiones, los sensores y los motores también influyen en el comportamiento del robot. Durante el proceso he tenido que investigar componentes, probar configuraciones y revisar qué sucede cuando el prototipo no responde como esperaba. Aprendí que un proyecto no se termina con una primera versión: necesita pruebas, ajustes y comunicación entre quienes participan. Esta experiencia fortaleció mi interés por la robótica y me ayudó a aprender de una manera más práctica, relacionando la teoría con decisiones y resultados que puedo observar."
      },
      {
        id: "act-04",
        numero: "04",
        titulo: "Aprendizaje basado en problemas y TIC",
        producto: "Árbol de problemas y reporte técnico de diagnóstico.",
        contexto: [
          "Durante el desarrollo y las pruebas de VENATRIX han surgido dificultades relacionadas con la lectura de los sensores Sharp, el control de los motores y la comunicación con el microcontrolador ESP32-C3. Para analizarlas he tenido que revisar conexiones, consultar información técnica, observar datos mediante el monitor serial y modificar partes del código.",
          "También he trabajado con herramientas de desarrollo y diagnóstico en otros proyectos. Por ejemplo, al ejecutar aplicaciones con Python y FastAPI fue necesario revisar la estructura de archivos y el directorio desde el que se iniciaba Uvicorn. En proyectos con MySQL he tenido que analizar la estructura de las tablas y la conexión entre la aplicación y la base de datos. Estas experiencias me han mostrado que las TIC sirven tanto para construir soluciones como para investigar y diagnosticar fallas."
        ],
        fecha: "Periodo de desarrollo y pruebas de VENATRIX y de los proyectos de software; las fechas exactas del diagnóstico y del reporte están pendientes de confirmar.",
        evidencia: "Capturas del monitor serial, fotografías de conexiones, registros de sensores y versiones del código. Para completar el producto de esta actividad falta elaborar o seleccionar el árbol de problemas y reunir el diagnóstico técnico en un reporte.",
        enlace: "Pendiente de agregar el reporte técnico y el árbol de problemas.",
        reflexion: "Una de las cosas que más he aprendido al trabajar con software y hardware es que un programa puede parecer correcto y aun así no producir el resultado esperado cuando se conecta con los componentes físicos. En VENATRIX he tenido que revisar lecturas de sensores, conexiones y respuestas de los motores; en otros proyectos también he encontrado dificultades relacionadas con la ejecución del código o la conexión con bases de datos. He aprendido a investigar antes de cambiar todo, revisar los datos disponibles y probar una modificación a la vez. Las herramientas digitales me ayudan a encontrar información y observar qué está ocurriendo. Quiero conservar ese método de trabajo: analizar el problema, comprobar posibles causas y documentar la solución."
      }
    ],

    identidad: [
      {
        id: "act-05",
        numero: "05",
        titulo: "Plan de carrera",
        producto: "Ruta profesional y mapa de habilidades.",
        contexto: [
          "Como estudiante de Ingeniería Informática, me interesa continuar aprendiendo sobre desarrollo de software, bases de datos, robótica, electrónica y tecnologías emergentes. Mi formación como Técnico en Programación y la certificación ECO160 me dieron una base para continuar desarrollando habilidades técnicas. Después, los proyectos académicos y mi participación en Venados Robotics me han permitido identificar áreas que quiero seguir explorando.",
          "No quiero limitar mi perfil a una sola herramienta. Me interesa comprender cómo se construyen soluciones completas: analizar una necesidad, diseñar una estructura, programar, integrar componentes, probar y mejorar. Por eso mi plan de carrera contempla fortalecer tanto el desarrollo de software como los conocimientos que conectan los sistemas digitales con dispositivos físicos."
        ],
        fecha: "Elaboración del plan pendiente de registrar. Los objetivos se plantean desde mi etapa actual de formación universitaria.",
        evidencia: "Esta sección contiene mis objetivos profesionales. Para completar el producto visual falta elaborar la línea de tiempo o ruta profesional y el mapa de habilidades.",
        enlace: "Pendiente de agregar la ruta profesional y el mapa de habilidades.",
        objetivos: [
          {
            plazo: "A corto plazo",
            periodo: "1 año",
            items: [
              "Fortalecer mis conocimientos de programación y buenas prácticas de desarrollo.",
              "Mejorar mis habilidades de desarrollo web y aplicaciones.",
              "Continuar aprendiendo sobre robótica, electrónica y sistemas embebidos.",
              "Documentar y publicar evidencias verificables de mis proyectos.",
              "Mejorar mi manejo de bases de datos y herramientas de desarrollo."
            ]
          },
          {
            plazo: "A mediano plazo",
            periodo: "3 años",
            items: [
              "Avanzar y concluir mi formación universitaria.",
              "Realizar prácticas profesionales en un área relacionada con tecnología.",
              "Participar en proyectos de desarrollo de software o robótica.",
              "Mejorar mi experiencia trabajando en equipos de desarrollo.",
              "Construir un perfil técnico con proyectos documentados y experiencia práctica."
            ]
          },
          {
            plazo: "A largo plazo",
            periodo: "5 años",
            items: [
              "Desempeñarme profesionalmente en el área de Ingeniería Informática.",
              "Participar en el desarrollo de soluciones tecnológicas útiles.",
              "Especializarme en un área que combine mis intereses y habilidades.",
              "Continuar actualizándome y aprendiendo nuevas tecnologías.",
              "Tener la capacidad de participar en proyectos desde el análisis hasta su implementación."
            ]
          }
        ],
        reflexion: "Al revisar mi trayectoria académica y los proyectos en los que he participado, he identificado que me interesan especialmente la programación, las bases de datos, el desarrollo de aplicaciones y la robótica. También reconozco que todavía estoy en formación y que necesito seguir practicando para fortalecer mis conocimientos. Mi experiencia en Venados Robotics me ha mostrado que disfruto trabajar en proyectos donde se combinan distintas áreas, mientras que los sistemas desarrollados con Java, Python y MySQL me han permitido explorar el desarrollo de software. Quiero terminar mi carrera, adquirir experiencia mediante proyectos y prácticas profesionales, y construir un perfil que refleje lo que sé hacer. Tener objetivos definidos me ayudará a organizar mi aprendizaje y aprovechar mejor las oportunidades."
      },
      {
        id: "act-06",
        numero: "06",
        titulo: "Identidad profesional, protocolo y etiqueta",
        producto: "Video de presentación profesional y correo formal simulado.",
        contexto: [
          "Como futura ingeniera informática, considero importante aprender a presentar mis conocimientos y proyectos de una manera clara y profesional. Mi participación en proyectos académicos y en Venados Robotics me ha permitido comenzar a construir una identidad relacionada con la tecnología, la programación y la resolución de problemas.",
          "También he comprendido que la identidad profesional se construye con evidencias: explicar cuál fue mi participación, qué herramientas utilicé, qué problema abordé y qué aprendí. Por eso es importante que mi currículum, mi portafolio, mis correos y la manera en que presento mis proyectos mantengan información coherente y verificable."
        ],
        fecha: "Fecha de grabación y elaboración del correo simulado pendientes de registrar.",
        evidencia: "El guion de presentación y el ejemplo de correo están redactados en esta sección. Falta grabar el video de 1 a 2 minutos y guardar una captura o copia del correo formal simulado.",
        enlace: "Pendiente de agregar el video y el archivo o captura del correo.",
        guion: [
          "Hola, mi nombre es Aylin M. y soy estudiante de Ingeniería Informática en el Tecnológico de Estudios Superiores de San Felipe del Progreso. Cuento con formación previa como Técnico en Programación y con la certificación ECO160 en Desarrollo de Código de Software.",
          "Me interesan el desarrollo de software, las bases de datos, la electrónica y la robótica. He participado en proyectos académicos como VENATRIX, un robot minisumo autónomo de Venados Robotics, donde he trabajado principalmente en programación y electrónica. También he desarrollado propuestas de aplicaciones y sistemas utilizando Java, Python, MySQL, FastAPI y tecnologías web.",
          "Me considero una persona que disfruta aprender, experimentar y analizar problemas técnicos. Mi objetivo es seguir fortaleciendo mis habilidades y participar en proyectos que me permitan crecer profesionalmente dentro del área tecnológica."
        ],
        correo: {
          asunto: "Presentación de perfil académico y proyectos tecnológicos",
          saludo: "Estimado equipo:",
          parrafos: [
            "Mi nombre es Aylin M. y actualmente estudio Ingeniería Informática en el Tecnológico de Estudios Superiores de San Felipe del Progreso. Cuento con formación previa como Técnico en Programación y con la certificación ECO160 en Desarrollo de Código de Software.",
            "Me interesa participar en actividades y proyectos relacionados con el desarrollo de software, las bases de datos, la robótica y las tecnologías de la información. Durante mi formación he trabajado en proyectos académicos que me han permitido aplicar conocimientos de programación, electrónica y desarrollo de aplicaciones.",
            "Agradezco su atención y la oportunidad de compartir mi perfil. Quedo atenta a cualquier información adicional que consideren necesaria."
          ],
          despedida: "Saludos cordiales,",
          firma: ["Aylin M.", "Estudiante de Ingeniería Informática", "catuloaylin209@gmail.com"]
        },
        reflexion: "Esta actividad me permite reconocer que mi formación profesional no depende únicamente de los conocimientos técnicos que adquiera durante la carrera. También necesito aprender a comunicar mis ideas, explicar mis proyectos y presentar mis habilidades de manera clara. A veces podemos realizar un buen trabajo, pero si no sabemos explicar qué hicimos o cuál fue nuestra participación, otras personas pueden no comprender su importancia. Por eso considero necesario aprender a elaborar un currículum, presentarme formalmente y mantener una comunicación adecuada. Quiero mejorar mi seguridad al hablar sobre mis proyectos y expresar mis conocimientos sin exagerar mis capacidades. Mi objetivo es construir una identidad profesional que represente realmente mi trabajo, mi preparación y mis intereses."
      }
    ]
  },

  venados: {
    parrafos: [
      "Venados Robotics es el equipo de robótica en el que he tenido la oportunidad de colaborar y desarrollar habilidades relacionadas con la ingeniería y la tecnología.",
      "Mi participación en el equipo me ha permitido involucrarme en proyectos de robótica, especialmente en las categorías de minisumo y en el desarrollo de prototipos. En el trabajo del equipo he participado en tareas relacionadas con programación, electrónica, integración de componentes, pruebas, desarrollo de software, ensamble de hardware y modelado del chasis de los robots.",
      "Una parte importante de esta experiencia ha sido el desarrollo de VENATRIX. En este proyecto he trabajado con sensores, motores, microcontroladores y código para lograr el comportamiento esperado del robot. También he participado en el desarrollo de VENATRIX APP como propuesta de control y monitoreo mediante BLE.",
      "A través de estas actividades he aprendido que la robótica requiere colaboración entre distintas áreas. El diseño físico, las conexiones, la programación y las pruebas deben funcionar en conjunto. También he fortalecido mi capacidad para explicar avances, compartir ideas y apoyar la organización del equipo."
    ],
    responsabilidades: {
      texto: "En las competencias he colaborado en el desarrollo de software, el ensamble de hardware y el modelado del chasis de los robots. También he trabajado con componentes electrónicos, microcontroladores, sensores y motores, participando en diferentes etapas de construcción e integración de los prototipos. Esta experiencia me ha permitido aplicar conocimientos de programación y electrónica en proyectos prácticos, además de fortalecer mis habilidades para trabajar en equipo y resolver problemas técnicos.",
      areas: [
        "Desarrollo de software",
        "Ensamble de hardware",
        "Modelado de chasis",
        "Componentes electrónicos",
        "Microcontroladores",
        "Sensores y motores",
        "Integración de prototipos",
        "Trabajo en equipo"
      ]
    },
    competencias: [
      {
        nombre: "CRYDTEM 2025",
        detalle: "Participación del equipo; se ha reportado un segundo lugar.",
        nota: "Resultado reportado en la trayectoria compartida."
      },
      {
        nombre: "MECAFLOW 2025",
        detalle: "Participación en actividades de robótica.",
        nota: ""
      },
      {
        nombre: "RoboMatrix Oaxaca 2026",
        detalle: "Participación del equipo. Colaboración en desarrollo de software, ensamble de hardware y modelado del chasis; experiencia como piloto de robot de radiocontrol.",
        nota: ""
      },
      {
        nombre: "RoboMatrix Puebla 2026",
        detalle: "Participación del equipo.",
        nota: ""
      },
      {
        nombre: "INOVATEC 2026 · Irapuato",
        detalle: "Presentación del proyecto VENATRIX.",
        nota: "VENATRIX corresponde al proyecto de minisumo autónomo."
      }
    ],
    aclaracion: "La mayoría de las participaciones competitivas del equipo han estado relacionadas con categorías de Sumo RC. VENATRIX corresponde al proyecto de minisumo autónomo que se presentó en INOVATEC 2026; por eso no se deben mezclar las modalidades al describir cada participación.",
    galeria: [
      "Fotografía del equipo Venados Robotics",
      "Fotografía de VENATRIX",
      "Participación en CRYDTEM 2025",
      "Participación en MECAFLOW 2025",
      "RoboMatrix Oaxaca 2026",
      "RoboMatrix Puebla 2026",
      "INOVATEC 2026 en Irapuato",
      "Proceso de desarrollo y pruebas"
    ],
    notaGaleria: "Las fotografías se integrarán en este espacio. No se utilizan imágenes de otras personas ni evidencia que no haya sido proporcionada.",
    enlaces: "No se han compartido enlaces públicos confirmados para estas evidencias."
  },

  aprendizajeContinuo: {
    parrafos: [
      "Considero que estudiar Ingeniería Informática significa estar en constante aprendizaje. Las tecnologías cambian, aparecen nuevas herramientas y cada proyecto presenta problemas diferentes. Mi experiencia me ha enseñado que aprender no consiste solamente en conocer la sintaxis de un lenguaje, sino en comprender cómo utilizarlo, investigar cuando algo falla y comprobar que una solución realmente funciona.",
      "Este portafolio representa una parte de mi proceso de formación. No solamente reúne proyectos, sino también las habilidades que he desarrollado, las dificultades que he enfrentado y los objetivos que quiero alcanzar. Quiero mantenerlo actualizado para que muestre mi avance real y no solamente una lista de tecnologías."
    ],
    areas: [
      "Desarrollo de software y buenas prácticas de programación.",
      "Desarrollo web y aplicaciones móviles.",
      "Inteligencia artificial.",
      "Robótica y sistemas autónomos.",
      "Electrónica y sistemas embebidos.",
      "Bases de datos y diseño de sistemas.",
      "Redes y tecnologías de la información.",
      "Ciberseguridad."
    ],
    nota: "Estas áreas representan intereses y objetivos de aprendizaje, no especializaciones concluidas."
  },

  contacto: {
    titulo: "¿Te interesa conocer alguno de mis proyectos o colaborar en una propuesta tecnológica?",
    mensaje: "Me gustaría seguir aprendiendo, compartir conocimientos y participar en nuevos proyectos relacionados con la informática y la tecnología.",
    canales: [
      { tipo: "Correo electrónico", valor: "catuloaylin209@gmail.com", url: "mailto:catuloaylin209@gmail.com", pendiente: false }
    ],
    nota: "Puedes escribirme directamente al correo electrónico. No se publican datos adicionales de contacto.",
    cierre: "Gracias por visitar mi portafolio."
  }
};
