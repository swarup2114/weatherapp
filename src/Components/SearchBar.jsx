
import React, { useState } from 'react';


const FormComponent = () => {
    const [location, setLocation] = useState('');
    // const [data, setData] = useState([]);
  

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(location);
    alert(`you enterd the city ${location}`  )
    };

    return (
        <div>
            <center>
                <h4>Find Weather</h4>
                <form onSubmit={submitHandler}>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
                    <input type="submit" className="btn btn-primary mt-3" value="Search" />
                </form>
              
            </center>
        </div>
    );
};

export default FormComponent;
