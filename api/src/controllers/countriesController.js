const { Country } = require("../db.js");
const axios = require("axios");

const getCountries = async (req, res) => {
  try {
    let countries = await axios.get("https://restcountries.com/v3/all");
    let response = countries.data?.map((r) => {
      let cap,reg;
      
      if(typeof r.capital === 'undefined'){
        cap="NO capital"
      }else{
        cap=r.capital[0];
      }
      if(typeof r.subregion === 'undefined'){
        reg="NO subregion"
      }else{
        reg=r.subregion
      }
      

      return {
        id: r.cca3,
        name: r.name.common,
        image:r.flags[0],
        continent:r.continents[0],
        capital: cap,
        subregion:reg,
        area:r.area,
        population:r.population
      };
    });
 
   
    response.forEach(async (r) => {
      await Country.findOrCreate({
        where: {
          id: r.id,
          name: r.name,
          image:r.image,
          continent:r.continent,
          capital: r.capital,
          subregion:r.subregion,
          area:r.area,
          population:r.population
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
    let coun= await Country.findAll()
    return res.status(200).json(coun)
}catch(err){
    return res.status(404).send(err.massege);
}
}



module.exports = {
    getCountries,
    getallcountries,
};