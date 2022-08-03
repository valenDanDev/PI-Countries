const {Activities} = require("../db.js");

const postActivities = async (req, res) =>{
    const { name,dificulty,duration,season} = req.body
    try {
        if (!name || !dificulty || !duration || !season ){
            return res.status(404).send("You need more information!!")
        }
        if(dificulty<1 || dificulty>5){
            return res.status(404).send("the dificulty of the activity must be between 1 and 5!!")
        }
        
        if(season.toLowerCase()!=="verano" && season.toLowerCase()!=="otoño"
          && season.toLowerCase()!=="invierno " && season.toLowerCase()!=="primavera" 
        ){
            return res.status(404).send("you must type one of  the four seasons (verano,otoño,invierno,primavera)!!")
        }

      
        let checkActivity = await Activities.findAll({
            where: {
              name: name,
            },
          });

          //console.log(Object.keys(checkActivity).length);

          if(Object.keys(checkActivity).length){
            return res.status(404).json({
              msg: "this activity already exists"
          })
          }
    
         await Activities.create({name, dificulty, duration, season})
          
        return res.status(200).send("activity created succesfully")
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const getallactivities= async (req,res)=>{
    // console.log("get ALL activities");
     try{
       let coun= await Activities.findAll()
   
       if(!Object.keys(coun).length){
         return res.status(404).json({
           msg: "Activities not found in database"
       })
       }
       return res.status(200).json(coun)
   }catch(err){
       return res.status(404).send(err.message);
   }
   }

module.exports = {
    postActivities,
    getallactivities
}