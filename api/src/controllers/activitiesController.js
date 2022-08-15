const {Activities,Country,countries_activities} = require("../db.js");

const postActivities = async (req, res) =>{
    const { name,dificulty,duration,season,country } = req.body
    try {
        if (!name || !dificulty || !duration || !season ){
            return res.status(404).send("You need more information!!")
        }
        if(dificulty<1 || dificulty>5){
            return res.status(404).send("the dificulty of the activity must be between 1 and 5!!")
        }
        
        if(season.toLowerCase()!=="summer" && season.toLowerCase()!=="autumn"
          && season.toLowerCase()!=="winter" && season.toLowerCase()!=="spring" 
        ){
          
            return res.status(404).send("you must type one of  the four seasons (summer,autumn,winter,spring)!!")
        }
          let checkActivity = await Activities.findAll({
            where: {
              name: name,
            },
          });
         const countrymatch = await Country.findAll({
            attributes: ['id'],
            where: {
              name: country.toLowerCase(),
            },
          });
         
          if(!Object.keys(countrymatch).length){
            return res.status(404).json({
              msg: `you need to choose a country before of creating the activity`
          })
          }
          let result2,actId=0;
          let result = countrymatch.map(a => a.id).toString();

          //validate if an activity exists in the country

          let activitymatch= await Activities.findAll({
            attributes: ['id'],
            where: {
              name:name.toLowerCase().trim()
            }
           }
           );
           if(Object.keys(activitymatch).length){
            result2 = activitymatch.map(a => a.id);
              actId=(result2.pop()).toString();
           }
        
          const activityIncountry = await countries_activities.findAll({
            attributes: ['activityId'],
            where: {
              countryId: result,
              activityId: actId
            },
          });

         // console.log(Object.keys(activityIncountry).length);

          if(Object.keys(checkActivity).length && Object.keys(activityIncountry).length){
            return res.status(404).json({
              msg: "this activity already exists in this country"
          })
          }
         await Activities.create({name, dificulty, duration, season})
          activitymatch= await Activities.findAll({
            attributes: ['id'],
            where: {
              name:name
            }
           }
           );
           result2 = activitymatch.map(a => a.id);
           actId=(result2.pop()).toString();    
        //console.log(actId);    
         let obj1 = {
          countryId: result,
          activityId: actId
       }  
         await countries_activities.create(obj1)
        return res.status(200).send("activity created succesfully")
       } catch (error) {
        return res.status(404).send(error.message)
    }
}

const getallactivities= async (req,res)=>{
    // console.log("get ALL activities");
     try{
       let activities= await Activities.findAll()
   
       if(!Object.keys(activities).length){
         return res.status(404).json({
           msg: "Activities not found in database"
       })
       }
       return res.status(200).send(activities)
   }catch(err){
       return res.status(404).send(err.message);
   }
   }

module.exports = {
    postActivities,
    getallactivities
}