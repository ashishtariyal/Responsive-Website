import { useState } from "react";
import axios from "axios"

function Contact() {
  const[ data,setdata] = useState({
    fullname : "",
    phone : "",
    email : ""
  })
   
  function inputevent(e){
    console.log(data)
    setdata ({
      ...data ,
      [e.target.name] : e.target.value
    })
    console.log(e.target.value)                          
    console.log(data)
  }

 async function onclick(e){
    try{
      e.preventDefault();
    const aa = await axios.post("http://localhost:2033/Tariyal",data)
      console.log(aa.data)

    
    }
    catch(error){
      console.log(error)
    }
  }

    return (
      <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" 
                      name="fullname"  onChange={(e)=>inputevent(e)} placeholder="Enter Your Name"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                      <input type="number" className="form-control" id="exampleFormControlInput1" 
                      name="phone"  onChange={(e)=>inputevent(e)} placeholder="Number"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="text" className="form-control" id="exampleFormControlInput1" 
                      name="email"  onChange={(e)=>inputevent(e)} placeholder="name@example.com"/>
                    </div>

                    <div className="col-12 mx-auto">
                    <button  onClick={onclick} className="btn btn-outline-secondary">Submit</button>
                    </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Contact;

//   import { useState } from "react";
// import axios from "axios"

// function Contact() {
//     const [data, setdata] = useState({
//         fullname: "",
//         phone: "",
//         email: ""
//     })

//     function inputevent(e) {
//         console.log(data)
//         setdata({
//             ...data,
//             [e.target.name]: e.target.value,
//         })
//         console.log(e.target.value)
//         console.log(data)
//     }


//     async function onclick(e) {
//         alert("Succesfully Submitted")
//         try {
//             e.preventDefault();
//             const getApi = await axios.post("http://localhost:2033/Tariyal", data)
//             console.log("ApiData", getApi)
//         }
//         catch (error) {
//             console.log(error, "error ")
//         }
//     }

    

//     return (
//         <>
//             <div className="my-5">
//                 <h1 className="text-center">Contact us</h1>
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">
//                         <form>
//                             <div className="mb-3">
//                                 <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
//                                 <input type="text" className="form-control" id="exampleFormControlInput1"
//                                     name="fullname" onChange={(e) => inputevent(e)} placeholder="Enter Your Name" />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
//                                 <input type="number" className="form-control" id="exampleFormControlInput1"
//                                     name="phone" onChange={(e) => inputevent(e)} placeholder="Number" />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                                 <input type="text" className="form-control" id="exampleFormControlInput1"
//                                     name="email" onChange={(e) => inputevent(e)} placeholder="name@example.com" />
//                             </div>

//                             <div className="col-12 mx-auto">
//                                 <button onClick={onclick} className="btn btn-outline-secondary">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Contact;
  