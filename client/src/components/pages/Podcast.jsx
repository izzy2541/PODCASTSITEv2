import React, { useState, useEffect } from 'react';

//axios allows us to connect to the API

import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

//get podcast by id
const Podcast = (props) => {
    const id = useParams('id');
    //state
    const [podcast, setPodcast] = useState(null)

//display of single podcast details after clicking view button on the first page
    useEffect(() => {
        async function getPodcast() {
            let config = {
                headers: {
                    'X-ListenAPI-Key': 'd368862767b447acab94f74c1ea84606'
                }
            };
            try {
                let response = await axios.get(`https://listen-api.listennotes.com/api/v2/podcasts/${id.id}`, config)
                setPodcast(response.data)
            }
            catch (err) {
                console.log(err)
            }

        }
        getPodcast()
    }, [id]);

    const alignCard = {
        display: "flex",
        flexDirection: 'column',
        maxWidth: "800px",
        justifyContent: "center"
    }



    return (
        <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }} style={alignCard} >
            {podcast && <div className="single-card" style={alignCard}>
                <div className="row no-gutters" >

                    <div className="col-md-6">
                        <img className="card-img-top" src={podcast && podcast.image} alt="Card image cap" style={{ margin: "10px 0 10px 10px", display: "flex", justifyContent: "center" }} />
                    </div>
                    <div className="col-md-6 card-body">
                        <h1>{podcast && podcast.title}</h1>
                        <p> <b>Description: </b>{podcast && podcast.description}</p>
                        <h4> Latest Episodes:</h4>
                        {console.log(podcast)}
                        {podcast && podcast.episodes.map((episode, index) => {
                            return (<div className="episode-card" style={alignCard}>
                                {episode.title}
                                <a href={episode.audio}><u>Listen</u></a>                            </div>)
                        })}
                    </div>
                </div>
            </div>}
        </div>




    )
}
export default Podcast
