'use strict';
const http = {};
http.fetch = function(opts){
  if(opts){
    console.log(`Fetching ${opts.note}`);
    console.log(`Fetching ${opts.method}`);
        
  }
};

module.exports = http;