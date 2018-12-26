const Parser = require('../parser')

class KickerParser extends Parser {
  
  getImageUrl($) {
    try {
      return $('.img-r,.img-l').find('a').attr('href');
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = KickerParser;
