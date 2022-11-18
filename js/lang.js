var language = {
  es: {
    lang: "ES",
    nav: {
      services: "Servicios",
      portfolio: "Portfolio",
      agency: "Agencia",
      contact: "Contacto"
    },
    textOneIndex: "Que tu marca hable por vos",
    textTwoIndex: "Trabajamos para posicionar a las organizaciones que confían en nosotros, generando iniciativas que marcan la diferencia. Aportamos valor e innovación en cada uno de nuestros proyectos, porque entendemos que la clave está en una estrategia que se ajuste a la perfección a cada marca.",
    textThreeIndex: `"Queremos ser el nexo entre tu empresa y el mundo digital."`,
    footer: {
      services: "Servicios",
      portfolio: "Portfolio",
      agency: "Agencia",
      contact: "Contacto"
    },
    contactFooter:"Contacto",
    textOneServices: "Servicios",
    textTwoServices: "Conocé todos los servicios que estamos listos para ofrecerte.",
    textThreeServices: "MARKETING DE INFLUENCERS",
    textFourServices: "Te ayudamos a desarrollar una estrategia con influencers acordes a tu marca y objetivo.",
    textFiveServices: "REPUTACIÓN Y GESTIÓN DE CRISIS",
    textSixServices: "Te ayudamos a prevenir situaciones de crisis en tu marca y a estar preparado para enfrentarlas de manera exitosa.",
    textSevenServices: "COMUNICACIÓN INTERNA & EXTERNA",
    textEightServices: "Desarrollamos campañas con alto impacto para tus públicos internos y externos.",
    textNineServices: "SOCIAL MEDIA",
    textTenServices: "Gestión de redes sociales a partir de una estrategia integral para conectar con tu público objetivo de forma eficaz.",
    textElevenServices: "DISEÑO GRÁFICO",
    textTwelveServices: "Diseño de piezas gráficas que respondan a la necesidad de cada cliente y proyecto.",
    textThirdteenServices: "CREACIÓN DE CONTENIDOS",
    textFourteenServices: "Producción de todos los recursos necesarios para tu marca, como fotografías, vídeos o textos.",
    textFifteenServices: "¡Consultanos lo que necesites!",
    textOnePortfolio:"Portfolio",
    textTwoPortfolio: "Te invitamos a hacer un acercamiento a nuestros trabajos destacados, cada uno con su propia impronta y esencia.",
    textOneAgency: "Nuestra Agencia",
    textTwoAgency: "Grissia es un equipo multidisciplinario con amplia formación en marketing, relaciones públicas, social media management, diseño gráfico, copywriting, publicidad y otras disciplinas que complementan a la perfección.",
    textThreeAgency: "Nos dedicamos a la comunicación estratégica entre nuestros clientes y sus públicos. Trabajamos para posicionar a las organizaciones que confían en nosotros, desarrollando estrategias comunicacionales para transmitir el mensaje de la marca al público adecuado.",
    textFourAgency: `“Generando iniciativas que marcan la diferencia”`,
    textOneContact: "Contactanos",
    textTwoContact: "Ponete en contacto con nosotros",
    textThreeContact: "¿Te gustaría trabajar con Grissia?",
    textFourContact: "¿Tenés alguna duda sobre la agencia?",
    textFiveContact: "¡Comunicate con nosotros!",
    textSixContact: "Envianos un mensaje",
    textSevenContact: "Nombre",
    textEightContact: "Apellido",
    textNineContact: "Email",
    textTenContact: "Telefono",
    textElecenContact: "Mensaje",    
    button:"Enviar"
  },
  en: {
    lang: "EN",
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      agency: "Agency",
      contact: "Contact"
    },
    textOneIndex: "Let your brand speak for you",
    textTwoIndex: "We focus on positioning the brands that trust us, generating initiatives that make a difference. We bring value and innovation to each of our projects, because we understand that the key is a strategy that fits perfectly to each brand.",
    textThreeIndex: `"We want to be the nexus between your business and the digital world."`,
    footer: {
      services: "Services",
      portfolio: "Portfolio",
      agency: "Agency",
      contact: "Contact"
    },
    contactFooter: "Contact",
    textOneServices: "Services",
    textTwoServices: "Learn about all the services we are ready to offer you.",
    textThreeServices: "INFLUENCER MARKETING",
    textFourServices: "We help you develop a strategy with influencers according to your brand and target.",
    textFiveServices: "REPUTATION AND CRISIS MANAGEMENT",
    textSixServices: "We help prevent crisis situations in your brand and be prepared to face them successfully.",
    textSevenServices: "INTERNAL & EXTERNAL COMMUNICATION",
    textEightServices: "We develop high impact campaigns for your internal and external audiences.",
    textNineServices: "SOCIAL MEDIA",
    textTenServices: "Social media management based on a global strategy to connect with your target audience in an effective way.",
    textElevenServices: "GRAPHIC DESIGN",
    textTwelveServices: "Design of graphic pieces that respond to the needs of each client and project.",
    textThirdteenServices: "CONTENT CREATION",
    textFourteenServices: "Production of all the necessary resources for your brand, such as photographs, videos or texts.",
    textFifteenServices: "Contact us for anything you need!",
    textOnePortfolio:"Portfolio",
    textTwoPortfolio: "We invite you to take a closer look at our outstanding works, each one with its own style and spirit.",
    textOneAgency: "Our Agency",
    textTwoAgency: "Grissia is a multidisciplinary team with extensive background in marketing, public relations, social media management, graphic design, copywriting, advertising and other disciplines that complement each other perfectly.",
    textThreeAgency: "We are dedicated to strategic communication between our clients and their audiences. We work to position the organizations that trust us, developing communication strategies to convey the brand's message to the right audience.",
    textFourAgency: `"Generating initiatives that make a difference".`,
    textOneContact: "Contact",
    textTwoContact: "Get in touch with us",
    textThreeContact: "Would you like to work with Grissia?",
    textFourContact: "Do you have any questions?",
    textFiveContact: "Contact us!",
    textSixContact: "Send us a message",
    textSevenContact: "Name",
    textEightContact: "Last name",
    textNineContact: "Email",
    textTenContact: "Phone",
    textElecenContact: "Message",
    button:"Send"
  }
}



const $dropdownTarget = document.getElementById('language-dropdown-menu')
const $dropdownTrigger = document.getElementById('lang')
const dropdown = new Dropdown($dropdownTarget, $dropdownTrigger)
const $dropdownOptions = $dropdownTarget.getElementsByTagName('a')
for (let el of $dropdownOptions) {
  el.onclick = () => dropdown.hide()
}

const translate = (prop, subpaths = []) => {
  const keys = Object.keys(prop)
  keys.forEach(key => {
    const value = prop[key]
    if (typeof value === 'string') {
      const id = subpaths.length === 0 ? key : `${subpaths.join('-')}-${key}`
      const el = document.getElementById(id)
      if (el) {
        if (key === 'placeholder') {
          el.placeholder = value
        } else {
          el.textContent = value
        }
      }
    } else {
      translate(value, [...subpaths, key])
    }
  })
}

const hash = window.location.hash.replace("#", "")
const lang = language[hash]
if (lang) {
  translate(lang)
}



window.onhashchange = (e) => {
  const langs = Object.keys(language)
  const hash = e.target.location.hash.replace("#", "")
  if (langs.includes(hash)) {
    location.reload(true)
  }
}