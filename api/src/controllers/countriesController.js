const { Country } = require("../db.js");
const axios = require("axios");

const getCountries = async (req, res) => {
  try {
    let countries = await axios.get("https://restcountries.com/v3/all");
    let response = countries.data?.map((e) => {
      let cap,reg;
      
      if(typeof e.capital === 'undefined'){
        cap="NO capital"
      }else{
        cap=e.capital[0];
      }
      if(typeof e.subregion === 'undefined'){
        reg="NO subregion"
      }else{
        reg=e.subregion
      }
      

      return {
        id: e.cca3,
        name: e.name.common,
        image:e.flags[0],
        continent:e.continents[0],
        capital: cap,
        subregion:reg,
        area:e.area,
        population:e.population
      };
    });
 
   
    response.forEach(async (e) => {
      await Country.findOrCreate({
        where: {
          id: e.id,
          name: e.name,
          image:e.image,
          continent:e.continent,
          capital: e.capital,
          subregion:e.subregion,
          area:e.area,
          population:e.population
        },
      });
    });
    // return res.send(response)
  } catch (e) {
    console.error(e);
  }
};

const getallcountries= async (req,res)=>{
  try{
    let coun= await Countries.findAll()
    return res.status(200).json(coun)
}catch(err){
    return res.status(404).send(err.massege);
}
}



module.exports = {
    getCountries,
    getallcountries,
};