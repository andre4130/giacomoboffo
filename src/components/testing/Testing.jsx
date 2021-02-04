import React, { useState, useEffect } from "react";
import axios from "axios";

const Testing = () => {
  const [testing, setTesting] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("first function", testing);
      const urlProjects = `http://giacomoboffoapi/wp-json/wp/v2/experience?page=1`;
      const [resTesting] = await Promise.all([
        axios(urlProjects),
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        },
      ]);
      let totalPages = resTesting.headers["x-wp-totalpages"];
      fillArray(totalPages);
    };

    const testFetching = async () => {
      console.log("inside test");
      const urlTest = `http://www.giacomoboffoapi.com.mialias.net/wp-json/wp/v2/experience`;
      const [resTesting] = await Promise.all([
        axios(urlTest),
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        },
      ]);
      console.log("insideFetching", resTesting);
    };

    const fillArray = async (totalPages) => {
      let index = 1;
      for (index; index <= totalPages; index++) {
        const urlProjects = `http://giacomoboffoapi/wp-json/wp/v2/experience?page=${index}`;
        const [resTesting] = await Promise.all([axios(urlProjects)]);
        console.log("in fill array", resTesting.data);
        const arrayTest = resTesting.data;
        console.log("array test", arrayTest);
        setTesting([...testing, resTesting.data]);
        //  console.log("index", index, "array",testing)
      }
      console.log("second function end", testing);
    };
    fetchData();
    testFetching();
    console.log("1", testing);
  }, []);

  console.log("second function end", testing);

  // useEffect(() => {
  //   const fetchData = async () => {

  //     if (testing.totalPages === "") {
  //       console.log("on first loop", testing)
  //       const urlProjects = `http://giacomoboffoapi/wp-json/wp/v2/experience?page=1`;
  //       const [resTesting] = await Promise.all([
  //         axios(urlProjects)
  //       ]);
  //       setTesting([{ testing: resTesting.data, totalPages: resTesting.headers['x-wp-totalpages'], isLoaded: true }])
  //       console.log("end of first loop", testing)
  //     } else if (testing.isLoaded) {
  //       for (let index = 1; index < testing.totalPages + 1; index++) {
  //         const urlProjects = `http://giacomoboffoapi/wp-json/wp/v2/experience?page=${index}`;
  //         const [resTesting] = await Promise.all([
  //           axios(urlProjects)
  //         ]);
  //         setTesting([...testing, resTesting]);
  //       }
  //     }
  //   };
  //   fetchData();
  //   console.log(testing)
  // }, []);

  return <div style={{ display: "null" }}>i'm testing</div>;
};

export default Testing;
