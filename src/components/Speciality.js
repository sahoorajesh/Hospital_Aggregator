import React from 'react';

const speciality = () => {
    return(
        <div className="mt3">
            <label className="db fw6 lh-copy f4">Hospital-Speciality:</label>
            <select className="pa2 input-reset ba bg-transparent w-75" type="text" name="hospspec"  value={this.state.hospspec} onChange={this.handleChange} required>
                <option value="skin">skin</option>
                <option value="nose">nose</option>
                <option value="ear">ear</option>
                <option value="eye">eye</option>
                
            </select>	
        </div>
    );

}