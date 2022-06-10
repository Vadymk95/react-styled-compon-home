import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import List from './../components/List';
import Card from './../components/Card';
import Controls from './../components/Controls';

import { ALL_COUNTRIES } from './../config';

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios(ALL_COUNTRIES)
        .then(({ data }) => {
          setCountries(data)
        })
        .catch((err) => console.error(err));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries])

  return (
    <>
      <Controls onSearch={handleSearch}/>
      <List>
        {filteredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: 'population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'region',
                description: country.region,
              },
              {
                title: 'capital',
                description: country.capital,
              },
            ],
          };
          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => navigate(`country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
