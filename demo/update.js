const fs = require('fs');
const https = require('https');



(async () => {
  const dirName = __dirname;

  const components = JSON.parse(fs.readFileSync(`${dirName}/src/demos.json`, 'UTF-8'));
  components
    .forEach(component => {
      (component.children || []).forEach(page => {
        if (page.demoSource) {
          const [vaadinComponent, demoPage] = page.demoSource.split('/');

          https.get(`https://raw.githubusercontent.com/vaadin/${vaadinComponent}/master/demo/${demoPage}.html`, resp => {
            let data = '';
            resp.on('data', chunk => data += chunk);
            resp.on('end', () => {
              try{
                fs.mkdirSync(`${dirName}/src/demos/${vaadinComponent}`);
              } catch(e) {}

              fs.writeFileSync(`${dirName}/src/demos/${vaadinComponent}/${demoPage}`, data, 'utf8');
            });
          });
        }
      });
    });
})();
