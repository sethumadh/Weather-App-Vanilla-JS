const key = "YGWi9NnU1oC5pwoo3gumUI4Fcl5En5hs";

const getCity = async function (city) {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  //   console.log(datas[0].Key);
  return data[0];
};

const getCondition = async function (id) {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// getCity("brisbane")
//   .then((data) => {
//     return getCondition(data.Key);
//   })
//   .then((data) => console.log(data))

//   .catch((err) => console.log(err.message));
