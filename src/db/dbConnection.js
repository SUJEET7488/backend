import mongoose from 'mongooose';
const connect =()=>{
  try{
    mongoose.connect('mongodb://localhost:27017');
  }
  catch(e)
  {
    console.log(e);
  }
}