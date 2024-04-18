
  const express = require('express');
  const app = express();

  
// Function to fetch data every 115 milliseconds
const fetchDataEvery115ms = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
              {
                name: "Pizza",
                description1: "Delicious Italian dish with cheese, sauce, and toppings on a thin crust",
                price:500
            },
            {
              name: "Burger",
              description1: "Delicious Burger with crispy patty",
              price:200
            },
            {
              name: "Pasta",
              description1: "Mouth watering Pasta with amazing taste",
              price:180
            },
          ]
            resolve(data);
        }, 115);
    });
   
  
  };
  
  // Function to fetch data every 2 minutes
  const fetchDataEvery2Minutes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ["New York","Dubai","New Jersey","New Delhi"];
              
            resolve(data);
        }, 1000*60*2);
    });
   
  };
  
  // Function to fetch data every 300 milliseconds
  const fetchDataEvery300ms = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ["Iron","Calcium","Protein","Carbs"]
            
            resolve(data);
        }, 300);
    });
    
  };
  
  // Function to fetch data every 100 milliseconds
  const fetchDataEvery100ms = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ["Burger","Pizza"]
            
            resolve(data);
        }, 100);
    });
  
  };
  
  // Merge all the data from different functions into a single object
  const mergeData = async () => {
    const foodInfo = await fetchDataEvery115ms();
    const foodLocations = await fetchDataEvery2Minutes();
    const foodNutritions = await fetchDataEvery300ms();
    const stockOut = await fetchDataEvery100ms();
  
    return {
     foodInfo,
    foodLocations,
    foodNutritions,
    stockOut
    };
  };
  
  


  app.get('/api/food-items', async (req, res) => {
   try{
    const mergedData = await mergeData();
    res.json(mergedData);
   }catch(err){
    
    res.status(400).send(err);
   }
  });
  
  // Start the Express server
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  