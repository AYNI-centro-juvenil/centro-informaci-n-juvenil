import { useState, useEffect, useRef } from "react"
import podcastLogo from "@/imports/WhatsApp_Image_2026-08-15_at_2.12.44_PM.jpeg"
import afficheImg from "@/imports/WhatsApp_Image_2026-08-15_at_2.16.55_PM.jpeg"
import carousel1 from "@/imports/WhatsApp_Image_2026-08-15_at_2.22.34_PM.jpeg"
import carousel2 from "@/imports/WhatsApp_Image_2026-08-15_at_2.22.35_PM.jpeg"
import carousel3 from "@/imports/WhatsApp_Image_2026-08-15_at_2.22.35_PM__1_.jpeg"
import carousel4 from "@/imports/WhatsApp_Image_2026-08-15_at_2.22.35_PM__2_.jpeg"
import afiche1 from "@/imports/1.png"
import afiche3 from "@/imports/3.png"
import afiche4 from "@/imports/4.png"
import afiche5 from "@/imports/5.png"
import infografiaImg from "@/imports/infografia_.jpeg"
import comic1 from "@/imports/1-3.png"
import comic2 from "@/imports/2-1.png"
import comic3 from "@/imports/3-3.png"
import ep0Audio from "@/imports/EP0_Bienvenida_AYNI.MP3"
import ep1Audio from "@/imports/EP1_Qu__est__pasando_en_el_Per__AYNI.MP3"
import ep2Audio from "@/imports/EP2__D_nde_empieza_la_violencia_AYNI.MP3"
import ep3Audio from "@/imports/EP3__Qu__hago_si_algo_pasa_AYNI.MP3"
import ep4Audio from "@/imports/EP4_Mi_vida__mis_decisiones__mi_futuro_AYNI.MP3"
import carouselNew2 from "@/imports/Campa_a_AYNI_imagen_2.png"
import carouselNew3 from "@/imports/Campa_a_AYNI_imagen_3.png"
import carouselNew4 from "@/imports/Campa_a_AYNI_imagen_4.png"
import mascota1 from "@/imports/MASCOTA_DE_LA_P_GINA_WEB_1.png"
import mascota2 from "@/imports/MASCOTA_DE_LA_P_GINA_WEB_2.png"
import mascota3 from "@/imports/MASCOTA_DE_LA_P_GINA_WEB_3.png"
import mascota4 from "@/imports/MASCOTA_DE_LA_P_GINA_WEB_4.png"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import comicHorizontal from "@/imports/historieta_en_horizontal__1__1_.png"

const NAV_LINKS = ["Inicio", "Identificar", "Experiencias", "Podcast", "Actuar", "Mapa", "Recursos"]

interface TopicDetail {
  subtitle: string
  body: string[]
  indicators?: { label: string; items: string[] }[]
  callout?: string
  action?: { label: string; detail: string }
}

interface Topic {
  id: string
  icon: string
  label: string
  color: string
  desc: string
  detail: TopicDetail
}

const TOPICS: Topic[] = [
  {
    id: "senales",
    icon: "⚠",
    label: "Señales de alerta",
    color: "#8B31D4",
    desc: "Cambios bruscos de humor, aislamiento, bajo rendimiento escolar, conductas sexualizadas no acordes con la edad. Estas señales no son prueba definitiva, pero indican que alguien necesita atención y escucha.",
    detail: {
      subtitle: "Reconocer no es acusar — es cuidar",
      body: [
        "Las señales de violencia no siempre son evidentes. Pueden manifestarse en el cuerpo, en el comportamiento o en la salud mental de una persona. Ninguna señal por sí sola confirma una situación de violencia, pero su presencia indica que alguien necesita atención, escucha y orientación.",
        "Es importante no minimizarlas ni interpretarlas como 'cosas de la edad'. La diferencia entre intervenir a tiempo y no hacerlo puede cambiar la vida de alguien.",
      ],
      indicators: [
        {
          label: "Físicas",
          items: [
            "Lesiones externas sin explicación clara",
            "Dolor, picazón o irritación en zona genital o anal",
            "Dificultad para caminar o sentarse",
            "Infecciones de transmisión sexual",
            "Embarazo temprano",
          ],
        },
        {
          label: "Conductuales",
          items: [
            "Cambios bruscos de humor",
            "Aislamiento de amigos y familia",
            "Bajo rendimiento o deserción escolar",
            "Conductas sexualizadas no acordes con la edad",
            "Pesadillas persistentes",
            "Intentos de suicidio",
          ],
        },
        {
          label: "Salud mental",
          items: [
            "Depresión o ansiedad sostenida",
            "Autolesiones",
            "Rechazo repentino al contacto físico",
            "Miedo inexplicable a personas o lugares específicos",
          ],
        },
      ],
      callout: "Si reconoces estas señales en alguien, no actúes solo/a. Busca orientación en el CEM o llama a la Línea 100.",
      action: { label: "Línea 100 — gratuita 24h", detail: "Llama al 100" },
    },
  },
  {
    id: "rutas",
    icon: "🛡",
    label: "Rutas de protección",
    color: "#29BFFF",
    desc: "Línea 100, CEM, DEMUNA, Línea 113 opción 3. En Perú existen rutas gratuitas de orientación, atención psicológica, social y legal. Conocerlas antes de necesitarlas puede marcar la diferencia.",
    detail: {
      subtitle: "Conocer la ruta antes de necesitarla",
      body: [
        "En Perú existen servicios gratuitos y confidenciales que brindan orientación, atención y protección frente a situaciones de violencia. No tienes que tener todo claro para llamar — puedes llamar con dudas, con miedo o con lo poco que sabes.",
        "Los Centros Emergencia Mujer (CEM) tienen la obligación de protegerte y de evitar la revictimización: no tendrás que repetir tu historia múltiples veces.",
      ],
      indicators: [
        {
          label: "Líneas de orientación",
          items: [
            "Línea 100 — violencia familiar y sexual, gratuita, 24 h",
            "Línea 113 opción 3 — salud física, mental y reproductiva",
            "Chat 100 — orientación por chat sin necesidad de llamar",
          ],
        },
        {
          label: "Atención presencial",
          items: [
            "CEM (Centro Emergencia Mujer) — atención psicológica, social y legal",
            "DEMUNA — protege derechos de niñas, niños y adolescentes",
            "SNEJ — sistema de justicia especializado en violencia",
          ],
        },
        {
          label: "Tras una agresión sexual",
          items: [
            "Los establecimientos de salud deben aplicar el protocolo DS N.° 083",
            "Garantiza acceso a medicamentos y vacunas correspondientes",
            "No necesitas autorización de terceros para acceder al kit de emergencia",
          ],
        },
      ],
      callout: "La anticoncepción oral de emergencia (AOE) es un derecho. Puedes acceder a ella sin barreras administrativas ni necesidad de autorización, independientemente de tu edad.",
      action: { label: "Llamar ahora — Línea 100", detail: "100" },
    },
  },
  {
    id: "matrimonio",
    icon: "⛓",
    label: "Uniones y matrimonio infantil",
    color: "#A8C923",
    desc: "Las uniones tempranas están vinculadas a vulnerabilidad, aceleran la maternidad y truncan el proyecto de vida. Una decisión puede verse condicionada por presión, desigualdad o falta de oportunidades.",
    detail: {
      subtitle: "No es tradición — es violencia",
      body: [
        "Las uniones tempranas y el matrimonio infantil están relacionados con situaciones de vulnerabilidad. Pueden aparecer como consecuencia de un embarazo o como condición que lo acelera. En ambos casos, truncan el proyecto de vida de una adolescente.",
        "Una decisión 'libre' puede verse condicionada por presión familiar, desigualdad económica, falta de oportunidades o relaciones de poder. Cuando una persona no puede ejercer libremente su voluntad, no hay consentimiento real.",
        "La eliminación de estas uniones es una medida fundamental para proteger los derechos de adolescentes, preservar su acceso a la educación y garantizar que puedan construir su propio futuro.",
      ],
      indicators: [
        {
          label: "Por qué es violencia",
          items: [
            "Impide el libre desarrollo de la personalidad",
            "Limita el acceso a la educación y al trabajo",
            "Acelera o fuerza la maternidad",
            "Perpetúa ciclos de desigualdad y pobreza",
            "Se sostiene en relaciones de poder y control",
          ],
        },
        {
          label: "Factores que aumentan el riesgo",
          items: [
            "Falta de acceso a educación o empleo",
            "Presión familiar o comunitaria",
            "Embarazo no planificado en la adolescencia",
            "Ausencia de información sobre derechos",
          ],
        },
      ],
      callout: "Si sientes que hay presión para que te cases o te 'unas' antes de estar lista/o, tienes derecho a decir no y a buscar apoyo. La DEMUNA puede orientarte.",
      action: { label: "Orientación — DEMUNA", detail: "Acude a tu municipalidad" },
    },
  },
  {
    id: "mgf",
    icon: "✋",
    label: "Mutilación genital femenina",
    color: "#F5821F",
    desc: "La MGF es una forma de violencia de género y una vulneración de derechos. Se relaciona con dinámicas de género, poder y desigualdad. No se asume generalizada en Perú, pero debe nombrarse y comprenderse.",
    detail: {
      subtitle: "Nombrarla es el primer paso para erradicarla",
      body: [
        "La mutilación genital femenina (MGF) es cualquier procedimiento que implique la alteración o remoción parcial o total de los genitales externos femeninos por razones no médicas. Es una forma de violencia de género reconocida internacionalmente.",
        "No se trata de una práctica generalizada en el Perú, pero forma parte del panorama global de violencias que afectan a niñas y mujeres. Comprenderla permite reconocerla como lo que es: una vulneración de derechos fundamentales.",
        "Se sostiene en normas de género, relaciones de poder y desigualdad. Su abordaje requiere entender el contexto sin justificar la práctica. Ninguna tradición cultural puede estar por encima de los derechos de una niña.",
      ],
      indicators: [
        {
          label: "Qué vulnera",
          items: [
            "La integridad física y psicológica",
            "El derecho a la salud",
            "La autonomía sobre el propio cuerpo",
            "El desarrollo sexual y reproductivo",
          ],
        },
        {
          label: "Por qué ocurre",
          items: [
            "Normas culturales o religiosas que la justifican",
            "Control sobre la sexualidad femenina",
            "Presión comunitaria o familiar",
            "Falta de información y acceso a educación",
          ],
        },
      ],
      callout: "Si conoces o sospechas un caso de MGF, puedes reportarlo al CEM o llamar a la Línea 100. La respuesta debe ser de protección, no de juicio.",
      action: { label: "Reportar — Línea 100", detail: "100" },
    },
  },
  {
    id: "embarazo",
    icon: "💛",
    label: "Embarazo en menores de 15",
    color: "#E91E8C",
    desc: "En menores de 14 años, el embarazo es legalmente consecuencia de violación sexual y debe notificarse obligatoriamente. La respuesta debe centrarse en protección, atención integral y garantía de derechos.",
    detail: {
      subtitle: "La respuesta no puede centrarse solo en el embarazo",
      body: [
        "En Perú, el embarazo en una menor de 14 años es legalmente consecuencia de una violación sexual y debe ser notificado de forma obligatoria por los profesionales de salud. No es una situación médica ordinaria — es una situación de violencia que requiere protección integral.",
        "La respuesta debe considerar simultáneamente: la protección de la niña, la identificación de la violencia, la atención de su salud física y mental, la reparación del daño y la garantía de sus derechos — incluido el derecho a ser informada sobre todas sus opciones.",
        "Las niñas menores de 15 años enfrentan un riesgo de muerte relacionada con el embarazo hasta tres veces superior al de las mujeres mayores de 20, además de complicaciones como anemia, trastornos hipertensivos y parto prematuro.",
      ],
      indicators: [
        {
          label: "Derechos que tiene",
          items: [
            "Atención médica integral y prioritaria",
            "Acompañamiento psicológico",
            "Información completa sobre todas sus opciones",
            "Protección frente al agresor",
            "Acceso al kit de emergencia (DS N.° 083)",
            "No ser discriminada en su colegio",
          ],
        },
        {
          label: "Riesgos de salud",
          items: [
            "Riesgo de muerte 3× mayor que en adultas",
            "Anemia y desnutrición",
            "Trastornos hipertensivos del embarazo",
            "Parto prematuro y bajo peso al nacer",
            "Impacto en salud mental a largo plazo",
          ],
        },
      ],
      callout: "Si eres menor de 15 años y estás embarazada, o conoces a alguien en esa situación: hay personas capacitadas para acompañarte. No tienes que enfrentar esto sola.",
      action: { label: "Atención integral — CEM", detail: "Línea 100 · Chat 100 · CEM" },
    },
  },
  {
    id: "prevencion",
    icon: "💊",
    label: "Prevención y anticoncepción",
    color: "#0EAAED",
    desc: "Conocer los métodos anticonceptivos disponibles para adolescentes, sus derechos a acceder a ellos y cómo la educación sexual integral reduce el embarazo no planificado.",
    detail: {
      subtitle: "Prevenir es un derecho, no un tabú",
      body: [
        "En Perú, las y los adolescentes tienen derecho a acceder a información y métodos anticonceptivos en los establecimientos de salud del MINSA de forma gratuita y confidencial, sin necesidad de autorización de un adulto. La Norma Técnica de Planificación Familiar (NT 032-MINSA) reconoce este derecho explícitamente.",
        "Los métodos anticonceptivos modernos no causan esterilidad ni afectan el desarrollo. Usarlos de manera informada protege la salud y el proyecto de vida. El 77,7 % de adolescentes sexualmente activas en Perú ya usa métodos modernos — la meta nacional es llegar al 92,2 %.",
        "La anticoncepción oral de emergencia (AOE o 'píldora del día siguiente') es un método de emergencia legal y disponible. No es abortiva — impide la fertilización. Puedes acceder a ella en cualquier establecimiento de salud público.",
      ],
      indicators: [
        {
          label: "Métodos disponibles para adolescentes (MINSA)",
          items: [
            "Condón masculino y femenino — único que previene ITS",
            "Pastillas anticonceptivas — requieren uso diario",
            "Inyectable mensual o trimestral",
            "Implante subdérmico — muy eficaz y de larga duración",
            "DIU (dispositivo intrauterino)",
            "AOE — anticoncepción de emergencia tras relación sin protección",
          ],
        },
        {
          label: "Tus derechos de acceso",
          items: [
            "Puedes solicitar métodos anticonceptivos sin autorización de tus padres",
            "La atención es gratuita y confidencial en centros MINSA",
            "El personal de salud no puede negarte información ni métodos",
            "Tienes derecho a recibir orientación en planificación familiar",
          ],
        },
        {
          label: "Educación sexual integral (ESI)",
          items: [
            "La ESI retrasa el inicio de relaciones sexuales en adolescentes",
            "Reduce el embarazo no planificado y las ITS",
            "Está reconocida por la OPS, OMS y el Ministerio de Educación del Perú",
            "El silencio no protege — la información sí",
          ],
        },
      ],
      callout: "Si tienes dudas sobre anticoncepción o quieres orientación sobre planificación familiar, llama a la Línea 113 opción 3 o acude a tu centro de salud más cercano — es gratuito y confidencial.",
      action: { label: "Línea 113 — opción 3 — gratuita", detail: "113" },
    },
  },
]

const QUIZ_QUESTIONS = [
  {
    q: "Alguien cercano a ti ha cambiado de humor bruscamente, se ha aislado y tiene pesadillas frecuentes. ¿Qué podría indicar esto?",
    options: [
      "Es una etapa normal de la adolescencia",
      "Podría ser una señal de alerta de que está viviendo una situación de violencia",
      "Solo significa que está estresada/o por el colegio",
      "No tiene ningún significado especial",
    ],
    correct: 1,
    explanation:
      "El aislamiento, los cambios bruscos de humor y las pesadillas son indicadores conductuales de violencia. No confirman por sí solos una situación, pero indican que esa persona necesita atención, escucha y orientación. En Perú se reportan cerca de 34 casos de violencia sexual contra niñas, niños y adolescentes cada día.",
  },
  {
    q: "Una niña de 13 años queda embarazada. ¿Qué establece la ley peruana sobre este caso?",
    options: [
      "Puede ser el resultado de una relación consentida",
      "Es siempre consecuencia de una violación sexual y debe notificarse obligatoriamente",
      "Depende de si los padres aprueban la relación",
      "La ley no establece nada específico para menores de 15",
    ],
    correct: 1,
    explanation:
      "En Perú, el embarazo en menores de 14 años es legalmente consecuencia de una violación sexual y debe ser notificado de forma obligatoria. La respuesta no debe centrarse solo en el embarazo, sino en la protección integral, la identificación de violencia y la garantía de derechos.",
  },
  {
    q: "¿Cuál de estos factores NO protege a una adolescente frente al embarazo temprano?",
    options: [
      "Permanecer en la escuela",
      "Acceder a Educación Integral en Sexualidad",
      "Casarse joven para 'formalizarse'",
      "Conocer y acceder a métodos anticonceptivos modernos",
    ],
    correct: 2,
    explanation:
      "Las uniones y matrimonios tempranos están relacionados con mayor vulnerabilidad y aceleran la maternidad. El 36% de las desvinculaciones escolares en la región se atribuyen a la maternidad temprana. La permanencia escolar, la EIS y el acceso a anticonceptivos sí son factores protectores comprobados.",
  },
  {
    q: "En Perú, la prevalencia del embarazo adolescente pasó de 13,2 % en 2012 a 8,9 % en 2021. ¿Qué significa esto?",
    options: [
      "El problema ya está resuelto",
      "Hubo una reducción importante, pero persisten grandes desigualdades regionales",
      "Solo mejoró en Lima",
      "La reducción se debe únicamente a menos adolescentes activas sexualmente",
    ],
    correct: 1,
    explanation:
      "Hubo una reducción del 32,5% a nivel nacional gracias al Plan Multisectorial 2013–2021. Pero la realidad no es igual en todo el país: en Cusco la prevalencia es 4,6% mientras que en Ucayali llega al 25,1%. Las desigualdades territoriales siguen siendo una realidad que no podemos ignorar.",
  },
  {
    q: "¿Qué es la 'doble protección' en salud sexual y reproductiva?",
    options: [
      "Usar dos preservativos a la vez",
      "Usar el condón junto con otro método moderno para prevenir embarazos e ITS simultáneamente",
      "Tomar la pastilla del día siguiente dos veces",
      "Consultar con dos médicos antes de usar anticonceptivos",
    ],
    correct: 1,
    explanation:
      "La doble protección consiste en combinar el condón con otro método anticonceptivo moderno. Esto previene tanto embarazos no intencionales como infecciones de transmisión sexual, incluido el VIH. Acceder a anticonceptivos modernos es un derecho, sin barreras administrativas ni necesidad de autorización de terceros.",
  },
]

const PODCAST_MAIN = {
  id: 0,
  title: "Bienvenida — AYNI",
  episode: "EP 00",
  duration: "Cargando...",
  desc: "Prevenir no significa solo saber qué evitar. Significa tener información confiable, reconocer señales de alerta, comprender tus derechos y saber dónde buscar ayuda. Este es el punto de partida: un recorrido honesto por todo lo que encontrarás aquí.",
  tag: "Bienvenida",
  color: "#8B31D4",
}

const PODCASTS = [
  {
    id: 1,
    title: "¿Qué está pasando en el Perú?",
    episode: "Ep. 01",
    duration: "20 min",
    desc: "34 casos de violencia sexual reportados cada día. Embarazo adolescente que llega al 25,1% en Ucayali. La realidad que los datos muestran — y lo que no aparece en las cifras porque nunca se denuncia.",
    tag: "Conocer la realidad",
    color: "#A8C923",
  },
  {
    id: 2,
    title: "¿Dónde empieza la violencia?",
    episode: "Ep. 02",
    duration: "18 min",
    desc: "El control disfrazado de amor. La presión disfrazada de tradición. Las relaciones desiguales que normalizamos sin darnos cuenta. Aprender a reconocer señales — físicas, conductuales y de salud mental — antes de que escalen.",
    tag: "Reconocer señales",
    color: "#29BFFF",
  },
  {
    id: 3,
    title: "¿Qué hago si algo pasa?",
    episode: "Ep. 03",
    duration: "22 min",
    desc: "Línea 100, CEM, DEMUNA, Línea 113, SNEJ. Las rutas de protección en Perú explicadas sin tecnicismos: a dónde ir, qué esperar, cómo evitar la revictimización y qué protocolos existen tras una agresión.",
    tag: "Actuar",
    color: "#8B31D4",
  },
  {
    id: 4,
    title: "Mi vida, mis decisiones, mi futuro",
    episode: "Ep. 04",
    duration: "25 min",
    desc: "¿Qué quiero para mi futuro? ¿Qué decisiones me acercan a ese futuro? La EIS, la permanencia escolar y el acceso a anticonceptivos modernos no son temas separados — son partes del mismo proyecto de vida.",
    tag: "Proyecto de vida",
    color: "#A8C923",
  },
]

const STATS = [
  { num: "34", label: "casos de violencia sexual contra NNA se reportan cada día en Perú. Los que no se denuncian podrían ser muchos más.", src: "UNICEF / #QuitémonosLaVenda" },
  { num: "36%", label: "de las desvinculaciones escolares en la región se atribuyen a la maternidad temprana (PLANEA 2025–2030).", src: "UNFPA / PLANEA" },
  { num: "7%", label: "de madres adolescentes logra completar la educación superior, frente al 19% entre quienes postergan la maternidad.", src: "UNFPA / CAF" },
  { num: "24%", label: "menos ingresos de por vida tienen las mujeres que fueron madres en la adolescencia vs. quienes fueron madres en la adultez.", src: "CAF / BID" },
  { num: "21%", label: "más riesgo de desnutrición crónica infantil tienen los hijos de madres adolescentes.", src: "OPS / PLANEA" },
  { num: "24%", label: "es la prevalencia de uniones antes de los 18 en mujeres de 20-24 años en Perú — equivalente al promedio regional.", src: "ENDES / UNFPA" },
]

const REGIONAL_BARS = [
  { region: "Lima Metropolitana", val: 4.8, color: "#F5821F" },
  { region: "Cusco", val: 4.6, color: "#29BFFF" },
  { region: "Amazonas", val: 21.1, color: "#E91E8C" },
  { region: "Ucayali", val: 25.1, color: "#E91E8C" },
  { region: "Condorcanqui", val: 28.1, color: "#E91E8C" },
]

const SIMULATION_SCENARIOS = [
  {
    id: "s1",
    title: "Hablar con un adulto de confianza",
    desc: "Practica cómo contarle a un adulto de confianza que estás en una situación de violencia. No tienes que tener todo claro para pedir ayuda.",
    steps: [
      {
        speaker: "Tú",
        text: "Necesito contarte algo. Me cuesta mucho hablar de esto, pero ya no sé qué hacer. Me siento muy mal y creo que algo que me está pasando no está bien.",
        isUser: true,
      },
      {
        speaker: "Adulto de confianza",
        text: "Gracias por decirme. Sé que no es fácil. Estoy aquí y tengo tiempo. Cuéntame lo que puedas, a tu ritmo.",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Alguien mayor que yo me presiona. Me dice que si lo cuento nadie me va a creer. Me ha amenazado. Y yo tengo miedo.",
        isUser: true,
      },
      {
        speaker: "Adulto de confianza",
        text: "Yo te creo. Lo que describes es una situación de violencia y no es tu culpa. Hay personas capacitadas que pueden ayudarte — el CEM y la Línea 100 existen exactamente para esto. ¿Me dejarías acompañarte a buscar apoyo?",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Tengo miedo de que se complique más si denuncio.",
        isUser: true,
      },
      {
        speaker: "Adulto de confianza",
        text: "Es normal tener ese miedo. Los Centros Emergencia Mujer tienen la obligación de protegerte y evitar que revivas el dolor al contar tu historia. No estarás sola en ningún paso. Dar el primer paso es lo más difícil — y ya lo diste.",
        isUser: false,
      },
    ],
  },
  {
    id: "s2",
    title: "Llamar a la Línea 100",
    desc: "La Línea 100 es gratuita, confidencial y disponible las 24 horas. Simula cómo es esa primera llamada para que no sea desconocida si algún día la necesitas.",
    steps: [
      {
        speaker: "Operadora — Línea 100",
        text: "Línea 100, servicio gratuito y confidencial. Buenos días. ¿En qué puedo orientarte?",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Hola. Soy menor de edad. Creo que estoy en una situación de violencia y no sé qué hacer ni a dónde ir.",
        isUser: true,
      },
      {
        speaker: "Operadora — Línea 100",
        text: "Hiciste muy bien en llamar. Esta llamada es confidencial — nadie sabrá que llamaste. ¿Estás en peligro inmediato en este momento?",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "No, ahora mismo estoy sola. Pero tengo miedo de lo que pueda pasar.",
        isUser: true,
      },
      {
        speaker: "Operadora — Línea 100",
        text: "Entiendo. Vamos paso a paso. Puedo orientarte ahora mismo y también derivarte al Centro Emergencia Mujer más cercano a tu domicilio, donde recibirías atención psicológica, legal y social de forma gratuita. ¿Me puedes decir en qué distrito vives?",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Vivo en San Juan de Lurigancho.",
        isUser: true,
      },
      {
        speaker: "Operadora — Línea 100",
        text: "Perfecto. Hay un CEM cerca de ti. Te doy la dirección y el horario. También puedes usar el Chat 100 si prefieres escribir en vez de hablar. Recuerda: tienes derecho a ser escuchada, a que te traten con dignidad y a recibir protección. ¿Hay algo más en lo que pueda orientarte?",
        isUser: false,
      },
    ],
  },
  {
    id: "s3",
    title: "Hablar en el colegio con la DEMUNA",
    desc: "Las Defensorías Municipales (DEMUNA) protegen los derechos de niñas, niños y adolescentes, incluyendo discriminación por embarazo en las escuelas.",
    steps: [
      {
        speaker: "Tú",
        text: "Quiero saber si tengo derechos si estoy embarazada y el colegio me quiere expulsar o me está tratando diferente.",
        isUser: true,
      },
      {
        speaker: "Funcionaria DEMUNA",
        text: "Sí, tienes derechos. Ningún colegio puede expulsarte ni impedirte continuar tus estudios por estar embarazada. Eso es discriminación y está prohibido.",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "¿Y si ya me dijeron que no puedo seguir asistiendo?",
        isUser: true,
      },
      {
        speaker: "Funcionaria DEMUNA",
        text: "Eso es una vulneración de tus derechos. Podemos intervenir directamente ante la institución educativa. También podemos coordinar con el MINEDU. Tu educación es un derecho y la permanencia escolar es fundamental para tu proyecto de vida.",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "¿Esto es gratuito? ¿Mis padres tienen que saber?",
        isUser: true,
      },
      {
        speaker: "Funcionaria DEMUNA",
        text: "El servicio es gratuito. Podemos conversar primero contigo sola para entender tu situación antes de definir cualquier paso. Estamos aquí para protegerte a ti.",
        isUser: false,
      },
    ],
  },
  {
    id: "s4",
    title: "Denuncia anónima paso a paso",
    desc: "Puedes denunciar una situación de violencia sin revelar tu nombre. Simula cómo hacer una denuncia anónima y qué información es útil dar sin comprometerte.",
    steps: [
      {
        speaker: "Sistema — Chat 100",
        text: "Bienvenida/o al Chat 100. Esta conversación es confidencial. ¿En qué podemos orientarte?",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Quiero reportar una situación de violencia que le está pasando a alguien que conozco, pero no quiero dar mis datos. ¿Puedo hacer eso?",
        isUser: true,
      },
      {
        speaker: "Sistema — Chat 100",
        text: "Sí, puedes reportar de forma anónima. No estás obligada/o a dar tu nombre. Lo que más ayuda es describir la situación: qué ocurre, dónde (distrito o ciudad) y si la persona afectada es menor de edad. Eso permite derivar la atención correcta.",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Es una amiga de 14 años. Un familiar mayor la presiona constantemente y yo creo que hay violencia sexual, aunque ella no lo ha confirmado. Vive en Ate.",
        isUser: true,
      },
      {
        speaker: "Sistema — Chat 100",
        text: "Gracias por reportarlo. Por tratarse de una menor de edad, esta información puede ser derivada al CEM del distrito para una visita de orientación. La visita es discreta. ¿Deseas que te informemos qué pasos siguen sin que se mencione tu nombre?",
        isUser: false,
      },
      {
        speaker: "Tú",
        text: "Sí, por favor. No quiero que ella sepa que fui yo.",
        isUser: true,
      },
      {
        speaker: "Sistema — Chat 100",
        text: "Entendido. El equipo del CEM visitará el entorno de forma que no comprometa tu identidad. El bienestar de tu amiga es la prioridad. Hiciste lo correcto al reportarlo. Si la situación se agrava, recuerda que también puedes llamar al 100 o al 105 de forma anónima en cualquier momento.",
        isUser: false,
      },
    ],
  },
]

const RESOURCES = [
  { name: "Línea 100", detail: "Orientación frente a violencia familiar y sexual — gratuita, confidencial, 24 horas", contact: "100" },
  { name: "Línea 113 — opción 3", detail: "Orientación en salud física, mental y reproductiva — gratuita", contact: "113" },
  { name: "Chat 100", detail: "Orientación especializada por chat, sin necesidad de llamar", contact: "chat100.pe" },
  { name: "CEM — Centro Emergencia Mujer", detail: "Atención psicológica, social y legal gratuita. Evitan la revictimización de menores", contact: "MIMP" },
  { name: "DEMUNA", detail: "Defensorías Municipales que protegen derechos de niñas, niños y adolescentes, incluidos casos de embarazo y discriminación escolar", contact: "Municipalidad" },
  { name: "SNEJ", detail: "Sistema Nacional Especializado de Justicia para protección y sanción de violencia contra mujeres y grupo familiar", contact: "Poder Judicial" },
  { name: "Policía Nacional", detail: "Emergencias y denuncia inmediata", contact: "105" },
  { name: "Kit de emergencia — MINSA", detail: "Establecimientos de salud deben aplicar el protocolo DS N.° 083 tras agresión sexual: medicamentos y vacunas garantizados", contact: "MINSA" },
]

function TopicModal({ topic, onClose }: { topic: Topic; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", fn)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
      style={{ background: "rgba(28,28,30,0.7)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{ background: "#FAFBFF", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <div
          className="px-8 py-7 flex items-start justify-between shrink-0"
          style={{ background: topic.color }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{topic.icon}</span>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.2)", color: "white", fontFamily: "'Outfit', sans-serif" }}
              >
                Identificar
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {topic.label}
            </h2>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}>
              {topic.detail.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-1 transition-all hover:bg-white/20"
            style={{ color: "white", background: "rgba(255,255,255,0.15)" }}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-8 py-7 space-y-6">
          {/* Body text */}
          <div className="space-y-3">
            {topic.detail.body.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "#3C3C3E", fontFamily: "'Outfit', sans-serif" }}>
                {p}
              </p>
            ))}
          </div>

          {/* Indicators */}
          {topic.detail.indicators && (
            <div className="space-y-4">
              {topic.detail.indicators.map((group) => (
                <div key={group.label}>
                  <h4
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: topic.color, fontFamily: "'Outfit', sans-serif" }}
                  >
                    {group.label}
                  </h4>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#1C1C1E", fontFamily: "'Outfit', sans-serif" }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: topic.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Callout */}
          {topic.detail.callout && (
            <div
              className="rounded-2xl p-5"
              style={{ background: `${topic.color}12`, borderLeft: `3px solid ${topic.color}` }}
            >
              <p className="text-sm leading-relaxed font-medium" style={{ color: topic.color, fontFamily: "'Outfit', sans-serif" }}>
                {topic.detail.callout}
              </p>
            </div>
          )}

          {/* Action */}
          {topic.detail.action && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs" style={{ color: "#8C8C8E", fontFamily: "'Outfit', sans-serif" }}>
                {topic.detail.action.detail}
              </span>
              <button
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: topic.color, fontFamily: "'Outfit', sans-serif" }}
              >
                {topic.detail.action.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const NAV_IDS: Record<string, string> = {
  Inicio: "inicio",
  Identificar: "identificar",
  Experiencias: "experiencias",
  Podcast: "podcast",
  Actuar: "actuar",
  Mapa: "mapa",
  Recursos: "recursos",
}

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const handleNav = (link: string) => {
    setActive(link)
    const id = NAV_IDS[link]
    if (id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,49,212,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ background: "#8B31D4" }}
          >
            M
</div>
          <span
            className="text-base font-semibold tracking-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "#8B31D4" }}
          >
            Más Allá del Tabú
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: active === link ? "#8B31D4" : "#5C5C5E",
              }}
            >
              {link}
            </button>
          ))}
        </div>
        <button
          onClick={() => { const el = document.getElementById("recursos"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
          className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-transform hover:scale-105"
          style={{ background: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}
        >
          Pedir ayuda
        </button>
      </div>
    </nav>
  )
}

function HeroSection() {
  const words = ["la violencia", "el control", "el silencio", "el miedo"]
  const [wi, setWi] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWi((p) => (p + 1) % words.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen relative flex flex-col justify-end pb-20 pt-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(140deg, #7B2FE0 0%, #9F3EF0 35%, #D4278A 70%, #F0368A 100%)" }}
    >
      {/* Colour blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, #F5821F 0%, transparent 65%)" }} />
        <div className="absolute top-1/4 right-0 w-[380px] h-[380px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #29BFFF 0%, transparent 65%)" }} />
        <div className="absolute bottom-8 left-1/4 w-[320px] h-[320px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #A8C923 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{
              color: "#0EAAED",
              borderColor: "rgba(14,170,237,0.35)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Perú — Para adolescentes
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold leading-none mb-6 text-white"
          style={{ fontFamily: "'Fraunces', serif", letterSpacing: "-0.02em" }}
        >
          Conocer es
          <br />
          <span className="italic font-light" style={{ color: "#E91E8C" }}>
            romper
          </span>
          <br />
          <span
            className="relative inline-block transition-all duration-500"
            style={{ color: "#F5821F" }}
          >
            {words[wi]}
          </span>
          .
        </h1>

        <p
          className="text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          style={{ color: "rgba(253,248,255,0.82)", fontFamily: "'Outfit', sans-serif" }}
        >
          Hay temas de los que a veces cuesta hablar, preguntas que quedan en el aire y situaciones que no siempre sabemos cómo enfrentar. Este espacio nace para conversarlas sin miedo, sin prejuicios y con información confiable.
          <br /><br />
          <span className="italic" style={{ color: "#0EAAED" }}>Explora, escucha, descubre y atrévete a mirar estos temas desde otra perspectiva.</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => { const el = document.getElementById("estadisticas"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{ background: "#E91E8C", color: "white", fontFamily: "'Outfit', sans-serif" }}
          >
            ¿Qué está pasando?
          </button>
          <button
            onClick={() => { const el = document.getElementById("campana-visual"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
            className="px-8 py-4 rounded-full font-semibold text-base border transition-all hover:bg-white/10"
            style={{
              borderColor: "rgba(250,247,242,0.4)",
              color: "rgba(250,247,242,0.9)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Ver recursos visuales →
          </button>
        </div>
      </div>

      {/* Mascot characters — from afiches */}
      <div className="absolute right-4 md:right-16 bottom-16 md:bottom-24 hidden md:flex flex-col gap-4 items-end pointer-events-none select-none">
        <img src={afiche5} alt="mascota cyan — autonomía corporal" className="w-28 md:w-36 rounded-2xl shadow-2xl opacity-90 rotate-2" style={{ filter: "drop-shadow(0 8px 24px rgba(0,176,155,0.4))" }} />
        <img src={afiche3} alt="mascota rosa — mis derechos" className="w-24 md:w-28 rounded-2xl shadow-2xl opacity-85 -rotate-2 -translate-x-6" style={{ filter: "drop-shadow(0 8px 24px rgba(236,33,121,0.35))" }} />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12" style={{ background: "rgba(250,247,242,0.5)" }} />
        <span className="text-xs text-white uppercase tracking-widest" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Explorar
        </span>
      </div>
    </section>
  )
}

function TopicsSection() {
  const [openTopic, setOpenTopic] = useState<Topic | null>(null)

  return (
    <>
      <section id="identificar" className="py-24 px-6" style={{ background: "#FAFBFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
              — Identificar
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
            >
              Los temas que
              <br />
              <span className="italic font-light" style={{ color: "#8B31D4" }}>nadie explica bien.</span>
            </h2>
            <p className="mt-4 text-sm" style={{ color: "#8C8C8E", fontFamily: "'Outfit', sans-serif" }}>
              Haz click en cualquier tarjeta para ver información completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {TOPICS.map((t) => (
              <button
                key={t.id}
                onClick={() => setOpenTopic(t)}
                className="text-left rounded-2xl p-6 transition-all duration-200 border group hover:shadow-lg"
                style={{
                  background: "white",
                  borderColor: "#EDE8F7",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{t.icon}</span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors group-hover:text-white"
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    Ver más →
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-2 transition-colors"
                  style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
                >
                  {t.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.desc}
                </p>
                <div
                  className="mt-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                  style={{ background: t.color }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {openTopic && <TopicModal topic={openTopic} onClose={() => setOpenTopic(null)} />}
    </>
  )
}

function StatsSection() {
  const maxVal = Math.max(...REGIONAL_BARS.map((b) => b.val))

  return (
    <section id="estadisticas" className="py-20 px-6" style={{ background: "linear-gradient(135deg, rgb(120, 190, 0) 0%, rgb(132, 200, 0) 50%, rgb(145, 210, 10) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}>
          — La realidad en Perú
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-xl leading-tight text-white" style={{ fontFamily: "'Fraunces', serif" }}>
          Los números que deberías conocer.
        </h2>

        {/* 2 Visual Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Chart 1 — Regional bar chart */}
          <div className="rounded-3xl p-6 border" style={{ background: "rgba(0,0,0,0.15)", borderColor: "rgba(255,255,255,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Outfit', sans-serif" }}>
              Embarazo adolescente por región
            </p>
            <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Outfit', sans-serif" }}>
              % de adolescentes embarazadas · ENDES 2021
            </p>
            <div className="space-y-3">
              {REGIONAL_BARS.map((b) => (
                <div key={b.region}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{b.region}</span>
                    <span className="text-xs font-bold" style={{ color: b.color, fontFamily: "'Outfit', sans-serif" }}>{b.val}%</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(b.val / maxVal) * 100}%`, background: b.color, transition: "width 1s ease" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-5 leading-snug" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Outfit', sans-serif" }}>
              En Condorcanqui (Amazonas) la cifra llega al 28,1%, directamente vinculada a uniones tempranas.
            </p>
          </div>

          {/* Chart 2 — Risk comparison */}
          <div className="rounded-3xl p-6 border" style={{ background: "rgba(0,0,0,0.15)", borderColor: "rgba(255,255,255,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Outfit', sans-serif" }}>
              Riesgo de muerte materna
            </p>
            <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Outfit', sans-serif" }}>
              Menores de 16 años vs. mujeres de 20-30 años · OPS / PLANEA
            </p>
            <div className="flex items-end gap-8 justify-center mb-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col gap-1">
                  {[...Array(1)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "rgba(0,135,90,0.12)" }}>👩</div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>1×</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Outfit', sans-serif" }}>Adulta<br />20-30 años</div>
                </div>
              </div>
              <div className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.35)" }}>vs</div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "rgba(233,30,140,0.25)" }}>👧</div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ fontFamily: "'Fraunces', serif", color: "#E91E8C" }}>4×</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Outfit', sans-serif" }}>Menor<br />de 16 años</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg, rgba(184,240,106,0.45) 0%, rgba(203,250,133,0.45) 100%)", boxShadow: "0 4px 16px rgba(184,240,106,0.2)", backdropFilter: "blur(4px)" }}>
              <p className="text-sm leading-snug text-center font-semibold" style={{ color: "#2A4A00", fontFamily: "'Outfit', sans-serif" }}>
                Las complicaciones más frecuentes incluyen preeclampsia, anemia grave y hemorragias posparto.
              </p>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {STATS.map((s, si) => (
            <div key={si} className="rounded-2xl p-5 border" style={{ background: "rgba(0,0,0,0.15)", borderColor: "rgba(255,255,255,0.2)" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                {s.num}
              </div>
              <p className="text-xs leading-snug mb-3" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}>
                {s.label}
              </p>
              <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", fontFamily: "'Outfit', sans-serif" }}>
                {s.src}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CampaignsSection() {
  const campaigns = [
    {
      hashtag: "#TodoASuTiempo",
      msg: '"La mejor protección es una buena decisión."',
      desc: "Promueve la autonomía adolescente: informarse para poder decidir sobre el propio futuro.",
      org: "MINSA / MINedu",
      color: "#E91E8C",
    },
    {
      hashtag: "Vive tu adolescencia SIN ROCHES",
      msg: '"Infórmate, conócete y protégete."',
      desc: "Reduce el estigma de acudir a servicios de salud sexual y reproductiva.",
      org: "MINSA",
      color: "#F5821F",
    },
    {
      hashtag: "Hablemos Claro",
      msg: "Pares que hablan con pares sobre sexualidad.",
      desc: "Iniciativa del Ministerio de Educación y UNFPA que usa promotores adolescentes para sensibilizar sobre sexualidad.",
      org: "MINEDU + UNFPA",
      color: "#A8C923",
    },
    {
      hashtag: "#QuitémonosLaVenda",
      msg: "La violencia sexual ocurre más cerca de lo que pensamos.",
      desc: "Campaña de UNICEF y Latina para visibilizar la violencia sexual contra niñas, niños y adolescentes en sus distintas expresiones.",
      org: "UNICEF + Latina",
      color: "#29BFFF",
    },
  ]

  return (
    <section className="py-20 px-6" style={{ background: "#FAFBFF", borderTop: "1px solid #EDE8F7" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
            — Campañas en Perú
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
          >
            Voces que ya
            <br />
            <span className="italic font-light" style={{ color: "#8B31D4" }}>están hablando.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campaigns.map((c) => (
            <div
              key={c.hashtag}
              className="rounded-2xl p-6 border transition-all hover:shadow-md"
              style={{ background: "white", borderColor: `${c.color}30`, borderLeftWidth: 4, borderLeftColor: c.color }}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-sm font-bold"
                  style={{ color: c.color, fontFamily: "'Fraunces', serif" }}
                >
                  {c.hashtag}
                </span>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ml-3"
                  style={{ background: `${c.color}15`, color: c.color, fontFamily: "'Outfit', sans-serif" }}
                >
                  {c.org}
                </span>
              </div>
              <p
                className="text-base font-semibold mb-2 leading-snug"
                style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
              >
                {c.msg}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuizSection() {
  const [qi, setQi] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = QUIZ_QUESTIONS[qi]

  const handleAnswer = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (qi < QUIZ_QUESTIONS.length - 1) {
      setQi((p) => p + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  const restart = () => {
    setQi(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  return (
    <section className="py-24 px-6" style={{ background: "#FAFBFF" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 flex items-end gap-6">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
              — Juicio crítico
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
            >
              ¿Sabes reconocerlo
              <br />
              <span className="italic font-light" style={{ color: "#8B31D4" }}>cuando lo ves?</span>
            </h2>
          </div>
          <img src={mascota4} alt="Mascota Más Allá del Tabú acompañando el quiz" className="w-24 md:w-32 shrink-0 drop-shadow-lg" style={{ filter: "drop-shadow(0 8px 20px rgba(139,49,212,0.3))" }} />
        </div>

        {!done ? (
          <div
            className="rounded-3xl p-8 md:p-10 border"
            style={{ background: "white", borderColor: "#EDE8F7" }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#9B9B9E", fontFamily: "'Outfit', sans-serif" }}>
                Pregunta {qi + 1} de {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex gap-1.5">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === qi ? 24 : 8,
                      background: i < qi ? "#8B31D4" : i === qi ? "#E91E8C" : "#EDE8F7",
                    }}
                  />
                ))}
              </div>
            </div>

            <h3
              className="text-xl md:text-2xl font-semibold mb-8 leading-snug"
              style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
            >
              {q.q}
            </h3>

            <div className="grid gap-3 mb-6">
              {q.options.map((opt, i) => {
                let bg = "white"
                let border = "#EDE8F7"
                let textColor = "#1C1C1E"
                if (selected !== null) {
                  if (i === q.correct) {
                    bg = "rgba(107,26,42,0.06)"
                    border = "#8B31D4"
                    textColor = "#8B31D4"
                  } else if (i === selected && selected !== q.correct) {
                    bg = "rgba(232,98,74,0.06)"
                    border = "#E91E8C"
                    textColor = "#29BFFF"
                  }
                } else if (selected === null) {
                  bg = "white"
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="text-left px-5 py-4 rounded-xl border transition-all duration-200 font-medium text-sm"
                    style={{ background: bg, borderColor: border, color: textColor, fontFamily: "'Outfit', sans-serif" }}
                  >
                    <span className="font-bold mr-2" style={{ color: "#9B9B9E" }}>
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>

            {selected !== null && (
              <div
                className="rounded-xl p-5 mb-6"
                style={{
                  background: selected === q.correct ? "rgba(107,26,42,0.06)" : "rgba(232,98,74,0.06)",
                  borderLeft: `3px solid ${selected === q.correct ? "#8B31D4" : "#E91E8C"}`,
                }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: selected === q.correct ? "#8B31D4" : "#29BFFF", fontFamily: "'Outfit', sans-serif" }}>
                  {selected === q.correct ? "✓ Correcto" : "✗ Incorrecto"}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#3C3C3E", fontFamily: "'Outfit', sans-serif" }}>
                  {q.explanation}
                </p>
              </div>
            )}

            {selected !== null && (
              <button
                onClick={next}
                className="w-full py-4 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
              >
                {qi < QUIZ_QUESTIONS.length - 1 ? "Siguiente pregunta →" : "Ver resultados →"}
              </button>
            )}
          </div>
        ) : (
          <div
            className="rounded-3xl p-10 text-center border"
            style={{ background: "white", borderColor: "#EDE8F7" }}
          >
            <div
              className="text-6xl font-bold mb-2"
              style={{ fontFamily: "'Fraunces', serif", color: "#8B31D4" }}
            >
              {score}/{QUIZ_QUESTIONS.length}
            </div>
            <p className="text-lg font-semibold mb-2" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
              {score === QUIZ_QUESTIONS.length
                ? "Excelente — tienes los ojos abiertos."
                : score >= 2
                ? "Vas bien. Sigue aprendiendo."
                : "Todos empezamos desde algún lugar."}
            </p>
            <p className="text-sm mb-8" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>
              El conocimiento protege. Comparte este quiz con alguien que lo necesite.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={restart}
                className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-gray-50"
                style={{ borderColor: "#EDE8F7", color: "#1C1C1E", fontFamily: "'Outfit', sans-serif" }}
              >
                Reintentar
              </button>
              <button
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
              >
                Compartir quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const AUDIO_SRCS: Record<number, string | null> = {
  0: ep0Audio,
  1: ep1Audio,
  2: ep2Audio,
  3: ep3Audio,
  4: ep4Audio,
}

function PodcastSection() {
  const [playing, setPlaying] = useState<number | null>(null)
  const [progress, setProgress] = useState<Record<number, number>>({})
  const [duration, setDuration] = useState<Record<number, number>>({})
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({})
  const intervals = useRef<Record<number, ReturnType<typeof setInterval>>>({})

  const togglePlay = (id: number) => {
    const src = AUDIO_SRCS[id]
    if (src) {
      // Real audio playback
      const audio = audioRefs.current[id]
      if (!audio) return
      if (playing === id) {
        audio.pause()
        setPlaying(null)
      } else {
        if (playing !== null) audioRefs.current[playing]?.pause()
        audio.play()
        setPlaying(id)
      }
    } else {
      // Demo mode — animated progress bar
      if (playing === id) {
        clearInterval(intervals.current[id])
        setPlaying(null)
      } else {
        if (playing !== null) clearInterval(intervals.current[playing])
        setPlaying(id)
        intervals.current[id] = setInterval(() => {
          setProgress((p) => {
            if ((p[id] || 0) >= 100) { clearInterval(intervals.current[id]); return p }
            return { ...p, [id]: Math.min((p[id] || 0) + 0.4, 100) }
          })
        }, 150)
      }
    }
  }

  const allPods = [PODCAST_MAIN, ...PODCASTS]

  return (
    <section className="py-24 px-6" style={{ background: "#0EAAED" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Outfit', sans-serif" }}>
              — Podcast
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Escuchar cambia
              <br />
              <span className="italic font-light" style={{ color: "#E91E8C" }}>la perspectiva.</span>
            </h2>
          </div>
        </div>

        {/* Featured: Bienvenidos */}
        <div
          id="podcast"
          className="rounded-3xl p-8 mb-6 border relative overflow-hidden"
          style={{ background: "#8B31D4", borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 50%, #E91E8C 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#F5821F", color: "#1C1C1E", fontFamily: "'Outfit', sans-serif" }}
                >
                  ★ Episodio principal
                </span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Outfit', sans-serif" }}>
                  {duration[0] ? `${Math.floor(duration[0] / 60)}:${String(Math.round(duration[0] % 60)).padStart(2, "0")} min` : PODCAST_MAIN.duration}
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {PODCAST_MAIN.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 max-w-xl" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Outfit', sans-serif" }}>
                {PODCAST_MAIN.desc}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePlay(PODCAST_MAIN.id)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                  style={{ background: "white", color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>{playing === PODCAST_MAIN.id ? "⏸" : "▶"}</span>
                  {playing === PODCAST_MAIN.id ? "Pausar" : "Escuchar ahora"}
                </button>
              </div>
            </div>
            <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 self-center shadow-lg">
              <img
                src={podcastLogo}
                alt="Logo del podcast Más Allá del Tabú"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {playing === PODCAST_MAIN.id && (
            <div className="relative z-10 mt-6">
              <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress[PODCAST_MAIN.id] || 0}%`, background: "#F5821F" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Episode list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PODCASTS.map((pod) => (
            <div
              key={pod.id}
              className="rounded-2xl p-6 border transition-all duration-300"
              style={{
                background: playing === pod.id ? pod.color : "rgba(255,255,255,0.05)",
                borderColor: playing === pod.id ? pod.color : "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: playing === pod.id ? "rgba(255,255,255,0.2)" : "rgba(232,98,74,0.15)",
                      color: playing === pod.id ? "white" : "#E91E8C",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {pod.tag}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit', sans-serif" }}>
                    {pod.episode} · {duration[pod.id] ? `${Math.floor(duration[pod.id] / 60)}:${String(Math.round(duration[pod.id] % 60)).padStart(2, "0")} min` : pod.duration}
                  </span>
                </div>
                <button
                  onClick={() => togglePlay(pod.id)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shrink-0"
                  style={{ background: playing === pod.id ? "rgba(255,255,255,0.25)" : "#E91E8C" }}
                >
                  <span className="text-white text-sm">{playing === pod.id ? "⏸" : "▶"}</span>
                </button>
              </div>
              <h3
                className="text-lg font-bold mb-2 text-white leading-snug"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {pod.title}
              </h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Outfit', sans-serif" }}>
                {pod.desc}
              </p>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progress[pod.id] || 0}%`,
                    background: playing === pod.id ? "white" : "#E91E8C",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Hidden audio elements for MP3 files */}
        {allPods.map((pod) =>
          AUDIO_SRCS[pod.id] ? (
            <audio
              key={pod.id}
              ref={(el) => { audioRefs.current[pod.id] = el }}
              src={AUDIO_SRCS[pod.id]!}
              preload="metadata"
              style={{ display: "none" }}
              onLoadedMetadata={(e) => {
                const el = e.currentTarget
                setDuration((d) => ({ ...d, [pod.id]: el.duration }))
              }}
              onTimeUpdate={(e) => {
                const el = e.currentTarget
                if (el.duration)
                  setProgress((p) => ({ ...p, [pod.id]: (el.currentTime / el.duration) * 100 }))
              }}
              onEnded={() => setPlaying(null)}
            />
          ) : null
        )}
      </div>
    </section>
  )
}

function SimulationSection() {
  const [activeScenario, setActiveScenario] = useState(0)
  const [step, setStep] = useState(0)
  const [started, setStarted] = useState(false)
  const s = SIMULATION_SCENARIOS[activeScenario]

  const start = () => {
    setStep(0)
    setStarted(true)
  }

  const nextStep = () => {
    if (step < s.steps.length - 1) setStep((p) => p + 1)
  }

  const changeScenario = (i: number) => {
    setActiveScenario(i)
    setStep(0)
    setStarted(false)
  }

  return (
    <section id="actuar" className="py-24 px-6" style={{ background: "#FAFBFF" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 flex items-end gap-6">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
              — Simulaciones reales
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}
            >
              Practica antes
              <br />
              <span className="italic font-light" style={{ color: "#8B31D4" }}>de necesitarlo.</span>
            </h2>
          </div>
          <img src={mascota1} alt="Mascota acompañando las simulaciones" className="w-24 md:w-32 shrink-0 drop-shadow-lg" style={{ filter: "drop-shadow(0 8px 20px rgba(41,191,255,0.3))" }} />
        </div>
        <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>
          Situaciones reales. Conversaciones que podrías necesitar tener. Sin juicio, sin presión.
        </p>

        <div className="flex gap-3 mb-8 flex-wrap">
          {SIMULATION_SCENARIOS.map((sc, i) => (
            <button
              key={sc.id}
              onClick={() => changeScenario(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold border transition-all"
              style={{
                background: activeScenario === i ? "#8B31D4" : "white",
                borderColor: activeScenario === i ? "#8B31D4" : "#EDE8F7",
                color: activeScenario === i ? "white" : "#3C3C3E",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {sc.title}
            </button>
          ))}
        </div>

        <div className="rounded-3xl border overflow-hidden" style={{ background: "white", borderColor: "#EDE8F7" }}>
          <div className="px-6 py-5 border-b" style={{ borderColor: "#F0EDE8", background: "#FDFBF8" }}>
            <h3 className="font-semibold text-base" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
              {s.title}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "#8C8C8E", fontFamily: "'Outfit', sans-serif" }}>
              {s.desc}
            </p>
          </div>

          <div className="p-6 min-h-64">
            {!started ? (
              <div className="flex flex-col items-center justify-center h-48 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(107,26,42,0.08)" }}>
                  <span className="text-xl">💬</span>
                </div>
                <p className="text-sm mb-6" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif", maxWidth: 280 }}>
                  Esta simulación te ayuda a practicar conversaciones difíciles en un espacio seguro.
                </p>
                <button
                  onClick={start}
                  className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
                >
                  Iniciar simulación
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {s.steps.slice(0, step + 1).map((msg, i) => (
                  <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-xs md:max-w-sm">
                      <div
                        className="text-xs font-semibold mb-1"
                        style={{
                          color: msg.isUser ? "#8B31D4" : "#5C5C5E",
                          fontFamily: "'Outfit', sans-serif",
                          textAlign: msg.isUser ? "right" : "left",
                        }}
                      >
                        {msg.speaker}
                      </div>
                      <div
                        className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                        style={{
                          background: msg.isUser ? "#8B31D4" : "#F5F2ED",
                          color: msg.isUser ? "white" : "#1C1C1E",
                          fontFamily: "'Outfit', sans-serif",
                          borderTopRightRadius: msg.isUser ? 4 : undefined,
                          borderTopLeftRadius: !msg.isUser ? 4 : undefined,
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {started && step < s.steps.length - 1 && (
            <div className="px-6 pb-6">
              <button
                onClick={nextStep}
                className="w-full py-3 rounded-xl font-semibold text-sm border transition-all hover:bg-gray-50"
                style={{ borderColor: "#EDE8F7", color: "#3C3C3E", fontFamily: "'Outfit', sans-serif" }}
              >
                Continuar →
              </button>
            </div>
          )}

          {started && step === s.steps.length - 1 && (
            <div className="px-6 pb-6 pt-2">
              <div
                className="rounded-xl p-4 mb-4"
                style={{ background: "rgba(107,26,42,0.06)", borderLeft: "3px solid #8B31D4" }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
                  Simulación completada
                </p>
                <p className="text-sm" style={{ color: "#3C3C3E", fontFamily: "'Outfit', sans-serif" }}>
                  Puedes hacerlo. Pedir ayuda es un acto de valentía. Cuando llegue el momento, recuerda que tienes el derecho y la capacidad de hablar.
                </p>
              </div>
              <button
                onClick={start}
                className="text-sm font-medium"
                style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
              >
                Repetir →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const AI_RESPONSES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["hola", "buenos días", "buenas tardes", "buenas noches", "hi", "buen día"],
    reply: "¡Hola! 💜 Soy el acompañante virtual de **Más Allá del Tabú**. Estoy aquí para orientarte sobre temas como violencia de género, embarazo adolescente, anticoncepción, matrimonio infantil, tus derechos y cómo acceder a ayuda en Perú.\n\nPuedes preguntarme lo que quieras — aquí no hay preguntas tontas y todo es confidencial. ¿En qué te puedo ayudar hoy?",
  },
  {
    keywords: ["qué es violencia", "tipos de violencia", "formas de violencia", "violencia de género", "qué es la violencia"],
    reply: "La **violencia de género** tiene muchas formas — no solo golpes. Según el MIMP y la Ley N.° 30364, incluye:\n\n• **Física:** golpes, empujones, jalones de cabello, cualquier daño corporal.\n• **Psicológica:** insultos, amenazas, humillaciones, control constante, aislamiento. Esta es la más frecuente y a veces la más difícil de reconocer.\n• **Sexual:** tocamientos no consentidos, presión para tener relaciones, envío de imágenes sin permiso.\n• **Económica:** quitarte dinero, impedirte trabajar o estudiar, controlar todos tus gastos.\n\nImportante: la violencia psicológica es igual de grave que la física aunque no deje marcas visibles. Si reconoces alguna de estas situaciones, puedes hablarme más al respecto. 💜",
  },
  {
    keywords: ["me golpea", "me pega", "me agrede", "me lastima", "me hace daño", "violencia física"],
    reply: "Lo que describes es **violencia física** y es un delito en Perú. No es tu culpa y no tienes que tolerarlo.\n\nLo primero: ¿estás en un lugar seguro ahora mismo? Si hay peligro inmediato, llama al **105 (Policía)** o al **116 (Bomberos)**.\n\nSi ya estás fuera de peligro, tienes estas opciones:\n• **Línea 100** (gratuita, 24h): orientación y derivación al servicio más cercano.\n• **CEM más cercano**: atención psicológica, legal y social — sin costo.\n• **Denuncia en comisaría**: la Policía está obligada a recibirla aunque no tengas lesiones visibles.\n\nNo necesitas tener pruebas perfectas para pedir ayuda. ¿Quieres que te explique cómo es el proceso de denuncia paso a paso?",
  },
  {
    keywords: ["violencia psicológica", "me insulta", "me humilla", "me controla", "me amenaza", "me grita", "me ignora", "me menosprecia"],
    reply: "La **violencia psicológica** es tan real como la física, aunque a veces sea más difícil de nombrar. Incluye insultos, humillaciones, amenazas, control del teléfono o redes, aislarte de amigos y familia, hacerte sentir que todo es tu culpa, o ignorarte como castigo.\n\nEn Perú, la Ley N.° 30364 reconoce esto como violencia y las instituciones están obligadas a actuar. No necesitas tener golpes para denunciar.\n\nAlgunos indicadores de que estás en esta situación:\n• Sientes que «caminas sobre cáscaras de huevo» para no molestarlo/a.\n• Te ha dicho cosas como «sin mí no eres nada» o «nadie te va a creer».\n• Has dejado de ver a personas que quieres por presión de esa persona.\n\nPuedes llamar a la **Línea 100** para hablar con alguien capacitado. ¿Quieres contarme más sobre lo que está pasando?",
  },
  {
    keywords: ["acoso", "me acosa", "hostigamiento", "me persigue", "me sigue", "me manda mensajes", "acoso sexual", "acoso callejero"],
    reply: "El **acoso** — ya sea callejero, escolar o digital — es una forma de violencia sexual que está tipificada en el Código Penal peruano (Ley N.° 27942 sobre hostigamiento sexual).\n\nSe considera acoso cuando alguien:\n• Te hace comentarios sobre tu cuerpo sin tu consentimiento.\n• Te manda mensajes, fotos o videos de contenido sexual que no pediste.\n• Te sigue, te espera o aparece repetidamente en tus espacios.\n• Te presiona para salir o tener contacto aunque hayas dicho que no.\n\n**¿Qué puedes hacer?**\n• Guarda capturas de pantalla, fechas y mensajes como evidencia.\n• Repórtalo en la **Línea 100** o al **Chat 100** (chat100.pe).\n• Si ocurre en el colegio, puedes acudir a la dirección o a la **DEMUNA** de tu municipio.\n• Si es por redes sociales, también puedes denunciarlo directamente en la plataforma.\n\nNadie tiene derecho a hacerte sentir incómoda/o en tu propio espacio. 💜",
  },
  {
    keywords: ["violencia sexual", "me violaron", "abuso sexual", "me tocaron", "me tocó", "tocamiento indebido", "me forzó", "me obligó"],
    reply: "Lo que describes es una situación de **violencia sexual** y quiero que sepas algo importante: no es tu culpa, sin importar cómo ibas vestida/o, dónde estabas ni qué pasó antes.\n\n**Si fue reciente (menos de 72 horas):**\nTienes derecho a ir a cualquier establecimiento de salud del MINSA y recibir el **Kit de Emergencia (Protocolo DS N.° 083)** de forma gratuita y sin necesitar autorización de nadie. Este kit incluye medicamentos para prevenir ITS y embarazo. Es un derecho — el personal de salud no puede negártelo.\n\n**Pasos que puedes seguir:**\n1. Ir a un centro de salud o CEM lo antes posible.\n2. Llamar a la **Línea 100** para orientación inmediata.\n3. Si quieres denunciar: la Policía o la Fiscalía están obligadas a recibirte.\n\nNo tienes que enfrentar esto sola/o. ¿Estás en un lugar seguro ahora?",
  },
  {
    keywords: ["embarazada", "estoy embarazada", "quedé embarazada", "embarazo adolescente", "salí embarazada"],
    reply: "Antes de responder, ¿me puedes decir un poco más sobre tu situación? Lo que necesitas saber cambia bastante dependiendo de si buscas información general, si eres menor de edad, o si estás en una situación difícil.\n\nLo que sí te puedo decir ahora:\n• Las adolescentes embarazadas tienen **derecho a continuar en el colegio** — ninguna institución puede expulsarte ni impedirte asistir (MINEDU lo garantiza).\n• Tienes derecho a **atención médica gratuita** en cualquier centro de salud MINSA, sin necesitar autorización de tus padres.\n• Si el embarazo es consecuencia de violencia sexual, existen rutas de atención integral específicas.\n\nSi eres menor de 14 años: el personal de salud tiene la **obligación legal** de activar una ruta de protección, porque en esos casos el embarazo es siempre consecuencia de una violación según la ley peruana.\n\n¿Quieres que te explique alguno de estos puntos con más detalle?",
  },
  {
    keywords: ["anticonceptivo", "método anticonceptivo", "pastilla anticonceptiva", "condón", "preservativo", "implante", "diu", "inyectable", "planificación familiar"],
    reply: "Los **métodos anticonceptivos modernos** disponibles para adolescentes en el Perú, según la Norma Técnica del MINSA (NT 032), son:\n\n• **Condón masculino y femenino:** el único que también protege contra ITS. Uso correcto = más del 98% de efectividad.\n• **Pastillas anticonceptivas:** se toman a diario. Muy efectivas si no se olvidan.\n• **Inyectable mensual o trimestral:** conveniente si no quieres recordarlo cada día.\n• **Implante subdérmico:** se coloca en el brazo, dura hasta 3 años y es uno de los más efectivos (>99%).\n• **DIU (dispositivo intrauterino):** intrauterino, dura hasta 10 años, reversible.\n\n**¿Cómo acceder?**\nPuedes pedirlos en cualquier **centro de salud del MINSA** de forma gratuita y confidencial — **sin necesitar autorización de tus padres o de ningún adulto**. Esto está garantizado por ley.\n\n¿Quieres saber más sobre alguno en particular, o sobre la pastilla de emergencia (AOE)?",
  },
  {
    keywords: ["aoe", "píldora del día siguiente", "pastilla de emergencia", "anticoncepción de emergencia", "emergencia", "píldora"],
    reply: "La **AOE (Anticoncepción Oral de Emergencia)**, también llamada «pastilla del día siguiente», es un método de emergencia para usar después de una relación sexual sin protección o cuando falló el método que usabas.\n\n**Lo que debes saber:**\n• **No es abortiva.** Funciona retrasando o impidiendo la ovulación. Si ya hubo fertilización, no actúa.\n• Es más efectiva cuanto antes la tomes: dentro de las **primeras 24 horas** tiene >95% de efectividad; hasta 72 horas sigue siendo eficaz.\n• En Perú es **legal** y está disponible en farmacias y en centros de salud MINSA.\n• Tienes derecho a solicitarla **sin receta y sin autorización de un adulto**.\n\n**Importante:** la AOE no protege contra ITS (infecciones de transmisión sexual) ni reemplaza un método anticonceptivo regular. Si la necesitas frecuentemente, puede ser útil hablar con un médico sobre métodos más consistentes.\n\n¿Tienes alguna duda específica sobre cómo funciona o cómo conseguirla?",
  },
  {
    keywords: ["condón", "preservativo", "cómo usar condón", "cómo se usa el condón"],
    reply: "El **condón** es el único método que protege al mismo tiempo contra embarazo no planificado **e** infecciones de transmisión sexual (ITS como VIH, sífilis, gonorrea).\n\n**Uso correcto paso a paso:**\n1. Revisa la fecha de vencimiento y que el empaque esté intacto.\n2. Abre el envoltorio con cuidado — nunca con dientes o tijeras.\n3. Colócalo antes de cualquier contacto genital, no solo antes de la penetración.\n4. Deja un espacio en la punta para recoger el semen.\n5. Al terminar, retíralo con cuidado y desecha en la basura (nunca en el inodoro).\n\nUn condón usado correctamente tiene más del **98% de efectividad**. La mayoría de fallos ocurren por uso incorrecto.\n\nPuedes conseguir condones gratuitamente en centros de salud MINSA. ¿Tienes alguna otra duda?",
  },
  {
    keywords: ["its", "infección de transmisión sexual", "enfermedades de transmisión", "vih", "sida", "sífilis", "gonorrea", "clamidia", "herpes genital"],
    reply: "Las **ITS (Infecciones de Transmisión Sexual)** son infecciones que se transmiten principalmente por contacto sexual sin protección. Las más comunes en adolescentes son:\n\n• **VIH/SIDA:** no tiene cura, pero con tratamiento antirretroviral una persona puede tener una vida plena y normal.\n• **Sífilis:** tratable con antibióticos si se detecta a tiempo. Puede ser grave si no se trata.\n• **Gonorrea y clamidia:** muy comunes, frecuentemente sin síntomas. Tratables con antibióticos.\n• **Herpes genital:** no tiene cura, pero los brotes se pueden controlar con medicación.\n• **VPH (Virus del Papiloma Humano):** existe vacuna, incluida en el calendario de vacunación escolar en Perú.\n\n**Prevención:** el **condón** usado correctamente desde el inicio del contacto sexual es la protección más efectiva.\n\n**Diagnóstico:** puedes hacerte pruebas en cualquier centro de salud MINSA. Muchas son gratuitas y confidenciales. ¿Hay alguna ITS específica sobre la que quieras saber más?",
  },
  {
    keywords: ["matrimonio infantil", "matrimonio forzado", "unión temprana", "me quieren casar", "me obligan a casarme", "convivencia forzada"],
    reply: "El **matrimonio y las uniones tempranas** son reconocidos por UNICEF, el MIMP y la Defensoría del Pueblo como una forma de violencia contra niñas y adolescentes, aunque en muchos contextos se presenten como algo «normal» o «tradicional».\n\n**¿Por qué es un problema?**\n• Interrumpe la educación: el 36% de las desvinculaciones escolares en Perú están relacionadas con maternidad o uniones tempranas (UNFPA).\n• Aumenta el riesgo de violencia doméstica dentro de la pareja.\n• Perpetúa ciclos de pobreza — las madres adolescentes ganan un 24% menos a lo largo de su vida.\n• Una decisión tomada bajo presión familiar o económica **no es una decisión libre**.\n\n**En Perú, la ley establece** que ninguna persona menor de 18 años puede contraer matrimonio sin autorización especial, y las uniones de hecho entre adultos y menores pueden constituir delitos.\n\nSi sientes presión para unirte o casarte, puedes contactar a la **DEMUNA** de tu municipio o llamar a la **Línea 100**. ¿Estás tú en esta situación, o es por información general?",
  },
  {
    keywords: ["mgf", "mutilación genital", "mutilación femenina", "ablación"],
    reply: "La **Mutilación Genital Femenina (MGF)** es cualquier procedimiento que modifica o extirpa total o parcialmente los genitales externos femeninos sin razón médica. La OMS la clasifica como una grave violación de los derechos humanos y una forma de violencia de género.\n\n**Tipos:**\n• Tipo I: extirpación del clítoris o su capuchón.\n• Tipo II: extirpación del clítoris y los labios menores.\n• Tipo III (infibulación): la más grave — cierre casi total de la vagina.\n• Tipo IV: otros procedimientos dañinos (pinchazos, cortes, cauterización).\n\n**Consecuencias:** dolor crónico, infecciones, complicaciones en el parto, traumas psicológicos, y en casos graves, la muerte.\n\nNo es una práctica extendida en Perú, pero existe en comunidades con tradiciones de ciertos países y es importante conocerla. Si conoces o sospechas un caso, puedes reportarlo a la **Línea 100** o al **CEM**. La respuesta debe ser de protección, nunca de juicio cultural.",
  },
  {
    keywords: ["denunciar", "denuncia", "cómo denuncio", "quiero denunciar", "reportar", "anónimo", "denuncia anónima"],
    reply: "Denunciar puede sentirse difícil, pero tienes más opciones de las que quizás crees:\n\n**Opciones de denuncia en Perú:**\n\n1. **Línea 100 (gratuita, 24h):** puedes llamar anónimamente. Te orientarán y, si quieres, derivarán el caso al CEM más cercano.\n2. **Chat 100 (chat100.pe):** denuncia por escrito sin dar tu nombre. Funciona las 24h.\n3. **CEM (Centro Emergencia Mujer):** atención presencial, gratuita. Abren contigo un expediente y te acompañan en todo el proceso.\n4. **Comisaría:** la Policía está obligada legalmente a recibir tu denuncia aunque no tengas «pruebas perfectas».\n5. **Fiscalía:** puedes ir directamente sin pasar por la Policía.\n\n**Si quieres ser anónima/o:** la Línea 100 y el Chat 100 permiten reportes sin revelar tu identidad. Lo que más ayuda en ese caso es describir qué ocurre, en qué zona o distrito, y si hay menores involucrados.\n\n¿Quieres que te explique cómo es el proceso completo, o tienes una situación específica en mente?",
  },
  {
    keywords: ["línea 100", "linea 100", "llamo al 100", "cómo funciona la línea 100", "qué pasa si llamo"],
    reply: "La **Línea 100** es el servicio nacional de orientación frente a violencia familiar y sexual, operado por el MIMP (Ministerio de la Mujer y Poblaciones Vulnerables).\n\n**Características:**\n• **Gratuita:** desde cualquier teléfono fijo o celular, sin costo.\n• **Confidencial:** no queda registro de tu llamada en la factura.\n• **Disponible las 24 horas**, los 7 días de la semana, incluyendo feriados.\n• Atendida por **profesionales en psicología y trabajo social**.\n\n**¿Qué pasa cuando llamas?**\n1. Un/a operador/a responde y te pregunta cómo puede ayudarte.\n2. Puedes contar lo que está pasando a tu ritmo — no tienes que saber todo de antemano.\n3. Si lo necesitas, te derivarán al **CEM más cercano** a tu domicilio.\n4. Si hay peligro inmediato, coordinarán con la Policía.\n\n**No necesitas estar segura/o de nada para llamar.** Puedes llamar con dudas, con miedo, o simplemente para informarte. ¿Te gustaría saber qué decir cuando contestan?",
  },
  {
    keywords: ["cem", "centro emergencia mujer", "qué es el cem", "cómo funciona el cem"],
    reply: "Los **Centros Emergencia Mujer (CEM)** son servicios del Estado peruano (MIMP) que atienden casos de violencia familiar y sexual. Están en todo el país — incluyendo comisarías, hospitales y municipios — y son completamente gratuitos.\n\n**¿Qué servicios ofrecen?**\n• **Psicológico:** acompañamiento emocional y terapia.\n• **Social:** orientación sobre redes de apoyo y recursos.\n• **Legal:** asesoría jurídica y acompañamiento en denuncias.\n• **Defensa judicial:** representación en procesos legales si lo necesitas.\n\n**¿Qué debo saber antes de ir?**\n• No necesitas cita previa en casos de urgencia.\n• Tienen la obligación de evitar la **revictimización**: no tendrás que repetir tu historia muchas veces.\n• Los menores de edad son atendidos con protocolos especiales de protección.\n• Puedes ir sola/o o acompañada/o.\n\nPuedes encontrar el CEM más cercano llamando a la **Línea 100** o consultando el directorio del MIMP en su web. ¿Tienes alguna duda sobre qué esperar cuando llegas?",
  },
  {
    keywords: ["demuna", "qué es la demuna", "defensoría municipal", "derechos de niños"],
    reply: "La **DEMUNA (Defensoría Municipal del Niño, Niña y Adolescente)** es un servicio gratuito de las municipalidades peruanas que protege los derechos de menores de edad.\n\n**¿Qué puede hacer por ti?**\n• Intervenir si un colegio te discrimina por embarazo o te impide asistir.\n• Mediar y orientar en casos de violencia familiar o abandono.\n• Acompañarte en procesos de reconocimiento de paternidad o alimentos.\n• Derivarte al CEM u otras instituciones especializadas.\n• Recibir denuncias de maltrato o abuso contra menores.\n\n**¿Dónde está?**\nEn la municipalidad distrital de tu zona. Puedes ir directamente o llamar para consultar el horario.\n\nA diferencia del CEM, la DEMUNA está específicamente orientada a menores de edad y opera desde el nivel local — lo que la hace más accesible en muchas zonas rurales o periurbanas. ¿Necesitas ayuda para encontrar la DEMUNA más cercana?",
  },
  {
    keywords: ["mi derecho", "tengo derecho", "derechos adolescentes", "derechos sexuales", "derechos reproductivos", "qué derechos tengo"],
    reply: "Como adolescente en Perú, tienes derechos reconocidos por el Código de los Niños y Adolescentes, la Ley N.° 30364 y normas del MINSA y MINEDU:\n\n**Derechos de salud sexual y reproductiva:**\n• Acceso gratuito a métodos anticonceptivos sin autorización de tus padres.\n• Atención médica confidencial en salud reproductiva.\n• El kit de emergencia tras una agresión sexual — sin barreras ni autorizaciones.\n\n**Derechos frente a la violencia:**\n• A denunciar sin tener «pruebas perfectas».\n• A que la Policía y el Ministerio Público te atiendan obligatoriamente.\n• A no ser revictimizada/o durante los procesos.\n\n**Derechos educativos:**\n• A continuar en el colegio si estás embarazada — ninguna institución puede expulsarte.\n• A recibir educación sexual integral como parte del currículo.\n\n**Derecho a la información:**\n• A recibir información veraz sobre tu salud, cuerpo y derechos — de forma comprensible y sin ser juzgada/o.\n\n¿Quieres que profundice en alguno de estos derechos en particular?",
  },
  {
    keywords: ["colegio embarazo", "me expulsan del colegio", "no me dejan entrar", "escuela embarazada", "estudiar embarazada", "educación embarazo"],
    reply: "Ningún colegio en el Perú puede **expulsarte, impedirte asistir o discriminarte** por estar embarazada. Esto está protegido por:\n\n• La **Ley N.° 26842** (Ley General de Salud)\n• La **Resolución Ministerial del MINEDU** que garantiza la permanencia escolar de adolescentes embarazadas o madres.\n• La **Convención sobre los Derechos del Niño** (ratificada por Perú).\n\n**¿Qué puedes hacer si te están discriminando?**\n1. Reportarlo a la **DEMUNA** de tu municipio — pueden intervenir directamente ante la institución educativa.\n2. Llamar a la **Línea 100** para orientación.\n3. Presentar una queja ante la **UGEL** (Unidad de Gestión Educativa Local) de tu zona.\n4. La **Defensoría del Pueblo** también recibe este tipo de denuncias.\n\nTu educación es un derecho. La permanencia escolar es fundamental para tu proyecto de vida. ¿Estás pasando por esta situación ahora mismo?",
  },
  {
    keywords: ["señales de violencia", "señales de alerta", "cómo sé si hay violencia", "cómo reconocer violencia", "indicadores de violencia"],
    reply: "Reconocer la violencia puede ser difícil, especialmente cuando viene de alguien cercano o cuando la situación se normalizó con el tiempo. Estas son las principales señales, según el MIMP y el protocolo de actuación de los CEM:\n\n**Señales físicas:**\n• Lesiones que no coinciden con la explicación que se da.\n• Dolor o irritación en zona genital o anal.\n• Infecciones de transmisión sexual.\n• Embarazo temprano no deseado.\n\n**Señales conductuales:**\n• Cambios bruscos de humor o actitud.\n• Aislamiento de amigos y familia.\n• Bajo rendimiento o abandono escolar repentino.\n• Conductas sexualizadas que no corresponden con la edad.\n• Pesadillas frecuentes, dificultad para dormir.\n\n**Señales emocionales:**\n• Depresión o ansiedad persistente.\n• Autolesiones o pensamientos de hacerse daño.\n• Miedo inexplicable a personas o lugares específicos.\n• Muy baja autoestima, sentirse «culpable de todo».\n\nNinguna señal por sí sola confirma una situación de violencia, pero cuando varias aparecen juntas, es importante actuar. ¿Lo preguntas por alguien en particular?",
  },
  {
    keywords: ["relación tóxica", "relación dañina", "mi pareja me controla", "celos", "me revisa el teléfono", "me controla", "relación abusiva"],
    reply: "Una relación puede ser dañina aunque no haya golpes. Algunas señales de que una relación de pareja es **tóxica o abusiva**:\n\n• Te revisa el teléfono, tus redes o tus mensajes sin permiso.\n• Decide con quién puedes juntarte o a dónde puedes ir.\n• Te hace sentir culpable cuando no haces lo que quiere.\n• Te insulta o menosprecia, a veces en público o «en broma».\n• Si discuten, sientes que tienes que caminar con cuidado para no molestarlo/a.\n• Te ha amenazado con hacerse daño o con dejarte si no le obedeces.\n• Los celos extremos se presentan como «amor» pero en realidad son control.\n\n**Una relación sana** se basa en respeto mutuo, comunicación, confianza y libertad — no en miedo ni en obediencia.\n\nEl **control y la manipulación** son formas de violencia psicológica reconocidas por la ley. Si te identificas con alguna de estas situaciones, puedes hablar con alguien del **CEM** o llamar a la **Línea 100** para orientación. ¿Quieres contarme algo más sobre tu situación?",
  },
  {
    keywords: ["kit de emergencia", "kit emergencia minsa", "protocol 083", "pastilla después de violación", "qué hacer si me violaron"],
    reply: "Si fuiste víctima de una agresión sexual **reciente (idealmente antes de 72 horas)**, tienes derecho a recibir el **Kit de Emergencia** en cualquier establecimiento de salud del MINSA.\n\nEste kit, normado por el **Decreto Supremo N.° 083-2003-PCM**, incluye:\n• Antivirales para prevenir el VIH (profilaxis post-exposición).\n• Antibióticos para prevenir ITS (gonorrea, sífilis, clamidia).\n• **Anticoncepción de emergencia (AOE)** para prevenir embarazo no deseado.\n• Vacuna contra hepatitis B (si no la tienes).\n\n**¿Cómo acceder?**\n• Ve a cualquier hospital, centro de salud o clínica MINSA.\n• El personal de salud **no puede negarte** este kit por ningún motivo.\n• **No necesitas hacer una denuncia previa** para recibirlo.\n• Si te lo niegan, puedes reportarlo al **SUSALUD** (0800-10828, gratuito).\n\nAdemás de la atención médica, tienes derecho a acompañamiento psicológico. ¿Estás en un lugar seguro ahora mismo?",
  },
  {
    keywords: ["miedo", "asustada", "asustado", "tengo miedo", "no sé qué hacer", "estoy perdida", "no sé a quién acudir"],
    reply: "Que tengas miedo tiene sentido. Es una respuesta completamente normal cuando estás en una situación difícil o confusa. No significa que estés exagerando ni que debas resolverlo sola/o.\n\nLo más importante ahora: **no tienes que tener todo claro para pedir ayuda**. Puedes llamar al **100** o escribir al **Chat 100** aunque no sepas exactamente qué está pasando. Ellos están entrenados para escucharte y ayudarte a ordenar las cosas.\n\nAlgunas cosas que a veces ayudan:\n• Habla con alguien de confianza — un adulto, un familiar, una amiga cercana.\n• Escribe lo que sientes, aunque sea en privado — ayuda a ordenar los pensamientos.\n• Recuerda que hay personas cuyo trabajo es exactamente acompañarte en esto.\n\nEstoy aquí si quieres contarme más sobre lo que está pasando. 💜",
  },
  {
    keywords: ["no me creen", "nadie me cree", "me dijeron que estaba mintiendo", "siento que es mi culpa", "me dijeron que es mi culpa"],
    reply: "Que no te crean o que te hagan sentir culpable es algo que pasa con demasiada frecuencia, y es profundamente injusto. Lo que estás sintiendo es válido.\n\nAlgunas cosas que son importantes que sepas:\n• **No necesitas que todos te crean para buscar ayuda.** Los servicios como la Línea 100 y los CEM están diseñados para escucharte sin cuestionar.\n• La violencia **nunca es culpa de quien la recibe** — sin importar qué ropa llevabas, dónde estabas, o qué pasó antes.\n• Las personas que minimizan o niegan la violencia a veces lo hacen por incomodidad o ignorancia, no porque tengan razón.\n\nEl **CEM** y los operadores de la **Línea 100** tienen protocolos específicos para evitar la revictimización — es decir, están capacitados para no hacerte sentir peor al contar tu historia.\n\n¿Quieres que te oriente sobre cómo acceder a esos servicios?",
  },
  {
    keywords: ["gracias", "thank you", "muchas gracias", "me ayudaste", "me sirvió"],
    reply: "De nada 💜 Me alegra que esto haya sido útil. Recuerda que esta plataforma, la **Línea 100** y los **CEM** están siempre disponibles si necesitas más orientación o apoyo.\n\nNo estás sola/o — y pedir información o ayuda es un acto de valentía. Si en algún momento necesitas hablar de algo más, aquí estaré.",
  },
]

function getAIReply(input: string): string {
  const lower = input.toLowerCase()
  // Priority: check longer/more specific keyword phrases first
  const sorted = [...AI_RESPONSES].sort((a, b) => {
    const aMax = Math.max(...a.keywords.map((k) => k.length))
    const bMax = Math.max(...b.keywords.map((k) => k.length))
    return bMax - aMax
  })
  const match = sorted.find((r) => r.keywords.some((k) => lower.includes(k)))
  if (match) return match.reply
  // Fallback with a more thoughtful generic response
  if (lower.includes("?") || lower.length > 30) {
    return "Entiendo que tienes una pregunta importante. Para darte la mejor orientación, ¿puedes contarme un poco más sobre lo que quieres saber? También puedes:\n\n• Llamar a la **Línea 100** (gratuita, 24h) para hablar con un/a profesional.\n• Escribir al **Chat 100** (chat100.pe) si prefieres no llamar.\n• Explorar las secciones de esta plataforma — hay información detallada sobre violencia, anticoncepción, derechos y más."
  }
  return "Cuéntame más sobre lo que quieres saber 💜 Puedo orientarte sobre señales de violencia, métodos anticonceptivos, tus derechos como adolescente, cómo denunciar, o cómo acceder a servicios de ayuda en Perú."
}

function AICompanionChat() {
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string }[]>([
    { from: "ai", text: "Hola 💜 Soy tu acompañante virtual. Puedo orientarte sobre señales de violencia, tus derechos, cómo pedir ayuda o qué métodos anticonceptivos existen. ¿En qué puedo ayudarte hoy?" },
  ])
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  const send = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg = { from: "user" as const, text: trimmed }
    const aiText = getAIReply(trimmed)
    setMessages((prev) => [...prev, userMsg, { from: "ai", text: aiText }])
    setInput("")
  }

  return (
    <div className="fixed bottom-24 right-6 z-[9990]" style={{ maxWidth: 340 }}>
      {open && (
        <div
          className="mb-3 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            background: "#FAFBFF",
            border: "1.5px solid #EDE8F7",
            width: 320,
            maxHeight: 440,
          }}
        >
          {/* Header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #8B31D4, #E91E8C)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base" style={{ background: "rgba(255,255,255,0.2)" }}>
              💜
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Acompañante AYNI</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}>Orientación educativa · no reemplaza servicios de emergencia</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-lg leading-none">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 200, maxHeight: 260 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[90%] px-3 py-2 rounded-2xl text-xs leading-relaxed"
                  style={{
                    background: m.from === "user" ? "#8B31D4" : "#F0EDE8",
                    color: m.from === "user" ? "white" : "#1C1C1E",
                    fontFamily: "'Outfit', sans-serif",
                    borderTopRightRadius: m.from === "user" ? 4 : undefined,
                    borderTopLeftRadius: m.from === "ai" ? 4 : undefined,
                    whiteSpace: "pre-wrap",
                  }}
                  dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                />
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 pb-4 pt-2 flex gap-2 border-t" style={{ borderColor: "#EDE8F7" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 px-3 py-2 rounded-xl text-xs outline-none border"
              style={{
                background: "#F5F2FF",
                borderColor: "#E0D9F5",
                color: "#1C1C1E",
                fontFamily: "'Outfit', sans-serif",
              }}
            />
            <button
              onClick={send}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90 shrink-0"
              style={{ background: "#8B31D4" }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="ml-auto flex items-center gap-2 px-4 py-3 rounded-full shadow-xl text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #8B31D4, #E91E8C)",
          fontFamily: "'Outfit', sans-serif",
          boxShadow: "0 4px 20px rgba(139,49,212,0.45)",
          display: "flex",
        }}
        title="Acompañante AYNI — orientación educativa"
      >
        <span style={{ fontSize: 16 }}>💜</span>
        {open ? "Cerrar" : "Orientación AYNI"}
      </button>
    </div>
  )
}

const CAROUSEL_SLIDES = [
  { src: carousel1, alt: "Bienvenido/as a Más Allá del Tabú — slide 1" },
  { src: carousel2, alt: "Personaje del podcast anunciando Más Allá del Tabú — slide 2" },
  { src: carousel3, alt: "Personaje azul corriendo — slide 3" },
  { src: carousel4, alt: "TABÚ — personaje rosa con pulgares arriba — slide 4" },
  { src: carouselNew2, alt: "Campaña AYNI — imagen 2" },
  { src: carouselNew3, alt: "Campaña AYNI — imagen 3" },
  { src: carouselNew4, alt: "Campaña AYNI — imagen 4" },
]

const COMICS = [
  { src: comic1, title: "Una amiga te cuenta...", subtitle: "Reconociendo el control en una relación", tag: "Violencia de pareja" },
  { src: comic2, title: "Te invitan a algo que no te hace sentir bien", subtitle: "Presión de pares y tus derechos", tag: "Presión social" },
  { src: comic3, title: "Alguien que te gusta no te deja cómodo/a", subtitle: "Control digital y límites en relaciones", tag: "Relaciones sanas" },
]

function ComicSection() {
  const [slide, setSlide] = useState(0)
  const [animDir, setAnimDir] = useState<"left" | "right">("left")
  const [isAnimating, setIsAnimating] = useState(false)
  const total = CAROUSEL_SLIDES.length
  const [comicIdx, setComicIdx] = useState(0)
  const [comicVisible, setComicVisible] = useState(true)

  const goTo = (next: number, dir: "left" | "right") => {
    if (isAnimating) return
    setAnimDir(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setSlide(next)
      setIsAnimating(false)
    }, 350)
  }

  const prev = () => goTo((slide - 1 + total) % total, "right")
  const next = () => goTo((slide + 1) % total, "left")

  useEffect(() => {
    const t = setInterval(() => next(), 4000)
    return () => clearInterval(t)
  }, [slide, isAnimating])

  const changeComic = (idx: number) => {
    if (idx === comicIdx) return
    setComicVisible(false)
    setTimeout(() => { setComicIdx(idx); setComicVisible(true) }, 300)
  }

  return (
    <section id="experiencias" className="py-24 px-6" style={{ background: "#FAFBFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
            — Experiencias
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
            Conoce el mundo <span className="italic font-light" style={{ color: "#8B31D4" }}>Más Allá del Tabú.</span>
          </h2>
        </div>

        {/* Campaña visual — original slides grid */}
        <div id="campana-visual" className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>— Campaña visual</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[carousel1, carousel2, carousel3, carousel4].map((src, i) => {
              const dotColors = ["#E91E8C","#8B31D4","#F5821F","#29BFFF"]
              const labels = ["Bienvenido/as", "Personaje podcast", "Personaje azul", "TABÚ"]
              return (
                <div key={i} className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow" style={{ aspectRatio: "3/4" }}>
                  <img src={src} alt={labels[i]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: dotColors[i] }}>
                    {i + 1}
                  </div>
                </div>
              )
            })}
          </div>

          {/* AYNI campaign images — full-width vertical stack */}
          <div className="flex flex-col gap-5">
            {[
              { src: carouselNew2, label: "Campaña AYNI — imagen 2", color: "#E91E8C" },
              { src: carouselNew3, label: "Campaña AYNI — imagen 3", color: "#8B31D4" },
              { src: carouselNew4, label: "Campaña AYNI — imagen 4", color: "#F5821F" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group w-full">
                <img src={item.src} alt={item.label} className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]" style={{ maxHeight: 640 }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between" style={{ background: "linear-gradient(to top, rgba(26,6,48,0.7) 0%, transparent 100%)" }}>
                  <span className="text-xs font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: item.color, fontFamily: "'Outfit', sans-serif" }}>AYNI</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historietas */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>— Historietas</p>

          {/* AYNI Historieta — páginas a la vista, una al lado de la otra */}
          <div className="mb-6 rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(139,49,212,0.35)", background: "linear-gradient(135deg, #1A0630 0%, #2D0F5E 100%)" }}>
            <div className="px-6 pt-6 pb-4">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: "#E91E8C", color: "white", fontFamily: "'Outfit', sans-serif" }}>
                📖 Historieta principal · Campaña AYNI
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>
                SIENTO, PERO... <span className="italic font-light" style={{ color: "#E91E8C" }}>no es el momento.</span>
              </h3>
            </div>
            <div className="px-4 pb-4">
              <img src={comicHorizontal} alt="Historieta AYNI — SIENTO, PERO... no es el momento" className="w-full rounded-2xl shadow-lg" />
            </div>
          </div>

          {/* Other comics grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMICS.map((c, i) => {
              const tagColors = ["#A8C923", "#29BFFF", "#F5821F"]
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: "#EDE8F7" }}>
                    <img src={c.src} alt={c.title} className="w-full object-cover" style={{ aspectRatio: "4/3", objectPosition: "top" }} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full self-start" style={{ background: `${tagColors[i]}18`, color: tagColors[i], fontFamily: "'Outfit', sans-serif" }}>{c.tag}</span>
                  <h3 className="text-sm font-bold leading-snug" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>{c.title}</h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* Juego interactivo — embebido directamente */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>— Juego interactivo</p>
          <div className="rounded-3xl overflow-hidden border shadow-lg" style={{ background: "white", borderColor: "#EDE8F7" }}>
            <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "#F0EDE8" }}>
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>¿Sabrías reconocerlo si te pasara a ti?</h3>
              <p className="text-sm" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>Pon a prueba tu instinto. Situaciones reales, decisiones reales — sin trampa, sin respuesta fácil.</p>
            </div>
            <div className="relative" style={{ paddingBottom: "75%", height: 0, overflow: "hidden" }}>
              <iframe
                src="https://scratch.mit.edu/projects/1248251296/embed"
                title="Juego interactivo — ¿Sabrías reconocerlo?"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Infografía ───────────────────────────────────────────────────────────────
const INFOGRAFIA_DATOS = [
  { icon: "📍", title: "¿Dónde ocurre más?", stat: "25,1%", sub: "prevalencia en Ucayali — vs 4,8% en Lima", color: "#29BFFF" },
  { icon: "📚", title: "Educación truncada", stat: "36%", sub: "de desvinculaciones escolares por maternidad temprana", color: "#A8C923" },
  { icon: "💼", title: "Impacto económico", stat: "24%", sub: "menos ingresos de por vida para madres adolescentes", color: "#8B31D4" },
  { icon: "⚠", title: "Violencia sexual", stat: "34 casos", sub: "reportados cada día contra NNA en Perú", color: "#E91E8C" },
  { icon: "🎓", title: "Educación superior", stat: "Solo 7%", sub: "de madres adolescentes completa la educación superior", color: "#F0C21D" },
  { icon: "💊", title: "Anticoncepción", stat: "77,7%", sub: "de adolescentes activas usa métodos modernos (meta: 92,2%)", color: "#0EAAED" },
]

const INFOGRAFIA_COLORS = ["#E91E8C", "#F5821F", "#A8C923", "#29BFFF", "#A259FF", "#F5821F"]

function InfografiaSection() {
  const [lightbox, setLightbox] = useState(false)

  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(120deg, rgb(255, 145, 20) 0%, rgb(255, 158, 25) 50%, rgb(255, 172, 35) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}>
              — Infografía
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Sin pausa
              <br />
              <span className="italic font-light" style={{ color: "#1A0630" }}>a tus sueños.</span>
            </h2>
            <p className="mt-3 text-sm max-w-sm" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Outfit', sans-serif" }}>
              Tus sueños, tus metas y tu futuro importan. Nadie tiene derecho a quitártelos.
            </p>
          </div>
          <a
            href={infografiaImg}
            download="infografia-sin-pausa.jpeg"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:bg-white/20 shrink-0"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "white", fontFamily: "'Outfit', sans-serif" }}
          >
            ⬇ Descargar infografía
          </a>
        </div>

        {/* Main infographic image — same height as data grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-5/12 shrink-0 flex flex-col">
            <button
              onClick={() => setLightbox(true)}
              className="flex-1 rounded-3xl overflow-hidden border transition-all hover:scale-[1.01] hover:shadow-2xl block"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <img
                src={infografiaImg}
                alt="Infografía Sin Pausa a Mis Sueños — datos sobre violencia, embarazo y derechos adolescentes en Perú"
                className="w-full h-full object-cover"
                style={{ minHeight: 300 }}
              />
            </button>
            <p className="text-center mt-2 text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Outfit', sans-serif" }}>
              🔍 Click para ampliar
            </p>
          </div>

          {/* Data grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {INFOGRAFIA_DATOS.map((d, di) => (
              <div
                key={d.title}
                className="rounded-2xl p-5 border transition-all hover:shadow-sm"
                style={{ background: "white", borderColor: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{d.icon}</span>
                  <span className="text-xs font-semibold" style={{ color: "#6C6C6E", fontFamily: "'Outfit', sans-serif" }}>
                    {d.title}
                  </span>
                </div>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Fraunces', serif", color: d.color }}>
                  {d.stat}
                </div>
                <p className="text-xs leading-snug" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>
                  {d.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,2,20,0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(false)}
        >
          <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={infografiaImg}
              alt="Infografía completa — Sin Pausa a Mis Sueños"
              className="w-full rounded-3xl shadow-2xl object-contain"
              style={{ maxHeight: "90vh" }}
            />
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "rgba(0,0,0,0.6)", color: "white" }}
            >✕</button>
          </div>
        </div>
      )}
    </section>
  )
}

// ─── Afiche ───────────────────────────────────────────────────────────────────
const AFICHES = [
  { src: afficheImg, alt: "¿Y qué hago si...? — canales de ayuda (versión verde)", label: "¿Y qué hago si...?" },
  { src: afiche1, alt: "¿Y qué hago si...? — canales de ayuda", label: "Canales de ayuda" },
  { src: afiche3, alt: "¡Mis Derechos, Mis Decisiones! — tus derechos como adolescente", label: "Mis Derechos" },
  { src: afiche4, alt: "¡Las Niñas NO son esposas! — matrimonio infantil", label: "No al matrimonio infantil" },
  { src: afiche5, alt: "Yo Decido Sobre Mi — mutilación genital femenina", label: "Autonomía corporal" },
]

function AfficheSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-24 px-6" style={{ background: "#FAFBFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
            — Afiches y recursos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
            Guarda, comparte
            <br />
            <span className="italic font-light" style={{ color: "#8B31D4" }}>e infórmate.</span>
          </h2>
          <p className="mt-3 text-sm max-w-lg" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>
            Todos los afiches están disponibles para compartir. Conocer los canales y tus derechos antes de necesitarlos es parte de la prevención.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {AFICHES.map((a, i) => (
            <div key={i} className="flex flex-col gap-2">
              <button
                onClick={() => setExpanded(i)}
                className="rounded-2xl overflow-hidden border shadow-sm transition-all hover:scale-105 hover:shadow-lg"
                style={{ borderColor: "#EDE8F7", aspectRatio: "4/5" }}
              >
                <img src={a.src} alt={a.alt} className="w-full h-full object-cover" />
              </button>
              <p className="text-xs font-semibold text-center" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
                {a.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-center" style={{ color: "#ADADAF", fontFamily: "'Outfit', sans-serif" }}>
          🔍 Click en cualquier afiche para verlo completo
        </p>
      </div>

      {/* Lightbox */}
      {expanded !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,4,24,0.9)", backdropFilter: "blur(12px)" }}
          onClick={() => setExpanded(null)}
        >
          {/* Prev/Next arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded((p) => ((p ?? 0) - 1 + AFICHES.length) % AFICHES.length) }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >‹</button>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded((p) => ((p ?? 0) + 1) % AFICHES.length) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >›</button>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxWidth: 460, width: "100%", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={AFICHES[expanded].src}
              alt={AFICHES[expanded].alt}
              className="w-full object-contain"
              style={{ maxHeight: "85vh" }}
            />
            <button
              onClick={() => setExpanded(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "rgba(0,0,0,0.6)", color: "white" }}
            >✕</button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {AFICHES.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setExpanded(i) }}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === expanded ? "white" : "rgba(255,255,255,0.35)" }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// ─── Risk Calculator ──────────────────────────────────────────────────────────
const RISK_QUESTIONS = [
  { id: 1, weight: 1, text: "¿Has notado lesiones, moretones o marcas sin explicación clara en tu cuerpo o en el de alguien cercano?" },
  { id: 2, weight: 2, text: "¿Alguien te ha causado dolor físico de manera intencional?" },
  { id: 3, weight: 2, text: "¿Hay alguien que revisa tu celular, redes sociales o controla con quién hablas o a dónde vas?" },
  { id: 4, weight: 2, text: "¿Sientes miedo de contradecir o disgustar a tu pareja, familiar o alguien cercano?" },
  { id: 5, weight: 3, text: "¿Alguien te ha presionado o forzado a hacer algo que no querías hacer?" },
  { id: 6, weight: 2, text: "¿Te han humillado, insultado o amenazado delante de otras personas o a solas?" },
  { id: 7, weight: 1, text: "¿Te has alejado de amigos o familia porque alguien cercano te lo pidió o lo exigió?" },
  { id: 8, weight: 1, text: "¿Tienes pesadillas frecuentes, ansiedad intensa o dificultad para concentrarte últimamente?" },
  { id: 9, weight: 3, text: "¿Alguien ha tomado decisiones sobre tu cuerpo sin tu consentimiento?" },
  { id: 10, weight: 3, text: "¿Sientes que no puedes salir de una situación que te hace daño?" },
]

type RiskAnswer = "si" | "no" | null

function RiskCalculatorSection() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, RiskAnswer>>({})
  const [cardVisible, setCardVisible] = useState(true)
  const [done, setDone] = useState(false)

  const total = RISK_QUESTIONS.length

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    if (ans !== "si") return acc
    const q = RISK_QUESTIONS.find((q) => q.id === Number(id))
    return acc + (q?.weight ?? 1)
  }, 0)

  const handleAnswer = (opt: RiskAnswer) => {
    const q = RISK_QUESTIONS[currentQ]
    const newAnswers = { ...answers, [q.id]: opt }
    setAnswers(newAnswers)
    setCardVisible(false)
    setTimeout(() => {
      if (currentQ < total - 1) {
        setCurrentQ((p) => p + 1)
      } else {
        setDone(true)
      }
      setCardVisible(true)
    }, 280)
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentQ(0)
    setDone(false)
    setCardVisible(true)
  }

  const getResult = () => {
    if (score <= 2) return {
      level: "bajo",
      color: "#A8C923",
      bg: "rgba(0,205,176,0.08)",
      border: "rgba(0,205,176,0.3)",
      title: "Tus respuestas no muestran señales críticas",
      body: "Eso es positivo. Seguir informándote, mantener comunicación abierta con personas de confianza y conocer tus derechos son las mejores herramientas de prevención.",
      actions: ["Explora los temas de esta plataforma", "Habla con alguien de confianza si algo te preocupa", "Guarda los números de ayuda por si algún día los necesitas"],
    }
    if (score <= 7) return {
      level: "moderado",
      color: "#F5821F",
      bg: "rgba(247,183,49,0.08)",
      border: "rgba(247,183,49,0.3)",
      title: "Hay algunas señales que merecen atención",
      body: "Algunas de tus respuestas indican situaciones que vale la pena conversar. No estás sola. Hablar con un adulto de confianza o llamar a la Línea 100 puede darte orientación sin comprometerte a nada.",
      actions: ["Habla con un adulto de confianza (familiar, docente, consejero)", "Llama a la Línea 100 — es gratis y confidencial", "Acude a un CEM o DEMUNA de tu localidad"],
    }
    return {
      level: "alto",
      color: "#E91E8C",
      bg: "rgba(236,33,121,0.08)",
      border: "rgba(236,33,121,0.3)",
      title: "Estás mostrando señales importantes de riesgo",
      body: "Tus respuestas indican que podrías estar en una situación de riesgo. Por favor busca ayuda hoy. Las instituciones de apoyo en Perú son confidenciales y están capacitadas para acompañarte sin juzgarte.",
      actions: ["Llama ahora a la Línea 100 (gratuita, 24h)", "Chatea con Chat 100 si no puedes llamar", "Acude al CEM más cercano para orientación legal, psicológica y social", "Si estás en peligro inmediato, llama al 105 (PNP)"],
    }
  }

  const result = done ? getResult() : null

  return (
    <section id="calculadora" className="py-24 px-6" style={{ background: "#FAFBFF" }}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
            — Calculadora de señales
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "#1A0630" }}>
            ¿Reconoces alguna
            <br />
            <span className="italic font-light" style={{ color: "#8B31D4" }}>señal de riesgo?</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-md mx-auto" style={{ color: "#5C5C6E", fontFamily: "'Outfit', sans-serif" }}>
            Privado, anónimo y basado en indicadores del PLANEA 2025–2030, MIMP, OPS y UNICEF.
          </p>
        </div>

        {!done ? (
          <>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ color: "#ADADBF", fontFamily: "'Outfit', sans-serif" }}>
                <span>Pregunta {currentQ + 1} de {total}</span>
                <span>{Math.round((currentQ / total) * 100)}%</span>
              </div>
              <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: "#EDE8F7" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${((currentQ) / total) * 100}%`, background: "linear-gradient(90deg, #8B31D4, #E91E8C)" }} />
              </div>
              <div className="flex gap-1 mt-2">
                {RISK_QUESTIONS.map((_, i) => (
                  <div key={i} className="flex-1 h-1 rounded-full transition-all duration-300" style={{ background: i < currentQ ? "#8B31D4" : i === currentQ ? "#E91E8C" : "#EDE8F7" }} />
                ))}
              </div>
            </div>

            {/* Flashcard */}
            <div
              style={{
                transition: "opacity 0.28s ease, transform 0.28s ease",
                opacity: cardVisible ? 1 : 0,
                transform: cardVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
              }}
            >
              <div
                className="rounded-3xl p-8 border shadow-sm"
                style={{ background: "white", borderColor: "#EDE8F7", minHeight: 220 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#8B31D4" }}>
                    {currentQ + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
                    {RISK_QUESTIONS[currentQ].weight >= 3 ? "Señal crítica" : RISK_QUESTIONS[currentQ].weight === 2 ? "Señal importante" : "Señal de atención"}
                  </span>
                </div>
                <p className="text-lg font-semibold leading-snug mb-8" style={{ color: "#1A0630", fontFamily: "'Fraunces', serif" }}>
                  {RISK_QUESTIONS[currentQ].text}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer("si")}
                    className="flex-1 py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.03] active:scale-95"
                    style={{ background: "#E91E8C", color: "white", fontFamily: "'Outfit', sans-serif" }}
                  >
                    Sí
                  </button>
                  <button
                    onClick={() => handleAnswer("no")}
                    className="flex-1 py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.03] active:scale-95 border"
                    style={{ background: "white", borderColor: "#EDE8F7", color: "#1A0630", fontFamily: "'Outfit', sans-serif" }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{ transition: "opacity 0.3s ease", opacity: cardVisible ? 1 : 0 }}
          >
            {result && (
              <div className="rounded-3xl p-8 border" style={{ background: result.bg, borderColor: result.border }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: result.color }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: result.color, fontFamily: "'Outfit', sans-serif" }}>
                    Nivel {result.level}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Fraunces', serif", color: "#1A0630" }}>
                  {result.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#5C5C6E", fontFamily: "'Outfit', sans-serif" }}>
                  {result.body}
                </p>
                <div className="space-y-2 mb-8">
                  {result.actions.map((action, ai) => (
                    <div key={ai} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white" style={{ background: result.color }}>
                        {ai + 1}
                      </span>
                      <p className="text-sm" style={{ color: "#1A0630", fontFamily: "'Outfit', sans-serif" }}>{action}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:100"
                    className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}
                  >
                    Llamar Línea 100
                  </a>
                  <a
                    href="https://www.mimp.gob.pe/chat100/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
                  >
                    Chat 100 →
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:bg-gray-50"
                    style={{ borderColor: "#EDE8F5", color: "#5C5C6E", fontFamily: "'Outfit', sans-serif" }}
                  >
                    Responder de nuevo
                  </button>
                </div>
              </div>
            )}
            <p className="mt-6 text-xs text-center" style={{ color: "#ADADBF", fontFamily: "'Outfit', sans-serif" }}>
              Este cuestionario es orientativo y no reemplaza la orientación profesional. Ante cualquier duda, comunícate con Línea 100.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// ─── Mapa interactivo ─────────────────────────────────────────────────────────
function MapSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mapType, setMapType] = useState<"cem" | "comisaria" | "salud" | "demuna">("cem")

  const mapSearchTerms: Record<typeof mapType, string> = {
    cem: "Centro+Emergencia+Mujer+CEM+Perú",
    comisaria: "Comisaría+PNP+Perú",
    salud: "Centro+de+salud+MINSA+Perú",
    demuna: "DEMUNA+Municipalidad+Perú",
  }

  const handleFindNearMe = () => {
    const base = mapSearchTerms[mapType]
    const q = searchQuery.trim() ? encodeURIComponent(`${base} ${searchQuery.trim()}`) : base
    window.open(`https://www.google.com/maps/search/${q}`, "_blank", "noopener,noreferrer")
  }

  const mapLabels: Record<typeof mapType, string> = {
    cem: "Centros Emergencia Mujer (CEM)",
    comisaria: "Comisarías PNP",
    salud: "Centros de Salud MINSA",
    demuna: "DEMUNA",
  }

  return (
    <section id="mapa" className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
              — Mapa de ayuda
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
              Encuentra ayuda
              <br />
              <span className="italic font-light" style={{ color: "#F5821F" }}>cerca de ti.</span>
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: "#5C5C5E", fontFamily: "'Outfit', sans-serif" }}>
              Ubica comisarías, Centros Emergencia Mujer, centros de salud y DEMUNA en todo el Perú. Haz click en "Abrir en Maps" para ver la ruta desde tu ubicación.
            </p>
          </div>

          {/* Chat 100 CTA */}
          <a
            href="https://www.mimp.gob.pe/chat100/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-6 py-4 border transition-all hover:shadow-md shrink-0 group"
            style={{ background: "#F5F2FF", borderColor: "#EDE8F7" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "#E91E8C" }}>
              💬
            </div>
            <div>
              <p className="text-sm font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "#1C1C1E" }}>Chat 100</p>
              <p className="text-xs" style={{ color: "#6C6C6E", fontFamily: "'Outfit', sans-serif" }}>Orientación en línea — MIMP</p>
            </div>
            <span className="ml-2" style={{ color: "#8B31D4" }}>→</span>
          </a>
        </div>

        {/* Type selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(["cem", "comisaria", "salud", "demuna"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setMapType(t)}
              className="px-4 py-2 rounded-full text-xs font-semibold border transition-all"
              style={{
                borderColor: mapType === t ? "#F5821F" : "#E0D9F5",
                background: mapType === t ? "#F5821F" : "#F5F2FF",
                color: mapType === t ? "white" : "#5C5C5E",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {mapLabels[t]}
            </button>
          ))}
        </div>

        {/* Search + Maps open */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Escribe tu distrito, ciudad o región..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleFindNearMe()}
            className="flex-1 px-5 py-3 rounded-xl text-sm outline-none border"
            style={{
              background: "#F5F2FF",
              borderColor: "#E0D9F5",
              color: "#1C1C1E",
              fontFamily: "'Outfit', sans-serif",
            }}
          />
          <button
            onClick={handleFindNearMe}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 shrink-0"
            style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
          >
            Abrir en Maps →
          </button>
        </div>

        {/* Embedded map */}
        <div className="rounded-3xl overflow-hidden border" style={{ borderColor: "#E0D9F5" }}>
          <iframe
            title="Mapa de centros de ayuda en Perú"
            width="100%"
            height="400"
            style={{ display: "block", border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${mapSearchTerms[mapType]}&t=m&z=6&output=embed&hl=es`}
          />
        </div>

        {/* Quick links */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "CEM Lima", q: "Centro+Emergencia+Mujer+Lima" },
            { label: "Línea 100", q: "", href: "tel:100" },
            { label: "Chat 100 MIMP", q: "", href: "https://www.mimp.gob.pe/chat100/" },
            { label: "DEMUNA cercana", q: "DEMUNA+cerca+de+mi" },
          ].map((item, i) => (
            item.href ? (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold border text-center transition-all hover:border-white/30"
                style={{ borderColor: "#E0D9F5", background: "#F5F2FF", color: "#1C1C1E", fontFamily: "'Outfit', sans-serif" }}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={i}
                onClick={() => window.open(`https://www.google.com/maps/search/${item.q}`, "_blank", "noopener,noreferrer")}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold border transition-all hover:bg-white/20"
                style={{ borderColor: "#E0D9F5", background: "#F5F2FF", color: "#1C1C1E", fontFamily: "'Outfit', sans-serif" }}
              >
                📍 {item.label}
              </button>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

function ResourcesSection() {
  return (
    <section id="recursos" className="py-24 px-6" style={{ background: "#ED0E6B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#F5821F", fontFamily: "'Outfit', sans-serif" }}>
            — Recursos y ayuda
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Nunca estás sola.
            <br />
            <span className="italic font-light" style={{ color: "rgba(250,247,242,0.6)" }}>Nunca estás solo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESOURCES.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl p-6 border transition-all hover:border-white/30 group"
              style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {r.name}
                </h3>
                <span
                  className="font-bold text-sm px-3 py-1 rounded-full shrink-0"
                  style={{ background: "#0EAAED", color: "white", fontFamily: "'Outfit', sans-serif" }}
                >
                  {r.contact}
                </span>
              </div>
              <p className="text-sm" style={{ color: "rgba(250,247,242,0.65)", fontFamily: "'Outfit', sans-serif" }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 border"
          style={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.45)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                ¿Estás en peligro ahora mismo?
              </h3>
              <p className="text-sm" style={{ color: "rgba(250,247,242,0.7)", fontFamily: "'Outfit', sans-serif" }}>
                Llama ahora. Es gratuito, confidencial y disponible las 24 horas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:100"
                className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shrink-0"
                style={{ background: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}
              >
                Llamar Línea 100
              </a>
              <a
                href="https://www.mimp.gob.pe/chat100/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shrink-0"
                style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}
              >
                💬 Chat 100
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Recomendaciones ──────────────────────────────────────────────────────────
const RECO_CATEGORIES = [
  {
    label: "YouTube & Podcasts Perú",
    color: "#E91E8C",
    icon: "🎙",
    items: [
      {
        name: "Conexión — UNFPA Perú",
        desc: "Embarazo adolescente, salud sexual y reproductiva y violencia de género en el contexto peruano, con especialistas y datos nacionales.",
        url: "https://peru.unfpa.org/es/podcast-conexion",
        urlYT: "https://www.youtube.com/@unfpala",
        tag: "Podcast · UNFPA",
      },
      {
        name: "¡Vota por mí! — UNICEF Perú",
        desc: "Videopodcast con adolescentes y especialistas sobre derechos, violencia sexual, deserción escolar y prevención del embarazo.",
        url: "https://www.unicef.org/peru/decalogo",
        urlYT: "https://www.youtube.com/@unicefperu",
        tag: "Videopodcast",
      },
      {
        name: "Save the Children Perú",
        desc: "Documentales y videopodcasts sobre protección, embarazo adolescente y violencia sexual, con historias locales y análisis de políticas públicas.",
        url: "https://www.savethechildren.org.pe",
        urlYT: "https://www.youtube.com/@SCinP",
        tag: "YouTube",
      },
      {
        name: "Podcast Médico Cayetano — UPCH",
        desc: "Contenido médico y científico sobre gestación temprana, salud sexual y reproductiva y salud pública en el Perú.",
        url: "https://www.youtube.com/@CayetanoTVoficial",
        urlYT: "https://www.youtube.com/@CayetanoTVoficial",
        tag: "Podcast · Salud",
      },
    ],
  },
  {
    label: "Organismos en Perú",
    color: "#8B31D4",
    icon: "🏛",
    items: [
      {
        name: "UNFPA Perú",
        desc: "Informes y datos sobre fecundidad adolescente, salud sexual y reproductiva y prevención en el Perú.",
        url: "https://peru.unfpa.org/",
        tag: "ONU · Perú",
      },
      {
        name: "UNICEF Perú",
        desc: "Información y estadísticas sobre derechos, violencia y bienestar de niñas, niños y adolescentes.",
        url: "https://www.unicef.org/peru/",
        tag: "ONU · Perú",
      },
      {
        name: "MIMP — Ministerio de la Mujer y Poblaciones Vulnerables",
        desc: "Información oficial sobre violencia y servicios de protección, incluidos los Centros Emergencia Mujer (CEM).",
        url: "https://www.gob.pe/mimp",
        tag: "Gobierno",
      },
      {
        name: "MINSA — Etapa de Vida Adolescente",
        desc: "Normativas, guías de atención y datos sobre salud adolescente en el Perú.",
        url: "https://www.gob.pe/minsa",
        tag: "Salud",
      },
      {
        name: "MINJUSDH — Defensa Pública",
        desc: "Orientación y defensa legal gratuita ante vulneraciones de derechos y situaciones de violencia.",
        url: "https://www.gob.pe/minjus",
        tag: "Legal · Gratuito",
      },
      {
        name: "Promsex",
        desc: "Investigación y recursos sobre derechos sexuales y reproductivos, ESI y políticas públicas en el Perú.",
        url: "https://promsex.org/",
        tag: "ONG · Derechos",
      },
    ],
  },
  {
    label: "Organismos internacionales",
    color: "#29BFFF",
    icon: "🌍",
    items: [
      {
        name: "UNFPA — Fondo de Población de la ONU",
        desc: "Publicaciones sobre salud sexual y reproductiva, embarazo adolescente y derechos a nivel global.",
        url: "https://peru.unfpa.org",
        tag: "ONU",
      },
      {
        name: "UNICEF — Derechos de NNA",
        desc: "Datos sobre matrimonio infantil, violencia contra NNA y programas de protección.",
        url: "https://www.unicef.org/peru",
        tag: "ONU",
      },
      {
        name: "OPS / OMS — Violencia y Salud",
        desc: "Evidencia global sobre violencia de género, MGF y educación sexual integral.",
        url: "https://www.paho.org/es",
        tag: "Salud global",
      },
    ],
  },
  {
    label: "Investigación y datos",
    color: "#A8C923",
    icon: "📊",
    items: [
      {
        name: "INEI — Encuesta Demográfica ENDES",
        desc: "Datos estadísticos sobre embarazo adolescente, fecundidad y salud reproductiva por región.",
        url: "https://www.inei.gob.pe/estadisticas/indice-tematico/poblacion-y-vivienda",
        tag: "Estadísticas",
      },
      {
        name: "ONU Mujeres — Biblioteca de Recursos",
        desc: "Publicaciones académicas y de política pública sobre violencia de género en América Latina.",
        url: "https://www.unwomen.org/es/digital-library",
        tag: "Investigación",
      },
      {
        name: "Human Rights Watch — Perú",
        desc: "Informes de derechos humanos sobre violencia sexual, embarazo en niñas y acceso a justicia.",
        url: "https://www.hrw.org/es/americas/peru",
        tag: "Derechos humanos",
      },
    ],
  },
]

function RecomendacionesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const cat = RECO_CATEGORIES[activeTab]

  return (
    <section className="py-24 px-6" style={{ background: "#FAFBFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-end gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
                — Recursos confiables
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
                También puedes visitar...
                <br />
                <span className="italic font-light" style={{ color: "#8B31D4" }}>fuentes verificadas.</span>
              </h2>
            </div>
            <img src={mascota3} alt="Mascota recomendando fuentes confiables" className="w-20 md:w-28 shrink-0 mb-1 drop-shadow-lg" style={{ filter: "drop-shadow(0 8px 20px rgba(168,201,35,0.35))" }} />
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#6C6C6E", fontFamily: "'Outfit', sans-serif" }}>
            Organismos verificados, podcasts de especialistas y datos oficiales para seguir explorando.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {RECO_CATEGORIES.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all"
              style={{
                background: activeTab === i ? c.color : "white",
                borderColor: activeTab === i ? c.color : "#EDE8F7",
                color: activeTab === i ? "white" : "#5C5C5E",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cat.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-3xl p-6 border transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "white", borderColor: "#EDE8F7" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${cat.color}15`, color: cat.color, fontFamily: "'Outfit', sans-serif" }}>
                  {item.tag}
                </span>
              </div>
              <h3 className="font-bold text-base leading-snug" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#6C6C6E", fontFamily: "'Outfit', sans-serif" }}>
                {item.desc}
              </p>
              <div className="flex gap-2 flex-wrap mt-1">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:opacity-80" style={{ background: cat.color, color: "white", fontFamily: "'Outfit', sans-serif", textDecoration: "none" }}>
                  🌐 Sitio web ↗
                </a>
                {"urlYT" in item && item.urlYT !== item.url && (
                  <a href={(item as { urlYT: string }).urlYT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:opacity-80" style={{ background: "#FF0000", color: "white", fontFamily: "'Outfit', sans-serif", textDecoration: "none" }}>
                    ▶ YouTube ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: "#2A0858", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#8B31D4" }}>
              M
</div>
            <span className="font-semibold text-white" style={{ fontFamily: "'Fraunces', serif" }}>Más Allá del Tabú</span>
          </div>
          <p className="text-xs max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Outfit', sans-serif" }}>
            Prevenir es tener información, reconocer señales, conocer derechos y saber dónde pedir ayuda. Para adolescentes en Perú.
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Más Allá del Tabú"
            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all hover:opacity-80"
            style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stopColor="#ffd600"/>
                  <stop offset="30%" stopColor="#ff6f00"/>
                  <stop offset="60%" stopColor="#e91e8c"/>
                  <stop offset="100%" stopColor="#6a1ee0"/>
                </radialGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)"/>
              <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
              <circle cx="17.3" cy="6.7" r="1.1" fill="white"/>
            </svg>
            <span className="text-xs font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Síguenos</span>
          </a>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Outfit', sans-serif" }}>
            Información con fines educativos. En emergencias llama al 105 o Línea 100.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Mitos ────────────────────────────────────────────────────────────────────
const MITOS = [
  {
    myth: "Si una chica se viste provocativamente, está buscando que la acosen.",
    verdict: false,
    region: "Nacional",
    reality: "La ropa no es una invitación. Nadie merece acoso ni violencia por su forma de vestir. La responsabilidad del acoso siempre es de quien lo ejerce.",
    source: "MIMP – Plan Nacional contra la Violencia de Género 2016–2021",
    color: "#E91E8C",
  },
  {
    myth: "El matrimonio temprano en la sierra protege a las chicas porque las 'asegura' con alguien que las cuide.",
    verdict: false,
    region: "Cusco / Ayacucho",
    reality: "El matrimonio antes de los 18 años interrumpe la educación, aumenta el riesgo de violencia doméstica y viola los derechos de las niñas. En Perú el MUITF afecta al 11% de adolescentes en zonas rurales.",
    source: "UNICEF Perú – Matrimonio Infantil 2022",
    color: "#F5821F",
  },
  {
    myth: "Si una chica queda embarazada, lo mejor es que se case rápido para 'tapar' el problema.",
    verdict: false,
    region: "Loreto / San Martín",
    reality: "El embarazo adolescente no se resuelve con el matrimonio. Las parejas unidas por presión social tienen mayor riesgo de violencia. El Estado peruano tiene obligación de proteger la educación y salud de la adolescente.",
    source: "Defensoría del Pueblo – Reporte Embarazo Adolescente 2021",
    color: "#8B31D4",
  },
  {
    myth: "Hablar de sexo con adolescentes los va a incitar a tener relaciones.",
    verdict: false,
    region: "Nacional",
    reality: "La educación sexual integral retrasa el inicio de las relaciones sexuales y reduce el embarazo no deseado. El silencio genera desinformación y mayor vulnerabilidad.",
    source: "OPS / OMS – Educación Sexual Integral, evidencia global",
    color: "#29BFFF",
  },
  {
    myth: "La mutilación genital femenina es una 'tradición cultural' que hay que respetar.",
    verdict: false,
    region: "Comunidades amazónicas fronterizas",
    reality: "La MGF es una violación de los derechos humanos reconocida por la ONU. Ninguna tradición cultural justifica causar daño permanente al cuerpo de una niña.",
    source: "ONU Mujeres – Declaración Conjunta 1997",
    color: "#A8C923",
  },
  {
    myth: "Si tu pareja te cela es porque te quiere demasiado.",
    verdict: false,
    region: "Nacional",
    reality: "Los celos extremos son una señal de control y posesión, no de amor. Es uno de los primeros indicadores de violencia en la relación según el CEM.",
    source: "MIMP – CEM, Indicadores de Violencia en la Pareja",
    color: "#E91E8C",
  },
]

function MitosSection() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const toggle = (i: number) => setRevealed((p) => ({ ...p, [i]: !p[i] }))

  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(160deg, #2D0F5E 0%, #3D1878 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#E91E8C", fontFamily: "'Outfit', sans-serif" }}>
              — ¿Verdadero o falso?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Desmintiendo mitos
              <br />
              <span className="italic font-light" style={{ color: "#A8C923" }}>del Perú profundo.</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Outfit', sans-serif" }}>
            Toca cada tarjeta para descubrir la realidad detrás de lo que circula en regiones de todo el país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MITOS.map((m, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="text-left rounded-3xl p-6 transition-all duration-300 border group"
              style={{
                background: revealed[i] ? `${m.color}18` : "rgba(255,255,255,0.04)",
                borderColor: revealed[i] ? `${m.color}55` : "rgba(255,255,255,0.1)",
                transform: revealed[i] ? "none" : undefined,
              }}
            >
              {/* Header badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", fontFamily: "'Outfit', sans-serif" }}>
                  📍 {m.region}
                </span>
                <span className="text-xl font-black" style={{ color: revealed[i] ? "#E91E8C" : "rgba(255,255,255,0.25)" }}>
                  {revealed[i] ? "✗ FALSO" : "?"}
                </span>
              </div>

              {/* Myth text */}
              <p className="text-base font-semibold leading-snug mb-4 text-white" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>
                "{m.myth}"
              </p>

              {/* Reveal */}
              {revealed[i] ? (
                <div className="mt-3 space-y-3">
                  <div className="h-px w-full" style={{ background: `${m.color}40` }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Outfit', sans-serif" }}>
                    {m.reality}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit', sans-serif" }}>
                    Fuente: {m.source}
                  </p>
                </div>
              ) : (
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: m.color, fontFamily: "'Outfit', sans-serif" }}>
                  Toca para ver la realidad →
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Rumores son ciertos ───────────────────────────────────────────────────────
const RUMORES = [
  {
    rumor: "Dicen que el embarazo adolescente es un problema de Lima.",
    dato: "El 25,1% de adolescentes en Loreto y el 21,8% en Ucayali están embarazadas o ya son madres — vs el 4,8% en Lima.",
    region: "Loreto / Ucayali",
    emoji: "🗺",
    color: "#E91E8C",
    source: "ENDES 2021 – INEI",
  },
  {
    rumor: "Dicen que las niñas que se casan jóvenes en el campo están protegidas.",
    dato: "En Perú, el 11% de adolescentes rurales (15–19) está en unión conyugal. El 60% de ellas reporta violencia de pareja dentro del primer año.",
    region: "Zonas rurales",
    emoji: "💍",
    color: "#F5821F",
    source: "UNICEF Perú / ENDES 2022",
  },
  {
    rumor: "Dicen que la violencia sexual solo pasa en zonas marginales.",
    dato: "34 casos de violencia sexual contra NNA se reportan cada día en Perú. La mayoría ocurre en el hogar, cometida por conocidos.",
    region: "Nacional",
    emoji: "📊",
    color: "#8B31D4",
    source: "MIMP – Registro SISFOH / Boletín CEM 2023",
  },
  {
    rumor: "Dicen que si una adolescente abandona el colegio es porque no quiere estudiar.",
    dato: "El 36% de abandonos escolares femeninos se debe a embarazo o maternidad temprana. Solo el 7% de madres adolescentes llega a educación superior.",
    region: "Nacional",
    emoji: "📚",
    color: "#29BFFF",
    source: "MINEDU – Estadística de Calidad Educativa 2022",
  },
  {
    rumor: "Dicen que en las comunidades indígenas las chicas maduran antes.",
    dato: "El 'madurar antes' no confiere derechos adultos. En comunidades amazónicas, la tasa de embarazo en menores de 15 años triplica el promedio nacional.",
    region: "Amazonía",
    emoji: "🌿",
    color: "#A8C923",
    source: "Defensoría del Pueblo – Reporte 003/2021",
  },
  {
    rumor: "Dicen que la Línea 100 no sirve para nada.",
    dato: "En 2023 la Línea 100 atendió más de 246,000 llamadas. Es gratuita, confidencial y disponible las 24 horas. El 82% de llamadas proviene de mujeres.",
    region: "Nacional",
    emoji: "📞",
    color: "#E91E8C",
    source: "MIMP – Informe Anual Línea 100, 2023",
  },
]

function RumoresSection() {
  const [cardIdx, setCardIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [revealed, setRevealed] = useState(false)
  const [done, setDone] = useState(false)

  const goNext = () => {
    if (cardIdx >= RUMORES.length - 1) { setDone(true); return }
    setVisible(false)
    setTimeout(() => { setCardIdx((p) => p + 1); setRevealed(false); setVisible(true) }, 280)
  }

  const handleReveal = () => setRevealed(true)

  const restart = () => { setCardIdx(0); setRevealed(false); setDone(false); setVisible(true) }

  const current = RUMORES[cardIdx]

  return (
    <section className="py-24 px-6" style={{ background: "#F0C21D" }}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center relative">
          <img src={mascota2} alt="Mascota acompañando Los rumores son ciertos" className="w-20 mx-auto mb-4 drop-shadow-lg" style={{ filter: "drop-shadow(0 6px 16px rgba(245,130,31,0.4))" }} />
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
            — Realidad descentralizada
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
            Los rumores son ciertos.
            <br />
            <span className="italic font-light" style={{ color: "#8B31D4" }}>Y aquí están los datos.</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(28,28,30,0.6)", fontFamily: "'Outfit', sans-serif" }}>
            Lo que se susurra — y lo que las cifras confirman. Fuentes verificadas.
          </p>
        </div>

        {/* Progress */}
        <div className="flex gap-1.5 mb-8 justify-center">
          {RUMORES.map((_, i) => (
            <div key={i} className="h-1 rounded-full flex-1 transition-all duration-300" style={{ background: i <= cardIdx ? "#8B31D4" : "rgba(28,28,30,0.15)", maxWidth: 40 }} />
          ))}
        </div>

        {done ? (
          <div className="rounded-3xl p-10 text-center" style={{ background: "rgba(139,49,212,0.12)", border: "1px solid rgba(139,49,212,0.3)" }}>
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>Ahora lo sabes.</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(28,28,30,0.65)", fontFamily: "'Outfit', sans-serif" }}>
              Conocer la realidad es el primer paso para cambiarla. Comparte esta información.
            </p>
            <button onClick={restart} className="px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105" style={{ background: "#8B31D4", fontFamily: "'Outfit', sans-serif" }}>
              Ver de nuevo →
            </button>
          </div>
        ) : (
          <div
            style={{
              transition: "opacity 0.28s ease, transform 0.28s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="rounded-3xl overflow-hidden border" style={{ borderColor: `${current.color}55`, background: "white" }}>
              {/* Top band */}
              <div className="px-8 pt-8 pb-6" style={{ background: `${current.color}18` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${current.color}25`, color: current.color, fontFamily: "'Outfit', sans-serif" }}>
                    📍 {current.region}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "rgba(28,28,30,0.4)", fontFamily: "'Outfit', sans-serif" }}>{cardIdx + 1} / {RUMORES.length}</span>
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color: "rgba(28,28,30,0.45)", fontFamily: "'Outfit', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  El rumor dice...
                </p>
                <p className="text-xl md:text-2xl font-bold leading-snug italic" style={{ fontFamily: "'Fraunces', serif", color: "#1C1C1E" }}>
                  {current.rumor}
                </p>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                {revealed ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{current.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: current.color, fontFamily: "'Outfit', sans-serif" }}>El dato real</span>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "#1C1C1E", fontFamily: "'Outfit', sans-serif" }}>
                      {current.dato}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(28,28,30,0.4)", fontFamily: "'Outfit', sans-serif" }}>
                      Fuente: {current.source}
                    </p>
                    <button
                      onClick={goNext}
                      className="mt-4 w-full py-3 rounded-2xl font-semibold text-sm text-white transition-all hover:scale-[1.02]"
                      style={{ background: current.color, fontFamily: "'Outfit', sans-serif" }}
                    >
                      {cardIdx >= RUMORES.length - 1 ? "Ver resultado →" : "Siguiente rumor →"}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-sm mb-6" style={{ color: "rgba(28,28,30,0.5)", fontFamily: "'Outfit', sans-serif" }}>
                      ¿Qué dicen realmente los datos?
                    </p>
                    <button
                      onClick={handleReveal}
                      className="px-8 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${current.color}, #8B31D4)`, fontFamily: "'Outfit', sans-serif" }}
                    >
                      Revelar la realidad
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function PanicButton() {
  return (
    <button
      onClick={() => { window.location.replace("https://www.google.com") }}
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white text-sm font-bold transition-all hover:scale-105 active:scale-95"
      style={{
        background: "linear-gradient(135deg, #B91C1C, #DC2626)",
        fontFamily: "'Outfit', sans-serif",
        boxShadow: "0 4px 20px rgba(185,28,28,0.5)",
      }}
      title="Salida de emergencia — cierra esta página"
    >
      <span style={{ fontSize: 16 }}>✕</span>
      Salida rápida
    </button>
  )
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Inicio")

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <PanicButton />
      <AICompanionChat />
      <NavBar active={activeNav} setActive={setActiveNav} />
      <HeroSection />
      <TopicsSection />
      <StatsSection />
      <CampaignsSection />
      <ComicSection />
      <AfficheSection />
      <InfografiaSection />
      <QuizSection />
      <PodcastSection />
      <RecomendacionesSection />
      <SimulationSection />
      <RiskCalculatorSection />
      <MitosSection />
      <RumoresSection />
      <MapSection />
      <ResourcesSection />
      <Footer />
    </div>
  )
}
