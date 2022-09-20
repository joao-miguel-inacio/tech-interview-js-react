import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';


const InfoPage = ({ theme }) => {
  const [info, setInfo] = useState(null);
  const [fetchingInfo, setFetchingInfo] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getInfo();
  }, [] );

  const getInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${theme}`
      );
      const randomData =
        response.data[Math.floor(Math.random() * response.data.length)];
      setTimeout(() => {
        setInfo(randomData);
        setFetchingInfo(false);
      }, 500);
    } catch (err) {
      navigate("/error");
    }
  };
  if (fetchingInfo) {
    return (
      <div className="container">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="container">
      <h3>Q: {info.Question}</h3>
      <h4>A: {info.Answer}</h4>
      <div className="button-group">
				<Link to={`/`}><button className="button">Home</button></Link>
			</div>
    </div>
  );
};

export default InfoPage;
