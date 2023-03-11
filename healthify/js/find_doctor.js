
const fillDocs = async() =>{

  const data = await getDocs();

  if(data === null){
    return null;
  }

  console.log(data);

  let docsHead = document.getElementById("docs-head");
  
  docsHead.innerHTML = `<h4 class="heading_style"> <span id="total-docs"> `;
  docsHead.innerHTML += data.length>1 ? `${data.length} doctor` : `${data.length} doctors`;
  docsHead.innerHTML += ` available </span> </h4> <p style="color: #787887;font-size: 14;"><i class="far fa-check-circle"></i>  Book appointments with minimum wait-time & verified doctor details</p>`;

  let docs = document.getElementById("docs");

  data.forEach(element => {
    docs.innerHTML += `
        <div class="row ">
        <div class="col">
          <div class="card mb-1 " style="max-width:1040px;">
            <div class="row no-gutters">
              <div class="col-md-3">
                <img src="${element.profilePhoto}" class="card-img" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <div>
                    <a href="${element.url}" style="text-decoration: none ;">
                      <h5 class="card-title"><i class="fas fa-user-md"></i> ${element.fname} ${element.lname} </h5>
                    </a>
                  </div>
                  <div>
                    <span class="card-text">${element.speciality}</span>
                  </div>
                  <div>
                    <p>${element.experienceInTotal} years experience overall</p>
                  </div>
                  <div>
                    <p><i class="fas fa-map-marker-alt"> ${element.street}, ${element.city} </i> </p>
                  </div>
                  <div>
                    <p> ₹ ${element.price} Consultation fee </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div style="padding-top: 105;">
                  <p><i class="far fa-calendar-alt"></i> Available Today</p>
                  <div>
                    <button class="btn btn-primary justify-content-end" type="button">Book Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        `;
  });
}

const getDocs = async() =>{

  try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if(res.ok && res.status === 200){
        const data = await res.json();
        console.log(data);
        return data;
      }
      else{
        return null;
      }

  } catch (error) {
      console.log(error)
  }
}

const loginClicked = (e)=>{
// const x = e.target;
// console.log(x);
// x.classList.toggle("show");
// document.getElementsByClassName("dropdown-menu")[0].classList.toggle("show");
};

try {

console.log("Find doctors");
document.body.onload = fillDocs();

document.getElementsByClassName("user-style")[0].addEventListener("click", loginClicked);

} catch (error) {
console.log(error);
}



// var getDocs = async() =>{
//     console.log("Hello");
//     try {
//       console.log("Hello");
//         const res = await fetch("https://localhost:5001/Search/FindDoctor?Page=0", {method: 'GET'})
        
//         .catch(err=> {
//           console.log(err);
//         });
  
//         if(res.ok){
//           const data = await res.json();
//           console.log(data);
//           return data;
//         }
//         else{
//           return null;
//         }
  
//     } catch (error) {
//         console.log(error)
//     }
//   }
// getDocs();