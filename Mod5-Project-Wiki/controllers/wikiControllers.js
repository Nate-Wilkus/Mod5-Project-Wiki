const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, '../data/db.json');

const getArticle = () => { 
    return new Promise((resolve, reject) => { 
      fs.readFile(dbFile, (err, data) => { 
        // if error - file is not exist 
        if (err) return resolve([])
        // return the cubes as array of data 
        resolve(JSON.parse(data));
      })
    })
  }

  module.exports = class Article { 
    constructor(title, content) {  
      this.title = title; 
      this.content = content;
    }
  
    async save() { 
      const articles = await getArticle();
      this.id = Date.now();
      cubes.push(this)
      fs.writeFile(dbFile, JSON.stringify(articles), (err) => { 
        console.log(err);
      })
    }
  
    static async fetchArticles() { 
      return await getArticle();
    }
  
    static async findById(id) { 
      
      const cubes = await getArticle();
  
      const cube = cubes.find(c => c.id == id)
      return cube;
      
    }
  }