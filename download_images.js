const fs = require('fs');
const path = require('path');

const imgList = [
  'public/new_logo_gcci.jpg',
  'images/img_23.jpg',
  'images/img_12.jpg',
  'public/guru.jpg',
  'images/img_15.jpg',
  'cherry_updated_3.jpg',
  'images/img_6.jpg',
  'public/contact_hero.webp',
  'public/founder_1.jpeg',
  'public/founder_4.jpeg',
  'public/planet-earth-background.jpg',
  'images/img_17.jpg',
  'images/img_4.jpg',
  'images/img_21.jpg',
  'images/img_19.jpg',
  'images/img_18.jpg',
  'images/img_16.jpg',
  'images/img_14.jpg',
  'images/img_9.jpg',
  'public/service_hero.jpg',
  'public/service2.jpg',
  'public/service3.jpg',
  'public/service_hero_2.jpg',
  'public/temple.jpg',
  'images/img_30.jpeg',
  'images/img_22.jpg',
  'images/img_13.jpg',
  'images/img_29.jpeg',
  'images/img_31.jpeg',
  'images/img_42.jpeg',
  'images/event1.jpg',
  'images/event2.jpg',
  'images/event3.jpg',
  'images/event4.jpg',
  'images/event5.jpg',
  'images/event6.jpg',
  'images/img_33.jpeg',
  'images/img_37.jpg',
  'images/img_38.jpg',
  'images/img_39.jpg',
  'images/img_40.jpg',
  'images/img_11.jpg',
  'images/img_41.jpg',
  'public/favicon.jpg',
  'public/btlc1.jpg',
  'public/btlc2.jpg'
];

async function downloadImages() {
  for (const img of imgList) {
    const cleanPath = img.replace(/^\//, '');
    const targetFile = path.join('public', cleanPath);
    if (fs.existsSync(targetFile)) {
      continue;
    }
    const targetDir = path.dirname(targetFile);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const url = 'https://gcc-india.com/' + cleanPath;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(targetFile, Buffer.from(buffer));
        console.log('Downloaded:', cleanPath, buffer.byteLength, 'bytes');
      } else {
        console.log('Failed (', res.status, '):', url);
      }
    } catch (e) {
      console.log('Error fetching:', url, e.message);
    }
  }
}
downloadImages();
