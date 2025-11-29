// Idioma por defecto (inglés)
let currentLang = 'en';

// Textos en diferentes idiomas
const translations = {
    'es': {
        'about': 'Sobre mí',
        'experience': 'Experiencia',
        'education': 'Educación',
        'skills': 'Habilidades',
        'projects': 'Proyectos',
        'contact': 'Contacto',
        'hero-title': 'Desarrollador Web Full Stack',
        'hero-desc': 'Con experiencia en consultoría informática. Nivel B2 de inglés. Actualmente residiendo en Irlanda.',
        'contact-btn': 'Contáctame',
        'about-title': 'Sobre mí',
        'about-p1': 'Soy un desarrollador web full stack apasionado por la tecnología y la creación de soluciones digitales innovadoras. Mi experiencia incluye prácticas profesionales en AXPE, una consultora informática, donde adquirí experiencia práctica en el desarrollo de aplicaciones web.',
        'about-p2': 'Actualmente resido en Irlanda, lo que me ha permitido mejorar mi nivel de inglés hasta alcanzar un B2 y experimentar un entorno internacional que enriquece mi perspectiva profesional.',
        'about-p3': 'Mi objetivo es continuar creciendo como desarrollador, enfrentando nuevos desafíos y contribuyendo con soluciones tecnológicas de calidad.',
        'stat-experience': 'Años de experiencia',
        'stat-projects': 'Proyectos completados',
        'stat-technologies': 'Tecnologías dominadas',
        'experience-title': 'Experiencia Profesional',
        'exp1-title': 'Prácticas profesionales - Desarrollador Web',
        'exp1-desc': 'Durante mis prácticas en AXPE, participé en el desarrollo de aplicaciones web, trabajando con tecnologías como HTML, CSS, JavaScript, React y Spring Boot. Colaboré en proyectos reales bajo la supervisión de profesionales experimentados.',
        'exp2-title': 'Denjoes Apache Killarney - Cajero',
        'exp2-date': '2023 - Actualidad',
        'exp2-desc': 'Trabajé como cajero en Denjoes Apache Killarney, donde desarrollé habilidades de atención al cliente, manejo de efectivo, gestión de inventario y trabajo en equipo en un entorno multicultural.',
        'exp3-title': 'Carrefour Market',
        'exp3-date': '3 meses - 2021',
        'exp3-desc': 'Trabajé en Carrefour Market desarrollando habilidades de atención al cliente, trabajo en equipo y gestión de tiempo en un entorno dinámico y demandante.',
        'education-title': 'Formación Académica',
        'edu1-title': 'Grado Superior en Desarrollo de Aplicaciones Web',
        'edu1-desc': 'Formación especializada en desarrollo web, programación, bases de datos y diseño de aplicaciones.',
        'edu2-title': 'Bachillerato',
        'edu2-desc': 'Formación preuniversitaria con enfoque en tecnologías y ciencias.',
        'skills-title': 'Habilidades Técnicas',
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-devops': 'DevOps & Herramientas',
        'skills-languages': 'Idiomas',
        'skills-responsive': 'Responsive Design',
        'skills-db': 'Bases de Datos SQL',
        'skills-agile': 'Metodologías Ágiles',
        'skills-spanish': 'Español: Nativo',
        'skills-english': 'Inglés: Nivel B2',
        'projects-title': 'Proyectos Destacados',
        'project1-desc': 'Tienda online de videojuegos desarrollada con React y Node.js.',
        'project2-title': 'Sistema de Análisis de Datos',
        'project2-desc': 'Sistema de análisis y visualización de datos utilizando ELK Stack.',
        'project3-title': 'E-commerce Platform',
        'project3-desc': 'Plataforma de comercio electrónico desarrollada con React y Spring Boot.',
        'project4-title': 'Blog Personal',
        'project4-desc': 'Blog personal desarrollado con PHP y MySQL con panel de administración.',
        'project-visit': 'Visitar sitio',
        'project-code': 'Código',
        'contact-title': 'Contacto',
        'contact-get-in-touch': 'Ponte en contacto',
        'contact-desc': 'Actualmente resido en Irlanda y estoy abierto a oportunidades laborales tanto presenciales como remotas.',
        'location': 'Irlanda',
        'form-send-message': 'Envíame un mensaje',
        'form-name': 'Nombre',
        'form-email': 'Email',
        'form-subject': 'Asunto',
        'form-message': 'Mensaje',
        'form-submit': 'Enviar Mensaje',
        'form-success': '¡Gracias por tu mensaje! Te responderé pronto.',
        'footer': 'Desarrollador Web Full Stack',
        'tag-customer-service': 'Atención al cliente',
        'tag-cash-management': 'Gestión de caja',
        'tag-teamwork': 'Trabajo en equipo',
        'tag-multicultural': 'Multicultural',
        'tag-time-management': 'Gestión de tiempo'
    },
    'en': {
        'about': 'About me',
        'experience': 'Experience',
        'education': 'Education',
        'skills': 'Skills',
        'projects': 'Projects',
        'contact': 'Contact',
        'hero-title': 'Full Stack Web Developer',
        'hero-desc': 'With experience in IT consulting. B2 English level. Currently residing in Ireland.',
        'contact-btn': 'Contact me',
        'about-title': 'About me',
        'about-p1': 'I am a full stack web developer passionate about technology and creating innovative digital solutions. My experience includes professional internships at AXPE, an IT consulting firm, where I gained hands-on experience in web application development.',
        'about-p2': 'I currently reside in Ireland, which has allowed me to improve my English level to B2 and experience an international environment that enriches my professional perspective.',
        'about-p3': 'My goal is to continue growing as a developer, facing new challenges and contributing with quality technological solutions.',
        'stat-experience': 'Years of experience',
        'stat-projects': 'Projects completed',
        'stat-technologies': 'Technologies mastered',
        'experience-title': 'Professional Experience',
        'exp1-title': 'Internship - Web Developer',
        'exp1-desc': 'During my internship at AXPE, I participated in the development of web applications, working with technologies such as HTML, CSS, JavaScript, React and Spring Boot. I collaborated on real projects under the supervision of experienced professionals.',
        'exp2-title': 'Denjoes Apache Killarney - Cashier',
        'exp2-date': '2023 - Present',
        'exp2-desc': 'Worked as a cashier at Denjoes Apache Killarney, where I developed customer service skills, cash handling, inventory management and teamwork in a multicultural environment.',
        'exp3-title': 'Carrefour Market',
        'exp3-date': '3 months - 2021',
        'exp3-desc': 'I worked at Carrefour Market developing customer service skills, teamwork and time management in a dynamic and demanding environment.',
        'education-title': 'Education',
        'edu1-title': 'Higher Degree in Web Application Development',
        'edu1-desc': 'Specialized training in web development, programming, databases and application design.',
        'edu2-title': 'High School',
        'edu2-desc': 'Pre-university education with a focus on technology and sciences.',
        'skills-title': 'Technical Skills',
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-devops': 'DevOps & Tools',
        'skills-languages': 'Languages',
        'skills-responsive': 'Responsive Design',
        'skills-db': 'SQL Databases',
        'skills-agile': 'Agile Methodologies',
        'skills-spanish': 'Spanish: Native',
        'skills-english': 'English: B2 Level',
        'projects-title': 'Featured Projects',
        'project1-desc': 'Online video game store developed with React and Node.js.',
        'project2-title': 'Data Analysis System',
        'project2-desc': 'Data analysis and visualization system using ELK Stack.',
        'project3-title': 'E-commerce Platform',
        'project3-desc': 'E-commerce platform developed with React and Spring Boot.',
        'project4-title': 'Personal Blog',
        'project4-desc': 'Personal blog developed with PHP and MySQL with admin panel.',
        'project-visit': 'Visit site',
        'project-code': 'Code',
        'contact-title': 'Contact',
        'contact-get-in-touch': 'Get in touch',
        'contact-desc': 'I currently reside in Ireland and I am open to both on-site and remote job opportunities.',
        'location': 'Ireland',
        'form-send-message': 'Send me a message',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'form-success': 'Thank you for your message! I will respond soon.',
        'footer': 'Full Stack Web Developer',
        'tag-customer-service': 'Customer Service',
        'tag-cash-management': 'Cash Management',
        'tag-teamwork': 'Teamwork',
        'tag-multicultural': 'Multicultural',
        'tag-time-management': 'Time Management'
    }
};

// FUNCIÓN para cambiar el idioma
function changeLanguage(lang) {
    currentLang = lang;
    
    // Actualizar botones de idioma
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Actualizar todos los textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Event listeners para los botones de idioma
document.getElementById('lang-es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));

// Inicializar con inglés por defecto
document.addEventListener('DOMContentLoaded', () => changeLanguage('en'));

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Usar el mensaje traducido
    alert(translations[currentLang]['form-success']);
    this.reset();
});