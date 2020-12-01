import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testing = () => {

    const [testing, setTesting] = useState({ testing: [], page: "1", totalPages: '', isLoaded: false })


    useEffect(() => {
        const fetchData = async () => {

          if(testing.totalPages === ""){
            console.log("nothing yet")
          }else{
            for (let index = 1; index < testing.totalPages+1; index++) {
                
            
              const urlProjects = `http://giacomoboffoapi/wp-json/wp/v2/experience?page=${index}`;
        
              const [resTesting] = await Promise.all([
                axios(urlProjects)
              ]);
            
              setTesting([{...testing, testing: resTesting.data, page: index, totalPages: resTesting.headers['x-wp-totalpages'], isLoaded: true }]);   
            
            }
          }
           };
        fetchData();
    
      }, [[],testing]);

      console.log(testing)  


    return (
        <div style={{"display": "null"}}>
            i'm testing
        </div>
    );
};

export default Testing;