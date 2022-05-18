import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    //state
    const [name, setName] = useState(null);
    const [save, setSave] = useState(false);

    useEffect(() => {
        let save = localStorage.getItem("save")
        if (save === "true") {
            setSave(true);
        } else {
            setSave(false);
        }  
        let savedName = localStorage.getItem("name")
        setName(savedName);
    }, [])


    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleClick = async (e) => {
        localStorage.setItem("name", name)
        localStorage.setItem("save", true)
        setSave(true);
    }
    const handleClear = (e) => {
        localStorage.clear()
        setSave(false);
    }

    return (
        <nav className="navbar" >            
            <Link to="/">Home</Link> 
            <div role="test"></div> 
            {!save &&
                <div className="nav-right">                  
                        <input type="text" className="form-control" placeholder="Name Please" onChange={handleChange} />             
                        <button onClick={handleClick} className="btn btn-dark save-button">Save</button>
                  
                </div>
            }

            {save && <div>Hi {name    }
                <button onClick={handleClear} className="btn btn-dark m-3">x</button></div>}
                </nav>

    );
    
}

export default Navbar;
