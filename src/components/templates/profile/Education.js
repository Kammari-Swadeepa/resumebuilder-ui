import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { PostApi } from '../../../services/commonServices';
import AddEdu from './AddEdu';
function Education() {
    const [tables, setTables] = useState([]);
  
    
  const addEducation= () => {
    // Generate unique table id
    const newTableId = tables.length + 1;
    // Generate initial table data or fetch from an API
    const newTableData = {
      id: newTableId,
      // Add your table data properties here
    };
    // Update state with the new table
    setTables([...tables, newTableData]);
  };


    function NewEducation() {
        return (

            <>
                {/* <div class="all-edus">
                    <div class="new-edu">
                        <label>Degree:</label>
                        <input type="text" name="education" value={education} onChange={handleChange} class="form-control" placeholder="Ex: Bachelor's" />

                        <label>Field of study:</label>
                        <input type="text" name="course" value={course} onChange={handleChange} class="form-control" placeholder="Ex: Computer Science" />

                        <label>College:</label>
                        <input type="text" name="college" value={college} onChange={handleChange} class="form-control" placeholder="Ex: al-albayt university" />

                        <label>Percentage/CGPA:</label>
                        <input type="text" name="marks" value={marks} onChange={handleChange} class="form-control" placeholder="Ex: 7.5" />

                        <div class="form-row">
                            <div class="col">
                                <label>From year:</label>
                                <input type="month" name="edu[]" class="form-control" />
                            </div>
                            <div class="col">
                                <label>To year (optional=present):</label>
                                <input type="month" name="edu[]" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div> */}

            </>

        )
    }
    return (
        <>
    <div>
   
      
      {tables.map(table => (
        <AddEdu key={table.id} data={table} />
      ))}
    </div>
    <div class="add-blk btn btn-info" id="add-edu" onClick={addEducation}>
                    <i class="fa fa-plus"></i>
                    <span>Add another education</span>
                </div>
          
        </>
    )
}

export default Education