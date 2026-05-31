import fs from 'fs/promises';

const icons = {
  linkedin: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
  facebook: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
  instagram: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
  tiktok: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg'
};

async function run() {
  for (const [name, url] of Object.entries(icons)) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      await fs.writeFile(`public/${name}.svg`, text);
      console.log(`Downloaded ${name}.svg`);
    } catch (e) {
      console.error(`Failed ${name}: ${e.message}`);
    }
  }
}
run();
