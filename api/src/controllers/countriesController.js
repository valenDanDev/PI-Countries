const { Country } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");

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
  } catch (e) {
    console.error(e);
  }
};

const getallcountries= async (req,res)=>{
 // console.log("get ALL countries");
  try{
    let coun= await Country.findAll()

    if(!Object.keys(coun).length){
      return res.status(404).json({
        msg: "Countries not found in database"
    })
    }
    return res.status(200).json(coun)
}catch(err){
    return res.status(404).send(err.messege);
}
}

const getCountryById= async (req,res)=>{
  //console.log("get country by id");
  const {id} = req.params;
  try{
    let coun= await Country.findAll({
      where: {
        id: id
      }
    });
    if(!Object.keys(coun).length){
      return res.status(404).json({
        msg: "Country not found"
    })
    }
    return res.status(200).json(coun)
}catch(err){
    return res.status(404).send(err.message);
}
}

const getCountryByName= async (req,res)=>{
  console.log("get country by name");
  const name =req.query.q;
  try{
    let coun= await Country.findAll({
      where: {
        name:{
          [Op.substring]: `%${name}%`
        }
      }
    });
   
    if(!Object.keys(coun).length){
      return res.status(404).json({
        msg: "Country not found"
    })
    }
    return res.status(200).json(coun)
}catch(err){
    return res.status(404).send(err.message);
}
}




module.exports = {
    getCountries,
    getallcountries,
    getCountryById,
    getCountryByName,
    
};