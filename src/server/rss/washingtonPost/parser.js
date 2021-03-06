const Parser = require('../parser')

class WashingtonPostParser extends Parser {
  
  getImageUrl($) {
    try {
      const imageUrl = $('.inline-photo').find('img').attr('data-raw-src')
      return imageUrl ? imageUrl : null
    } catch(err) {
      console.log(err)
    }
  };
}

module.exports = WashingtonPostParser;
