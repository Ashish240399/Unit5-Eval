import { useState } from "react";

export const AddStudent = () => {
    var data;
    const [forms,SetForms]=useState({});
    const formChange=(e)=>{
        SetForms({
            ...forms,
            [e.target.className]:e.target.value
        })
    }
    const AddData=(e)=>{
        e.preventDefault();
        console.log(forms);
        // if(forms.first_name==null){
        //     document.querySelector(".error").textContent="Missing first name"
        // }
        // if(forms.last_name==null){
        //     document.querySelector(".error").textContent="Missing last name"
        // }
        // if(forms.age>=101 || forms.age<1 || forms.age==null){
        //     document.querySelector(".error").textContent="Missing age or inappropriate age"
        // }
        // if(forms.gender==null){
        //     document.querySelector(".error").textContent="Missing gender"
        // }
        // if(forms.email==null){
        //     document.querySelector(".error").textContent="Missing email"
        // }
        // if(forms. tenth_score==null){
        //     document.querySelector(".error").textContent="Missing tenth score"
        // }
        // if(forms.twelth_score==null){
        //     document.querySelector(".error").textContent="Missing twelth score"
        // }
        
        fetch("http://localhost:8080/students",{
                method:"POST",
                headers:{
                    "content-type":"application-/json"
                },
                body:JSON.stringify("forms")
            })
    }
  return (
    <form onSubmit={AddData} className="addstudent">
      <div>
        Firstname:{" "}
        <input
          onChange={formChange}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
        onChange={formChange}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
        onChange={formChange}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
          onChange={formChange}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
          onChange={formChange}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
        onChange={formChange}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
        onChange={formChange}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
        onChange={formChange}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select onChange={formChange}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
          <div className="error"></div>
        
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};