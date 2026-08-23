const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'GnrF3OsMuHM-6biHICjGazgug9RW0AD2BaFwr5fMb4K2nEVXkauM87rB9V7QmPoAbMoFHCly0fDVUz5ot4ZQkg';
const DOMAINS = [
  'mcdonalds.com',
  'wendys.com',
  'pizzahut.com',
  'tacobell.com',
  'kfc.com',
  'sysco.com',
  'nestle.com',
  'pepsico.com',
  'coca-cola.com',
  'unilever.com',
  'hilton.com',
  'marriott.com',
  'starbucks.com',
  'subway.com',
  'dominos.com',
  'burgerking.com'
];

const OUTPUT_DIR = path.join(__dirname, '../public/brands');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function fetchBrandData(domain) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.brandfetch.io',
      path: `/v2/brands/${domain}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Failed to fetch ${domain}: ${res.statusCode} ${data}`));
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.end();
  });
}

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(filepath, buffer);
}

async function main() {
  for (const domain of DOMAINS) {
    console.log(`Fetching data for ${domain}...`);
    try {
      const data = await fetchBrandData(domain);
      
      // Try to find a logo, fallback to symbol
      let targetImage = null;
      let targetFormat = 'svg';

      if (data.logos && data.logos.length > 0) {
        // prefer type "logo" over "symbol"
        const logoGroup = data.logos.find(l => l.type === 'logo') || data.logos[0];
        
        // prefer svg over png over jpeg
        const formatOrder = ['svg', 'png', 'jpeg'];
        for (const format of formatOrder) {
          const img = logoGroup.formats.find(f => f.format === format);
          if (img) {
            targetImage = img.src;
            targetFormat = format;
            break;
          }
        }
        
        // fallback to first format
        if (!targetImage && logoGroup.formats.length > 0) {
          targetImage = logoGroup.formats[0].src;
          targetFormat = logoGroup.formats[0].format;
        }
      }

      if (targetImage) {
        const filename = `${domain.split('.')[0]}.${targetFormat}`;
        const filepath = path.join(OUTPUT_DIR, filename);
        console.log(`Downloading image to ${filename}...`);
        await downloadImage(targetImage, filepath);
        console.log(`Successfully downloaded ${domain}`);
      } else {
        console.log(`No logos found for ${domain}`);
      }

    } catch (err) {
      console.error(`Error processing ${domain}:`, err.message);
    }
  }
  console.log('Finished!');
}

main();
