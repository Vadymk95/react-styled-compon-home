import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { IoArrowBack } from 'react-icons/io5';
import { searchByCountries } from '../config';
import Button from '../components/Button';
import Info from '../components/Info';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios(searchByCountries(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const handleGoBack = () => navigate(-1);

  console.log(country);

  return (
    <div>
      <Button onClick={handleGoBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info navigate={navigate} {...country}/>}
    </div>
  );
};

export default Details;
