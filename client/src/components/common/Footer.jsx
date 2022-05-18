import React, { useState, useEffect } from 'react';

//footer containing darkmode/ light (blue) mode buttons
function Footer() {
    //state
    const [save, setSave] = useState(false);
    const [stylePath1, setStylePath1] = useState('/style1.css');
    const [stylePath2, setStylePath2] = useState('/style2.css');
    const [darkMode, setDarkMode] = useState(false);

    
    useEffect(() => {
        let darkModeValue = localStorage.getItem("darkMode")
        if (darkModeValue === "true") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }

    }, [])

    const handleClear = (e) => {
        localStorage.clear()
        setSave(false);
        setDarkMode(false);
    }

    const handleWhite = async (e) => {
        setDarkMode(false);
        localStorage.setItem("darkMode", "false")
    }
    const handleBlack = async (e) => {
        setDarkMode(true);
        localStorage.setItem("darkMode", "true")
    }
    return (
        <footer>
            <div className="footer-content">
            <link rel="stylesheet" type="text/css" href={!darkMode ? stylePath1 : stylePath2} />
           
            <div className="row mode-buttons">
          
                <button onClick={handleWhite} className="btn mode-btn btn-dark m-1">Dark Mode</button>
              
                <button onClick={handleBlack} className="btn mode-btn btn-light m-1">Blue Mode</button>
               
            </div>
    
            <div className="row copyright text-center">
           PodSearch &copy; 2022
           </div>
           </div>
        </footer>
    );
}

export default Footer;