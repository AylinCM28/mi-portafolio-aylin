/* ============================================================
   LÓGICA DEL PORTAFOLIO
   Renderiza el contenido definido en js/datos.js y controla
   navegación, animaciones, filtros, modal y menú móvil.
   ============================================================ */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const D = window.PORTAFOLIO;
  if (!D) return;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const ICONOS = {
    flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    descarga: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    correo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    imagen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 18 5.5-5.5 3 3L17 11l3 3"/></svg>',
    enlace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l2-2a5 5 0 0 0-7.07-7.07l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.07 0l-2 2a5 5 0 0 0 7.07 7.07l1.1-1.1"/></svg>'
  };

  /* ---------- Navegación ---------- */
  function renderNavegacion() {
    const html = D.navegacion.map((item, i) =>
      `<li><a href="#${item.id}" data-nav="${item.id}"${i === 0 ? ' aria-current="true"' : ""}>${item.etiqueta}</a></li>`
    ).join("");
    $("#nav-escritorio").innerHTML = html;
    $("#nav-movil").innerHTML = D.navegacion.map(item =>
      `<li><a href="#${item.id}" data-nav="${item.id}">${item.etiqueta}<span aria-hidden="true">${ICONOS.flecha}</span></a></li>`
    ).join("");
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    const hero = D.hero;
    $("#hero-contenido").innerHTML = `
      <div class="hero__grid">
        <div class="hero__texto">
          <p class="hero__etiqueta" data-reveal><span class="punto"></span>${hero.etiqueta}</p>
          <h1 class="hero__titulo" id="hero-titulo" data-reveal>
            Aylin Mariana<br><span class="texto-degradado">Castulo Marin</span>
          </h1>
          <p class="hero__frase" data-reveal>${D.perfil.frase}</p>
          <p class="hero__descripcion" data-reveal>${D.perfil.descripcion}</p>
          <div class="hero__acciones" data-reveal>
            <a class="boton boton--primario" href="#cv">Ver mi CV ${ICONOS.flecha}</a>
            <a class="boton boton--secundario" href="#proyectos">Explorar mis proyectos</a>
            <a class="hero__contacto" href="#contacto">Contactarme <span aria-hidden="true">→</span></a>
          </div>
          <dl class="hero__stats" data-reveal>
            ${hero.estadisticas.map(s => `
              <div class="hero__stat">
                <dt>${s.etiqueta}</dt>
                <dd>${s.valor}</dd>
              </div>`).join("")}
          </dl>
        </div>

        <div class="hero__visual" aria-hidden="true" data-reveal>
          <div class="orbita">
            <svg class="orbita__svg" viewBox="0 0 560 560" role="presentation">
              <defs>
                <linearGradient id="gradMorado" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#9B4DFF"/>
                  <stop offset="100%" stop-color="#7200FF"/>
                </linearGradient>
                <radialGradient id="haloMorado" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#9B4DFF" stop-opacity=".35"/>
                  <stop offset="100%" stop-color="#9B4DFF" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="280" cy="280" r="240" fill="url(#haloMorado)"/>
              <circle class="orbita__anillo" cx="280" cy="280" r="216"/>
              <circle class="orbita__anillo orbita__anillo--punteado" cx="280" cy="280" r="168"/>
              <g class="orbita__trazos">
                <path d="M280 64v70M280 426v70M64 280h70M426 280h70"/>
                <path d="M127 127l49 49M384 384l49 49M433 127l-49 49M176 384l-49 49"/>
              </g>
              <g class="orbita__trazos orbita__trazos--tenue">
                <path d="M280 118h120l32 32v60"/>
                <path d="M280 442H160l-32-32v-60"/>
                <path d="M118 280v-70l40-40h82"/>
                <path d="M442 280v70l-40 40h-82"/>
              </g>
              <g class="orbita__nodos">
                <circle cx="432" cy="210" r="5"/>
                <circle cx="128" cy="350" r="5"/>
                <circle cx="350" cy="442" r="5"/>
                <circle cx="210" cy="118" r="5"/>
                <circle cx="280" cy="64" r="3.5"/>
                <circle cx="496" cy="280" r="3.5"/>
              </g>
              <rect class="orbita__nucleo" x="196" y="196" width="168" height="168" rx="34"/>
              <rect class="orbita__nucleo-borde" x="196" y="196" width="168" height="168" rx="34"/>
              <text class="orbita__monograma" x="280" y="298" text-anchor="middle">AM</text>
              <text class="orbita__codigo" x="280" y="330" text-anchor="middle">&lt;ingeniería /&gt;</text>
            </svg>
            <span class="chip-flotante chip-flotante--1">ESP32-C3</span>
            <span class="chip-flotante chip-flotante--2">Java</span>
            <span class="chip-flotante chip-flotante--3">FastAPI</span>
            <span class="chip-flotante chip-flotante--4">MySQL</span>
          </div>
        </div>
      </div>

      <div class="tira" data-reveal>
        <div class="tira__pista">
          ${[...hero.tiraTecnologias, ...hero.tiraTecnologias].map(t => `<span>${t}</span>`).join("")}
        </div>
      </div>
    `;
  }

  /* ---------- Helper de encabezado ---------- */
  function encabezado(numero, etiqueta, titulo, idTitulo, intro) {
    return `
      <div class="seccion__encabezado" data-reveal>
        <p class="etiqueta"><span>${numero}</span> / ${etiqueta}</p>
        <h2 class="seccion__titulo" id="${idTitulo}">${titulo}</h2>
        ${intro ? `<p class="seccion__intro">${intro}</p>` : ""}
      </div>`;
  }

  /* ---------- Sobre mí ---------- */
  function renderSobreMi() {
    const s = D.sobreMi;
    $("#sobre-mi-contenido").innerHTML = `
      ${encabezado("01", "Sobre mí", "Perfil y motivaciones", "sobre-mi-titulo")}
      <div class="sobre__grid">
        <div class="sobre__texto" data-reveal>
          ${s.parrafos.map(p => `<p>${p}</p>`).join("")}
          <blockquote class="objetivo">
            <span class="objetivo__etiqueta">Mi objetivo</span>
            <p>${s.objetivo}</p>
          </blockquote>
        </div>
        <aside class="sobre__lateral" aria-label="Datos breves">
          ${s.tarjetas.map(t => `
            <article class="mini-tarjeta" data-reveal>
              <span class="mini-tarjeta__marca" aria-hidden="true"></span>
              <h3>${t.titulo}</h3>
              <p>${t.texto}</p>
            </article>`).join("")}
          <div class="ficha" data-reveal>
            <h3>En contexto</h3>
            <dl>
              <div><dt>Institución</dt><dd>${D.perfil.institucion}</dd></div>
              <div><dt>Carrera</dt><dd>Ingeniería Informática</dd></div>
              <div><dt>Semestre</dt><dd>${D.perfil.semestre}</dd></div>
              <div><dt>Inicio</dt><dd>${D.perfil.inicioCarrera}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    `;
  }

  /* ---------- Formación ---------- */
  function renderFormacion() {
    const f = D.formacion;
    $("#formacion-contenido").innerHTML = `
      ${encabezado("02", "Formación", "Trayectoria académica", "formacion-titulo", "Mi formación combina la carrera de Ingeniería Informática con una base técnica previa y certificaciones relacionadas con el desarrollo de software.")}
      <div class="formacion__grid">
        <div class="linea-tiempo">
          ${f.linea.map(item => `
            <article class="linea__item${item.pendiente ? " linea__item--pendiente" : ""}" data-reveal>
              <span class="linea__marcador" aria-hidden="true"></span>
              <div class="linea__tarjeta">
                <div class="linea__meta">
                  <span class="chip ${item.pendiente ? "chip--pendiente" : "chip--activo"}">${item.estado}</span>
                  <span class="linea__periodo">${item.periodo}</span>
                </div>
                <h3>${item.titulo}</h3>
                <p class="linea__institucion">${item.institucion}</p>
                <p>${item.detalle}</p>
              </div>
            </article>`).join("")}
        </div>

        <aside class="formacion__lateral">
          <div class="panel" data-reveal>
            <h3 class="panel__titulo">Formación complementaria</h3>
            <ul class="lista-puntos">
              ${f.complementaria.map(c => `<li>${c}</li>`).join("")}
            </ul>
          </div>
          ${f.pendiente ? `
          <div class="pendiente-caja" data-reveal>
            <span class="pendiente-caja__etiqueta">Dato pendiente de completar</span>
            <p>${f.pendiente}</p>
          </div>` : ""}
        </aside>
      </div>
    `;
  }

  /* ---------- Habilidades ---------- */
  function renderHabilidades() {
    const h = D.habilidades;
    $("#habilidades-contenido").innerHTML = `
      ${encabezado("03", "Habilidades", "Conocimientos y herramientas", "habilidades-titulo", "Competencias desarrolladas en proyectos académicos y de robótica. La lista muestra herramientas utilizadas, no niveles de dominio.")}
      <div class="habilidades__grid">
        ${h.tecnicas.map((t, i) => `
          <article class="habilidad" data-reveal>
            <span class="habilidad__num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
            <h3>${t.titulo}</h3>
            <p>${t.texto}</p>
          </article>`).join("")}
      </div>

      <div class="habilidades__paneles">
        <div class="panel panel--herramientas" data-reveal>
          <h3 class="panel__titulo">Herramientas y tecnologías</h3>
          <ul class="etiquetas" aria-label="Herramientas y tecnologías utilizadas">
            ${h.herramientas.map(t => `<li>${t}</li>`).join("")}
          </ul>
          <p class="nota">${h.nota}</p>
        </div>
        <div class="panel" data-reveal>
          <h3 class="panel__titulo">Habilidades personales</h3>
          <ul class="lista-check">
            ${h.personales.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  /* ---------- CV ---------- */
  function renderCV() {
    const c = D.cv;
    const botonCV = c.descarga.disponible && c.descarga.archivo
      ? `<a class="boton boton--primario" href="${c.descarga.archivo}" download>${ICONOS.descarga} ${c.descarga.texto}</a>`
      : `<button class="boton boton--primario boton--deshabilitado" type="button" disabled aria-disabled="true" title="Pendiente de adjuntar el archivo PDF">${ICONOS.descarga} ${c.descarga.texto}</button>`;

    $("#cv-contenido").innerHTML = `
      ${encabezado("04", "Currículum", "Mi CV profesional", "cv-titulo", "Una versión web de mi perfil profesional y el documento PDF disponible para descarga.")}

      <div class="cv__descarga" data-reveal>
        <div>
          <h3>Currículum en PDF</h3>
          <p>${c.descarga.nota}</p>
        </div>
        ${botonCV}
      </div>

      <div class="cv__grid">
        <div class="cv__principal">
          <section class="cv__bloque" data-reveal>
            <h3>Perfil profesional</h3>
            <p>${c.perfil}</p>
          </section>

          <section class="cv__bloque" data-reveal>
            <h3>Formación académica</h3>
            ${c.formacion.map(f => `
              <article class="cv__item">
                <h4>${f.titulo}</h4>
                <p class="cv__institucion">${f.institucion}</p>
                <p>${f.detalle}</p>
              </article>`).join("")}
          </section>

          <section class="cv__bloque" data-reveal>
            <h3>Proyectos académicos relevantes</h3>
            <ul class="lista-proyectos">
              ${c.proyectos.map(p => `<li><strong>${p.titulo}:</strong> ${p.texto}</li>`).join("")}
            </ul>
          </section>
        </div>

        <aside class="cv__lateral">
          <section class="cv__bloque" data-reveal>
            <h3>Certificaciones</h3>
            <ul class="lista-puntos">
              ${c.certificaciones.map(x => `<li>${x}</li>`).join("")}
            </ul>
          </section>

          <section class="cv__bloque" data-reveal>
            <h3>Conocimientos técnicos</h3>
            <p>${c.conocimientos}</p>
          </section>

          <section class="cv__bloque" data-reveal>
            <h3>Experiencia y participación</h3>
            <h4>${c.experiencia.titulo}</h4>
            <p>${c.experiencia.texto}</p>
            <p class="nota">${c.experiencia.competencias}</p>
          </section>

          <section class="cv__bloque" data-reveal>
            <h3>Datos de contacto</h3>
            <ul class="lista-puntos">
              <li>Correo electrónico: <a href="mailto:${c.contactoEmail}">${c.contactoEmail}</a></li>
            </ul>
          </section>
        </aside>
      </div>
    `;
  }

  /* ---------- Proyectos ---------- */
  const FILTROS = [
    { id: "todos", etiqueta: "Todos" },
    { id: "robotica", etiqueta: "Robótica" },
    { id: "apps", etiqueta: "Aplicaciones" },
    { id: "software", etiqueta: "Software" },
    { id: "web", etiqueta: "Web" },
    { id: "datos", etiqueta: "Datos" }
  ];

  function renderProyectos() {
    const intro = "A lo largo de mi formación he participado en proyectos relacionados con programación, bases de datos, robótica, electrónica y desarrollo de aplicaciones. Cada ficha muestra el estado real del trabajo y las evidencias que se irán integrando.";
    $("#proyectos-contenido").innerHTML = `
      ${encabezado("05", "Proyectos", "Catálogo de proyectos", "proyectos-titulo", intro)}

      <div class="filtros" role="group" aria-label="Filtrar proyectos por área" data-reveal>
        ${FILTROS.map((f, i) => `
          <button class="filtro${i === 0 ? " filtro--activo" : ""}" type="button" data-filtro="${f.id}" aria-pressed="${i === 0}">${f.etiqueta}</button>`).join("")}
      </div>

      <div class="proyectos__grid" id="proyectos-grid">
        ${D.proyectos.map(p => `
          <article class="proyecto" data-proyecto="${p.id}" data-grupo="${p.grupo}" data-reveal>
            <div class="proyecto__cabecera">
              <span class="proyecto__numero">Proyecto ${p.numero}</span>
              <span class="chip chip--estado">${p.estadoEtiqueta}</span>
            </div>
            <h3 class="proyecto__nombre">${p.nombre}</h3>
            <p class="proyecto__subtitulo">${p.subtitulo}</p>
            <p class="proyecto__categoria">${p.categoria}</p>
            <p class="proyecto__resumen">${p.resumen}</p>
            <ul class="etiquetas etiquetas--pequenas" aria-label="Tecnologías del proyecto ${p.nombre}">
              ${p.tecnologias.slice(0, 4).map(t => `<li>${t}</li>`).join("")}
              ${p.tecnologias.length > 4 ? `<li class="etiqueta-mas">+${p.tecnologias.length - 4}</li>` : ""}
            </ul>
            <button class="proyecto__abrir" type="button" aria-label="Ver detalle del proyecto ${p.nombre}">
              Ver detalle ${ICONOS.flecha}
            </button>
          </article>`).join("")}
      </div>

      <p class="nota nota--centrada" data-reveal>En cada proyecto se indica su estado real de desarrollo, las funcionalidades descritas y las evidencias pendientes. Los enlaces se agregarán únicamente cuando los archivos o repositorios estén disponibles.</p>
    `;

    const grid = $("#proyectos-grid");
    const filtros = $(".filtros");

    filtros.addEventListener("click", (e) => {
      const boton = e.target.closest("[data-filtro]");
      if (!boton) return;
      const valor = boton.dataset.filtro;
      $$(".filtro", filtros).forEach(b => {
        const activo = b === boton;
        b.classList.toggle("filtro--activo", activo);
        b.setAttribute("aria-pressed", String(activo));
      });
      $$(".proyecto", grid).forEach(card => {
        const coincide = valor === "todos" || card.dataset.grupo === valor;
        card.classList.toggle("proyecto--oculto", !coincide);
      });
    });

    grid.addEventListener("click", (e) => {
      const card = e.target.closest("[data-proyecto]");
      if (!card) return;
      abrirProyecto(card.dataset.proyecto);
    });
  }

  /* ---------- Modal de proyecto ---------- */
  const modal = $("#modal-proyecto");
  const modalPanel = $(".modal__panel", modal);
  const modalContenido = $("#modal-contenido");
  let focoAnterior = null;

  function abrirProyecto(id) {
    const p = D.proyectos.find(x => x.id === id);
    if (!p) return;

    focoAnterior = document.activeElement;
    modalContenido.innerHTML = `
      <p class="modal__etiqueta">Proyecto ${p.numero} · ${p.categoria}</p>
      <h2 class="modal__titulo" id="modal-titulo">${p.nombre}</h2>
      <p class="modal__subtitulo">${p.subtitulo}</p>

      <div class="modal__seccion">
        ${p.descripcion.map(parrafo => `<p>${parrafo}</p>`).join("")}
      </div>

      <div class="modal__objetivo">
        <span class="objetivo__etiqueta">Objetivo</span>
        <p>${p.objetivo}</p>
      </div>

      <div class="modal__datos">
        <div class="modal__dato">
          <h3>Mi participación</h3>
          <p>${p.participacion}</p>
        </div>
        <div class="modal__dato">
          <h3>Estado actual</h3>
          <p>${p.estado}</p>
        </div>
      </div>

      <div class="modal__seccion">
        <h3>Tecnologías utilizadas</h3>
        <ul class="etiquetas">
          ${p.tecnologias.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      ${p.aprendizaje ? `
      <div class="modal__seccion">
        <h3>Problemas y aprendizajes</h3>
        <p>${p.aprendizaje}</p>
      </div>` : ""}

      <div class="modal__seccion">
        <h3>Evidencias</h3>
        <ul class="evidencias-lista">
          ${p.evidencias.map(e => `
            <li>
              <span class="evidencias-lista__icono" aria-hidden="true">${ICONOS.imagen}</span>
              <span>${e}</span>
              <span class="pendiente">Pendiente de integrar</span>
            </li>`).join("")}
        </ul>
      </div>

      <div class="modal__seccion modal__enlace">
        <h3>Repositorio o documentación</h3>
        ${p.enlace.disponible && p.enlace.url
          ? `<a class="boton boton--secundario" href="${p.enlace.url}" target="_blank" rel="noopener noreferrer">${ICONOS.enlace} ${p.enlace.texto}</a>`
          : `<button class="boton boton--secundario boton--deshabilitado" type="button" disabled aria-disabled="true" title="${p.enlace.nota}">${ICONOS.enlace} ${p.enlace.texto}</button>`}
        <p class="nota">${p.enlace.nota}</p>
      </div>
    `;

    modal.hidden = false;
    document.body.classList.add("sin-scroll");
    modalPanel.focus();
    $("#modal-cerrar").focus();
  }

  function cerrarModal() {
    modal.hidden = true;
    document.body.classList.remove("sin-scroll");
    if (focoAnterior) focoAnterior.focus();
  }

  function iniciarModal() {
    $("#modal-cerrar").addEventListener("click", cerrarModal);
    $("[data-cerrar-modal]", modal).addEventListener("click", cerrarModal);

    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") {
        e.preventDefault();
        cerrarModal();
      }
      if (e.key === "Tab") {
        const focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modalPanel)
          .filter(el => !el.disabled && el.offsetParent !== null);
        if (!focusables.length) return;
        const primero = focusables[0];
        const ultimo = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === primero) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primero.focus();
        }
      }
    });
  }

  /* ---------- Actividades ---------- */
  function actividadHTML(a, extra) {
    return `
      <details class="actividad" data-reveal>
        <summary>
          <span class="actividad__num" aria-hidden="true">${a.numero}</span>
          <span class="actividad__resumen">
            <span class="actividad__titulo">${a.titulo}</span>
            <span class="actividad__producto">${a.producto}</span>
          </span>
          <span class="actividad__mas" aria-hidden="true"></span>
        </summary>
        <div class="actividad__cuerpo">
          <div class="actividad__contexto">
            <h4>Contexto</h4>
            ${a.contexto.map(p => `<p>${p}</p>`).join("")}
          </div>

          ${extra || ""}

          <div class="actividad__meta">
            <div><h4>Producto</h4><p>${a.producto}</p></div>
            <div><h4>Fecha</h4><p>${a.fecha}</p></div>
            <div><h4>Evidencias</h4><p>${a.evidencia}</p></div>
            <div><h4>Enlace o archivo</h4><p class="pendiente-texto">${a.enlace}</p></div>
          </div>

          <div class="reflexion">
            <h4>Reflexión individual</h4>
            <p>${a.reflexion}</p>
          </div>
        </div>
      </details>`;
  }

  function rutaObjetivos(objetivos) {
    return `
      <div class="ruta" aria-label="Objetivos profesionales">
        ${objetivos.map(o => `
          <div class="ruta__etapa">
            <span class="ruta__periodo">${o.periodo}</span>
            <h4>${o.plazo}</h4>
            <ul class="lista-puntos">
              ${o.items.map(i => `<li>${i}</li>`).join("")}
            </ul>
          </div>`).join("")}
      </div>`;
  }

  function guionCorreo(a) {
    const c = a.correo;
    return `
      <div class="identidad__bloques">
        <div class="guion">
          <h4>Guion de presentación profesional</h4>
          ${a.guion.map(p => `<p>${p}</p>`).join("")}
          <p class="pendiente-texto">Video de presentación de 1 a 2 minutos pendiente de grabar e integrar.</p>
        </div>
        <div class="correo">
          <div class="correo__barra" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="correo__campo"><span>Asunto:</span> ${c.asunto}</div>
          <div class="correo__cuerpo">
            <p>${c.saludo}</p>
            ${c.parrafos.map(p => `<p>${p}</p>`).join("")}
            <p>${c.despedida}</p>
            <p class="correo__firma">${c.firma.join("<br>")}</p>
          </div>
          <p class="pendiente-texto">Captura o copia del correo formal simulado pendiente de guardar.</p>
        </div>
      </div>`;
  }

  function renderActividades() {
    const act = D.actividades;
    const act05 = act.identidad[0];
    const act06 = act.identidad[1];

    $("#actividades-contenido").innerHTML = `
      ${encabezado("06", "Actividades", "Desarrollo personal, aprendizaje e identidad profesional", "actividades-titulo", "Experiencias que me han permitido reconocer fortalezas, mejorar mi forma de trabajar y construir una identidad profesional. Despliega cada actividad para leer el contexto, las evidencias y la reflexión completa.")}

      <div class="actividades__grupo">
        <h3 class="subseccion__titulo" data-reveal>Desarrollo personal y social</h3>
        ${act.personales.map(a => actividadHTML(a)).join("")}
      </div>

      <div class="actividades__grupo">
        <h3 class="subseccion__titulo" data-reveal>Aprendizaje y proyectos</h3>
        ${act.aprendizaje.map(a => actividadHTML(a)).join("")}
      </div>

      <div class="actividades__grupo">
        <h3 class="subseccion__titulo" data-reveal>Identidad profesional y vocación</h3>
        ${actividadHTML(act05, rutaObjetivos(act05.objetivos))}
        ${actividadHTML(act06, guionCorreo(act06))}
      </div>
    `;
  }

  /* ---------- Venados Robotics ---------- */
  function renderVenados() {
    const v = D.venados;
    $("#venados-contenido").innerHTML = `
      <div class="venados__marco">
        <div class="seccion__encabezado" data-reveal>
          <p class="etiqueta"><span>07</span> / Equipo de robótica</p>
          <h2 class="seccion__titulo" id="venados-titulo">Venados Robotics</h2>
          <p class="seccion__intro">Programación, electrónica, integración de componentes y pruebas en proyectos de minisumo y prototipos.</p>
        </div>

        <div class="venados__grid">
          <div class="venados__texto" data-reveal>
            ${v.parrafos.map(p => `<p>${p}</p>`).join("")}
            <ul class="etiquetas venados__areas" aria-label="Áreas de participación">
              <li>Minisumo</li><li>Sumo RC</li><li>Programación</li><li>Electrónica</li><li>Pruebas</li><li>Trabajo en equipo</li>
            </ul>
          </div>
          <div class="venados__destacado" data-reveal>
            <p class="venados__destacado-etiqueta">Proyecto destacado</p>
            <h3>VENATRIX</h3>
            <p>Robot minisumo autónomo desarrollado dentro de las actividades del equipo, con ESP32-C3 Super Mini, sensores Sharp y controlador TB6612FNG.</p>
            <a class="boton boton--secundario" href="#proyectos">Ver ficha del proyecto ${ICONOS.flecha}</a>
          </div>
        </div>

        <div class="responsabilidades" data-reveal>
          <div>
            <h3 class="subseccion__titulo">Mi participación y responsabilidades</h3>
            <p>${v.responsabilidades.texto}</p>
          </div>
          <ul class="etiquetas" aria-label="Responsabilidades en competencias de robótica">
            ${v.responsabilidades.areas.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </div>

        <div class="aviso" data-reveal>
          <h3>Competencias y encuentros</h3>
          <p>${v.aclaracion}</p>
        </div>

        <div class="competencias">
          ${v.competencias.map(c => `
            <article class="competencia" data-reveal>
              <span class="competencia__marca" aria-hidden="true"></span>
              <h3>${c.nombre}</h3>
              <p>${c.detalle}</p>
              ${c.nota ? `<p class="competencia__nota">${c.nota}</p>` : ""}
            </article>`).join("")}
        </div>

        <div class="venados__galeria-encabezado" data-reveal>
          <h3 class="subseccion__titulo">Galería de evidencias</h3>
          <p>${v.notaGaleria}</p>
        </div>

        <div class="galeria">
          ${v.galeria.map(g => `
            <figure class="evidencia" data-reveal>
              <div class="evidencia__marco" aria-hidden="true">${ICONOS.imagen}</div>
              <figcaption>
                <span>${g}</span>
                <span class="pendiente">Pendiente de integrar</span>
              </figcaption>
            </figure>`).join("")}
        </div>

        <p class="nota" data-reveal>${v.enlaces}</p>
      </div>
    `;
  }

  /* ---------- Aprendizaje continuo ---------- */
  function renderAprendizaje() {
    const a = D.aprendizajeContinuo;
    $("#aprendizaje-contenido").innerHTML = `
      ${encabezado("08", "Aprendizaje continuo", "Áreas de interés y desarrollo", "aprendizaje-titulo", "Intereses que quiero seguir desarrollando durante mi formación y mi trayectoria profesional.")}
      <div class="aprendizaje__grid">
        <div class="aprendizaje__texto" data-reveal>
          ${a.parrafos.map(p => `<p>${p}</p>`).join("")}
          <p class="nota">${a.nota}</p>
        </div>
        <ul class="areas" aria-label="Áreas de aprendizaje continuo">
          ${a.areas.map((area, i) => `
            <li class="area" data-reveal>
              <span class="area__num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
              <span>${area}</span>
            </li>`).join("")}
        </ul>
      </div>
    `;
  }

  /* ---------- Contacto ---------- */
  function renderContacto() {
    const c = D.contacto;
    const unico = c.canales.length === 1;
    const primerUrl = c.canales[0] && c.canales[0].url;

    $("#contacto-contenido").innerHTML = `
      <div class="contacto__panel" data-reveal>
        <div class="seccion__encabezado">
          <p class="etiqueta"><span>09</span> / Contacto</p>
          <h2 class="seccion__titulo" id="contacto-titulo">${c.titulo}</h2>
          <p class="seccion__intro">${c.mensaje}</p>
        </div>

        <div class="contacto__canales${unico ? " contacto__canales--unico" : ""}">
          ${c.canales.map((canal, i) => {
            const externo = canal.url && canal.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
            const contenido = `
              <span class="canal__icono">${i === 0 ? ICONOS.correo : ICONOS.enlace}</span>
              <span class="canal__tipo">${canal.tipo}</span>
              <span class="canal__valor">${canal.valor}</span>
              ${canal.url ? "" : '<span class="pendiente">Pendiente de completar</span>'}`;
            return canal.url
              ? `<a class="canal" href="${canal.url}"${externo}>${contenido}</a>`
              : `<div class="canal">${contenido}</div>`;
          }).join("")}
        </div>

        ${primerUrl ? `<a class="boton boton--primario contacto__boton" href="${primerUrl}">${ICONOS.correo} Escribir un correo</a>` : ""}

        <p class="nota nota--centrada">${c.nota}</p>
        <p class="contacto__cierre">${c.cierre}</p>
        <p class="contacto__firma">Aylin M. · Ingeniería Informática</p>
      </div>
    `;
  }

  /* ---------- Menú móvil ---------- */
  function iniciarMenu() {
    const boton = $("#menu-boton");
    const menu = $("#menu-movil");

    function cerrar() {
      menu.hidden = true;
      boton.setAttribute("aria-expanded", "false");
      boton.setAttribute("aria-label", "Abrir menú de navegación");
      document.body.classList.remove("menu-abierto");
    }

    boton.addEventListener("click", () => {
      const abierto = boton.getAttribute("aria-expanded") === "true";
      if (abierto) {
        cerrar();
      } else {
        menu.hidden = false;
        boton.setAttribute("aria-expanded", "true");
        boton.setAttribute("aria-label", "Cerrar menú de navegación");
        document.body.classList.add("menu-abierto");
      }
    });

    $$("a", menu).forEach(a => a.addEventListener("click", cerrar));

    document.addEventListener("click", (e) => {
      if (menu.hidden) return;
      if (!menu.contains(e.target) && !boton.contains(e.target)) cerrar();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) cerrar();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080 && !menu.hidden) cerrar();
    });
  }

  /* ---------- Scroll: progreso, cabecera, activo, volver arriba ---------- */
  function iniciarScroll() {
    const barra = $("#progreso-barra");
    const cabecera = $("#cabecera");
    const volver = $("#volver-arriba");
    const secciones = $$("main section[id]");
    const enlacesNav = $$("[data-nav]");

    function alScroll() {
      const altura = document.documentElement.scrollHeight - window.innerHeight;
      const progreso = altura > 0 ? (window.scrollY / altura) * 100 : 0;
      barra.style.width = progreso + "%";

      cabecera.classList.toggle("cabecera--compacta", window.scrollY > 24);
      volver.classList.toggle("volver-arriba--visible", window.scrollY > 640);
    }

    window.addEventListener("scroll", alScroll, { passive: true });
    alScroll();

    volver.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        const id = entrada.target.id;
        enlacesNav.forEach(a => {
          const activo = a.dataset.nav === id;
          if (activo) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    secciones.forEach(s => observador.observe(s));
  }

  /* ---------- Animaciones de aparición ---------- */
  function iniciarRevelado() {
    const elementos = $$("[data-reveal]");
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducido || !("IntersectionObserver" in window)) {
      elementos.forEach(el => el.classList.add("es-visible"));
      return;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("es-visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    elementos.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
      observador.observe(el);
    });
  }

  /* ---------- Inicio ---------- */
  renderNavegacion();
  renderHero();
  renderSobreMi();
  renderFormacion();
  renderHabilidades();
  renderCV();
  renderProyectos();
  renderActividades();
  renderVenados();
  renderAprendizaje();
  renderContacto();

  iniciarMenu();
  iniciarModal();
  iniciarScroll();
  iniciarRevelado();

  const anio = $("#pie-anio");
  if (anio) anio.textContent = "· " + new Date().getFullYear();
})();
