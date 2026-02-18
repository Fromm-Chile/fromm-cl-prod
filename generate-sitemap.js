import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/soluciones', changefreq: 'weekly', priority: 0.8 },
  { url: '/envolvedora', changefreq: 'weekly', priority: 0.8 },
  { url: '/film-embalaje', changefreq: 'weekly', priority: 0.8 },
  { url: '/productos', changefreq: 'weekly', priority: 0.8 },
  { url: '/cotizacion', changefreq: 'monthly', priority: 0.7 },
  { url: '/servicio-tecnico', changefreq: 'monthly', priority: 0.7 },
  { url: '/zunchos-herramientas', changefreq: 'monthly', priority: 0.7 },
  { url: '/Airpads', changefreq: 'monthly', priority: 0.7 },
  { url: '/mercados', changefreq: 'monthly', priority: 0.8 },
  { url: '/mineria', changefreq: 'monthly', priority: 0.7 },
  { url: '/forestal', changefreq: 'monthly', priority: 0.7 },
  { url: '/siderurgica', changefreq: 'monthly', priority: 0.7 },
  { url: '/agricola', changefreq: 'monthly', priority: 0.7 },
  { url: '/construccion', changefreq: 'monthly', priority: 0.7 },
  { url: '/ceramica', changefreq: 'monthly', priority: 0.7 },
  { url: '/envases', changefreq: 'monthly', priority: 0.7 },
  { url: '/fibras-textiles', changefreq: 'monthly', priority: 0.7 },
  { url: '/papel', changefreq: 'monthly', priority: 0.7 },
  { url: '/vidrio', changefreq: 'monthly', priority: 0.7 },
  { url: '/nosotros', changefreq: 'monthly', priority: 0.7 },
  { url: '/politica-calidad', changefreq: 'monthly', priority: 0.7 },
  { url: '/codigo-etica', changefreq: 'monthly', priority: 0.7 },
  { url: '/Contacto', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p331?producto=8', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-p403?producto=10', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-p404?producto=11', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p318?producto=12', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p328?producto=13', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p329?producto=14', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p328s?producto=15', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p329s?producto=16', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-mesa-pm207?producto=17', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-mesa-pm309?producto=18', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-neumatica-p358?producto=19', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-neumatica-p359?producto=20', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-neumatica-p380?producto=21', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a337?producto=22', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a333?producto=23', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a335?producto=24', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a338?producto=25', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-manual-acero-a402?producto=26', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-manual-acero-a412?producto=27', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a480?producto=28', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a482?producto=29', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a483?producto=30', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a380?producto=31', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a383?producto=32', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a385?producto=33', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/maquina-envoltura-giratoria-fs360?producto=34', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/maquina-envoltura-giratoria-fs395?producto=35', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial?producto=36', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-semiautomatico?producto=37', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-metal-bobinas?producto=38', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-aluminio?producto=39', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-otros-metales?producto=40', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-madera?producto=41', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/airpad-ap100?producto=42', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/airpad-ap150?producto=43', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/paperpad?producto=44', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/zuncho-acero?producto=45', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/zuncho-poliester?producto=46', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-construccion?producto=47', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-papel-carton?producto=48', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-100?producto=55', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-150?producto=56', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-200?producto=57', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-600?producto=58', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-610?producto=59', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-611?producto=60', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-550?producto=61', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-tunel-fv300?producto=62', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-tunel-fv350?producto=63', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/sellos-metalicos?producto=64', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/escuadras?producto=65', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/equilabradores-balancines?producto=66', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/corta-zuncho-alta-resistencia?producto=67', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/zuncho-polipropileno?producto=68', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/sellador-manul-zuncho-plastico?producto=70', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/tensor-manul-zuncho-plastico?producto=71', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/balancin-equilibrador-carga?producto=72', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/carro-devanador-zunchos?producto=74', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/corta-zuncho-pet-acero?producto=75', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/corta-zuncho-pet-acero-heavy-duty?producto=76', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/frl-unidad-tratamiento-aire?producto=77', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fr300?producto=78', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fr2000?producto=79', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fs380a?producto=80', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fs500a?producto=81', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-omc-h?producto=82', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://fromm-pack.cl' });
const writeStream = createWriteStream(resolve('dist', 'sitemap.xml'));

const pipelineAsync = promisify(pipeline);

async function generateSitemap() {
  try {
    await pipelineAsync(
      sitemap,
      writeStream
    );
    console.log('Sitemap created successfully!');
  } catch (error) {
    console.error('Error creating sitemap:', error);
  }
}

links.forEach(link => sitemap.write(link));
sitemap.end();

generateSitemap();