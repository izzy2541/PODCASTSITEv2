import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Joi from 'joi';





function Home(props) {

  //state
  const [query, setQuery] = useState('best_podcasts');
  const [error, setErrors] = useState(null);
  const [podcastResults, setPodcastResults] = useState([]);


  useEffect(() => {
    getResults()
  }, [query]);

  //initial results upon loading home page
  async function getResults() {
    let config = {
      headers: {
        'X-ListenAPI-Key': 'd368862767b447acab94f74c1ea84606'
      }
    };
    let response = await axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}`, config)
    console.log(response);
    console.log(response.data.results);
    response = response.data.results
    setPodcastResults(response);
  }

  //form validation
  const schema = Joi.object({
    search: Joi.string()
      .alphanum()
      .min(2)
      .max(50)
      .required()
  });

  const handleChange = (e) => {
    const validation = schema.validate({ search: e.target.value });
    if (validation.error) {
      console.log(validation.error.details[0].message);
      setErrors(validation.error.details[0].message);
    } else {
      setErrors(null);
    }
    console.log(e.target.value);
    setQuery(e.target.value);

  }

  return (
    <Fragment>
      <Container>
          <div className="log">POD.COM<br></br>
          PODCAST<br></br>SEARCH SITE</div>
     
        <div className="line">
          <hr
            style={{
              height: 3,
              opacity: 1,
              width: "75vw",
              display: "flex",
            }}
          />
        </div>
        <div className="welcome-text">
          Pod.Com was established in 2016. The vision was to take only the best podcasts, from all the best creators and put them under one roof (or URL). Your search will never return more than 10 results - keeping things succint. 
          Pod.Com is your number one website for looking up and listening to podcasts.
        </div>

        <div className="line">
          <hr
            style={{
              height: 3,
              opacity: 1,
              width: "75vw",
              display: "flex",
            }}
          />
        </div>

        <div className="container search-results">

          <div className="row">
            <div className="row-input-group">
              <input type="text" className="form-control" placeholder="Search" value={query} onChange={handleChange} />
            </div>
            <p className='text-danger'>{error && error}</p>
            <div className="row">
              {podcastResults && podcastResults.map((podcast, index) => (
                <div className="card col-lg-3 col-sm-6 col-12 py-5" key={index}>
                  <img className="card-img-top" src={podcast.image} alt="Card image cap" />
                  <h2 className="card-title">{podcast.title_original}</h2>
                  <div className="card-buttons">
                    <a href={podcast.audio} className="btn">Listen</a>
                    <Link className="btn" to={`/podcasts/${podcast.podcast.id}`}>View</Link>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </Fragment >
  );
}


export default Home;