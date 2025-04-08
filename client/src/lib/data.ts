// Product data
export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  category: 'software' | 'hardware' | 'service';
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "DecoNote Pro",
    price: "$59.99",
    description: "Aplicación avanzada para tomar notas con organización impulsada por IA y sincronización multiplataforma.",
    category: "software",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "DecoTablet",
    price: "$249.99",
    description: "Tableta digital diseñada específicamente para tomar notas con sensibilidad a la presión y rechazo de palma.",
    category: "hardware",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "DecoCloud",
    price: "$9.99/mes",
    description: "Solución de almacenamiento en la nube segura diseñada específicamente para notas, documentos y contenido creativo.",
    category: "service",
    image: "https://images.unsplash.com/photo-1586892478025-2b5472316f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "DecoMind",
    price: "$39.99",
    description: "Software de mapas mentales que transforma notas en redes de conocimiento visual con asistencia de IA.",
    category: "software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "DecoPen",
    price: "$129.99",
    description: "Bolígrafo inteligente que digitaliza notas manuscritas en tiempo real con comandos gestuales y grabación de voz.",
    category: "hardware",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "DecoTeam",
    price: "$19.99/usuario",
    description: "Plataforma colaborativa para equipos que permite compartir notas, ideas y proyectos con edición en tiempo real.",
    category: "service",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

// Timeline data
export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2010",
    title: "Fundación",
    description: "Todo comenzó con una simple idea: hacer algo útil para el planeta. Decidimos crear libretas ecológicas  usando materiales reciclados, como papel donado, y asegurándonos de que todo el proceso fuera responsable con el medio ambiente.",
    icon: "fa-star",
    image: "images/history-img-1.jpg"
  },
  {
    id: 2,
    year: "2013",
    title: "Lanzamiento del Primer Producto",
    description: "Cada libreta que vendemos tiene un propósito más grande que solo ser un producto; es una forma de contribuir a un consumo más consciente. Desde nuestros inicios, hemos creído que, con pequeñas acciones, podemos generar un gran cambio.",
    icon: "fa-rocket",
    image: "images/history-img-2.jpeg"
  },
  {
    id: 3,
    year: "2017",
    title: "Expansión Internacional",
    description: "Hoy, gracias a tu apoyo, seguimos creando productos que no solo son prácticos y creativos, sino también amigables con la Tierra.",
    icon: "fa-globe",
    image: "images/history-img-3.jpg"
  }
];

// Chart data
export const satisfactionData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Customer Satisfaction (1-5)',
    data: [4.2, 4.3, 4.5, 4.7],
    backgroundColor: '#3498db'
  }]
};

export const npsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Net Promoter Score',
    data: [42, 45, 48, 47, 52, 58],
    borderColor: '#2ecc71',
    tension: 0.1,
    fill: false
  }]
};

export const productRatingsData = {
  labels: ['Ease of Use', 'Features', 'Performance', 'Design', 'Value'],
  datasets: [{
    label: 'DecoNote Pro',
    data: [4.5, 4.8, 4.3, 4.7, 4.2],
    backgroundColor: 'rgba(52, 152, 219, 0.2)',
    borderColor: '#3498db'
  }, {
    label: 'DecoTablet',
    data: [4.7, 4.2, 4.6, 4.9, 4.0],
    backgroundColor: 'rgba(46, 204, 113, 0.2)',
    borderColor: '#2ecc71'
  }]
};

export const revenueData = {
  labels: ['2018', '2019', '2020', '2021', '2022'],
  datasets: [{
    label: 'Annual Revenue (in millions)',
    data: [5.2, 7.8, 12.3, 18.5, 25.7],
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    borderColor: '#3498db',
    tension: 0.3,
    fill: true
  }]
};

export const marketShareData = {
  labels: ['Deconotes', 'Competitor A', 'Competitor B', 'Others'],
  datasets: [{
    data: [28, 24, 20, 28],
    backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#95a5a6']
  }]
};

export const investmentData = {
  labels: ['2020', '2021', '2022', '2023'],
  datasets: [{
    label: 'R&D Investment (% of Revenue)',
    data: [15, 18, 20, 22],
    backgroundColor: '#f39c12'
  }]
};

// Initiative data
export interface Initiative {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Green Office Initiative",
    description: "Our commitment to reducing our environmental footprint through sustainable office practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Women in Tech Program",
    description: "Supporting and encouraging gender diversity in the technology sector through mentorship and education.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Digital Wellness Campaign",
    description: "Promoting healthy technology use and digital well-being through educational resources.",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

// Financial report data
export interface FinancialReport {
  id: number;
  title: string;
  date: string;
}

export const financialReports: FinancialReport[] = [
  {
    id: 1,
    title: "Q2 2023 Financial Results",
    date: "July 15, 2023"
  },
  {
    id: 2,
    title: "Q1 2023 Financial Results",
    date: "April 15, 2023"
  },
  {
    id: 3,
    title: "Annual Report 2022",
    date: "February 28, 2023"
  },
  {
    id: 4,
    title: "Q4 2022 Financial Results",
    date: "January 15, 2023"
  }
];

// Company news data
export interface CompanyNews {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const companyNews: CompanyNews[] = [
  {
    id: 1,
    title: "Deconotes Announces Strategic Partnership with Global Tech Leader",
    date: "August 12, 2023",
    description: "The collaboration will focus on developing integrated productivity solutions for enterprise customers."
  },
  {
    id: 2,
    title: "Deconotes Expands European Presence with New Office in Berlin",
    date: "July 28, 2023",
    description: "The new location will serve as a hub for our growing European operations and support regional customers."
  },
  {
    id: 3,
    title: "Deconotes Named in \"Top 50 Most Innovative Companies\" List",
    date: "June 15, 2023",
    description: "Our commitment to innovation and product excellence has been recognized by Industry Today magazine."
  }
];
