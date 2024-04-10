import React from "react";

const Inputbox = () => {
  return (
    <div className="container input-box">

    <div className="row g-3 align-items-center">
     
      <div className="col-auto">
        <input
          type="text"    
          className="form-control"
          placeholder="Task Name"
        
        />
      </div>
        
      <div className="col-auto">
        <input
          type="text"    
          className="form-control" placeholder=" Description"
        
        />
      </div>
        
      <div className="col-auto">
      <select
        className="form-control "
        aria-label="Large select example" placeholder="status"> 
        <option selected>All</option>
        <option value="1">Complete</option>
        <option value="2">Not Complete</option>
   
      </select>
      </div>
      <div className="col-auto">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      

      
    </div>
    </div>
  );
};

export default Inputbox;
