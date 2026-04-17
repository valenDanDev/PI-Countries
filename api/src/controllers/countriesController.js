const { Country,Activities } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");

const getCountries = async () => {
  try {
    console.log("🚀 Calling external API...");

    const countries = await axios.get(
      "https://restcountries.com/v3.1/all?fields=cca3,name,flags,continents,capital,area,population,region"
    );

    console.log("✅ API responded");

    const response = countries.data.map((r) => ({
      id: r.cca3,
      name: r.name.common,
      image: r.flags?.png || "",
      continent: r.continents?.[0] || "unknown",
      capital: r.capital?.[0] || "NO capital",
      subregion: r.region || "NO region",
      area: r.area,
      population: r.population,
    }));

    console.log("🧠 Mapping done, inserting DB...");

await Promise.all(
  response.map((r) =>
    Country.findOrCreate({
      where: { id: r.id }, // 👈 ONLY UNIQUE
      defaults: {
        name: r.name.toLowerCase(),
        image: r.image,
        continent: r.continent.toLowerCase(),
        capital: r.capital.toLowerCase(),
        subregion: r.subregion.toLowerCase(),
        area: r.area,
        population: r.population,
      },
    })
  )
);

    console.log("✅ DB insert finished");

  } catch (e) {
    console.error("❌ ERROR IN getCountries:", e);
    throw e; // 👈 important for debugging
  }
};

const getallcountries= async (req,res)=>{
 // console.log("get ALL countries");
  try{
    let coun= await Country.findAll({
      include: Activities
    })

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
      },include:Activities
    });
    if(!Object.keys(coun).length){
      return res.status(404).json({
        msg: `Country not found with code ${id}`
    })
    }
    return res.status(200).json(coun)
}catch(err){
    return res.status(404).send(err.message);
}
}

const getCountryByName= async (req,res)=>{
  //console.log("get country by name");
  const name =req.query.q;
  try{
    let coun= await Country.findAll({
      where: {
        name:{
          [Op.substring]: `%${name.toLowerCase()}%`
        }
      }
    });
   
    if(!Object.keys(coun).length){
      return res.status(404).json({
        msg: `Country not found with name ${name}`
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