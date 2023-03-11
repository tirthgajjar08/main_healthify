// stop slider automatically js
$('.carousel').carousel({
    interval: false,
  });

const fillData = async(data)=>{
  if(data === "" || data === null){
    return;
  } 

  document.getElementById("doc-img").setAttribute("src", data.ProfilePhoto);

  const fname = data.fname; const lname = data.lname;
  document.getElementById("doc-name").innerText = `Dr. ${fname} ${lname}`;
  
  const qual = data.education;
  let q = document.getElementById("qual");
  q.innerHTML = "";

  let qualList = eduList = [];
  qual.forEach(element => {
    eduList.push(element);
    let i = element.indexOf('-');
    qualList.push(element.substring(0,i));
  });

  console.log(qualList);

  var text = "";
  
  for (let i = 0; i < qualList.length; i++) {
    i === qualList.length ? text += `<span> ${qualList[i]} </span>` : `<span> ${qualList[i]}, </span>`;
  }

  q.innerHTML += `<span class="specs"> ${text} </span>`;

  const specsList = [];
  let specs = document.getElementById("specs");
  let specialization = data.specialization;
  text = "";

  for (let i = 0; i < specialization.length; i++) {
    specsList.push(specialization[i]);
    text += specialization[i];
    
    i === specialization.length-1 ? (text += " ") : (text += ", ");
  }
  specs.innerHTML = text;
  text = "";

  document.getElementById("expr").innerHTML = `${data.experienceInTotal} years of experience overall`;

  document.getElementById("desc").innerHTML = `${data.description};`

  const street = data.street; const city = data.city;
  const clName = data.clinicName;

  document.getElementById("loc").innerHTML = `${street}, ${city}`;
  document.getElementById("cl-name").innerHTML = `${clName}`;
  document.getElementById("address").innerHTML = `${data.roomNumber}, ${street}, <br> ${city}, <br> ${data.state} - ${data.pincode}`;
  document.getElementById("fee").innerHTML = `₹ ${data.price}`;
  document.getElementById("a1").innerHTML = `A. Dr. ${fname} ${lname} practices at ${clName} - ${street}`;
  document.getElementById("a2").innerHTML = `A. You can take Dr. ${fname}'s appointment online through Healthify for in-clinic visit with the doctor.`;
  
  const services = data.services;
  let serviceList = []; var i; text = "";

  for (i = 0; i < services.length; i++) {
    const e = services[i];
    serviceList.push(e);
    text += e;

    i === services.length-1 ? (text += " ") : (text += ", ");
  }

  document.getElementById("a3").innerHTML = `A.  Patients frequently visit Dr. ${fname} ${lname} for ${text}`;

  let certList = [];
  const certificate = data.training;
  
  for (let i = 0; i < certificate.length; i++) {
    const e = certificate[i];
    certList.push(e);

    i === certificate.length-1 ? text += ` ${e}` : text += `${e}, `;
  }

  let a4 = document.getElementById("a4");
  a4.innerHTML = `A. Dr. ${fname} ${lname} has following qualifications: ${text}`;
  text = "";


  const spList = document.getElementById("specs-list");
  spList.innerHTML = "";
  specsList.forEach(element => {
    spList.innerHTML += `<li>${element}</li>`;
  });

  const aw = document.getElementById("awards");
  aw.innerHTML = "";

  (data.awards).forEach(element => {
    aw.innerHTML += `<li>${element}</li>`;
  });

  const edu = document.getElementById("edu");
  edu.innerHTML = "";

  (eduList).forEach(element => {
    edu.innerHTML += `<li>${element}</li>`;
  });

  const expLi = document.getElementById("exp-li");
  expLi.innerHTML = "";

  (data.experience).forEach(element => {
    expLi.innerHTML += `<li>${element}</li>`;
  });

  document.getElementById("reg").innerHTML = `<li>${data.registration}</li>`;

  const training = document.getElementById("training");
  training.innerHTML = "";

  certList.forEach(element => {
    training.innerHTML += `<li>${element}</li>`;
  });

  console.log(document.querySelector('h5[data-qa-id]'));
};

const getOnlineSlots = async()=>{
  // const url = "";
  // const res = await fetch(url)
  // .catch(err=> {
  //   console.log(err);
  // });

  // if(res.ok && res.status === 200){
  //   const data = await res.json();
  //   if(data){
  //     console.log(data);
  //     fillOnlineSlots(data);
  //   }
  // }

  // fillOnlineSlots(null);
};

const getOfflineSlots = async()=>{
  // const url = "";
  // const res = await fetch(url)
  // .catch(err=> {
  //   console.log(err);
  // });

  // if(res.ok && res.status === 200){
  //   const data = await res.json();
  //   if(data){
  //     console.log(data);
  //     fillOnlineSlots(data);
  //   }
  // }

  // fillOfflineSlots(null);
};

const fillOnlineSlots = async(data)=>{
  if(data === null){
    document.getElementsByClassName("card-sticky1")[0].remove();
    return;
  }
};

const fillOfflineSlots = async(data)=>{
  if(data === null){
    document.getElementsByClassName("card-sticky2")[0].remove();
    return;
  }
};

const load = async()=>{
  let curUrl = this.location.href;
  // let curUrl = "https://localhost/Doctors?name=Yasin Pathan";
  console.log(curUrl);

  curUrl = decodeURIComponent(curUrl.trim());

  const l = curUrl.lastIndexOf('?');
  const url = curUrl.substring(0,l);
  const query = curUrl.substring(l, curUrl.length);

  console.log(url);
  console.log(query);

  const arr = query.split('&');

  // var body = [];
  // arr.forEach(element => {
  //   body.push(element.split('='));
  // });

  // console.log(body);
  // let data ={}
  // body.forEach(element => {
  //   data[element[0]] = element[1];
  // });

  // console.log(data);
  
  // fetch(curUrl)
  // .then(res=> {
  //   if(res.ok && res.status === 200){
  //     return res.json();
  //   }
  // })
  // .then(data=>{
  //   if(data){
  //     console.log((data));
  //     fillData(data);
  //   }
  // })
  // .catch(err=>{
  //   console.log(err);
  // });

  const data = {
    "profilePhoto": "",
    "fname": "Yasin",
    "lname": "Pathan",
    "speciality": "Dentist",
    "clinicNumber": "9876543210",
    "roomNumber": "23A",
    "street": "Jivraj Park",
    "clinicName": "Dr. Yasin Pathan Multi Speciality & Cosmetic Dental Hospital",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "pincode": 380052,
    "experienceInTotal": 17,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente exercitationem, quos ducimus dolorem nemo facere, facilis magni et illum, ipsum blanditiis officiis vel.",
    "membership": [
        "Indian Dental Association",
        "American Dental Association",
        "Indian Society of Oral Implantologists (ISOI)",
        "Indian Society of Oral Implantologist",
        "Indian Association of Oral and Maxillofacial Pathologist"
    ],
    "education": [
        "BDS - Saurashtra University, Gujarat, 2000",
        "Fellowship in Oral implantlogy - Harvard University, 2007",
        "Certificate in Cosmetic Dentistry - UNITED KINGDOM, 2005"
    ],
    "specialization": [
        "Dentist",
        "Cosmetic/Aesthetic Dentist",
        "Implantologist",
        "Oral Pathologist"
    ],
    "awards": [
        "University 3 rank - 1998"
    ],
    "services": [
        "Artificial Teeth",
        "Crowns and Bridges Fixing",
        "Dental Implant Fixing",
        "Conservative Dentistry",
        "Complete/Partial Dentures Fixing",
        "Gum Disease Treatment/ Surgery",
        "Invisible/Clear Braces",
        "Laser Gum Surgery",
        "Tooth Extraction",
        "Laminates",
        "Wisdom Tooth Extraction",
        "Smile Design",
        "Dental Fillings",
        "Presurgical Orthodontics",
        "Oral Lesions Screening"
    ],
    "experience": [
        "2000 - 2001 Lecturer at K M Shah Dental College",
        "2001 - 2002 Dental Surgeon at R C Gandhi Hospital",
        "2003 - 2015 Chief Dental Consultant at Dr",
        "Zala Dental Hospital"
    ],
    "registration": "A2006 Gujarat State Dental Council, 2000",
    "training": [
        "Diploma in Hospital Management - NILEM (CHENNAI), 2002",
        "Professional Implantology Training Course (PITC) - University of California Los Angeles, 2013",
        "Certified in Pedodontics - King's College London, 2006"
    ],
    "price": 1
};
  fillData(data);
  getOnlineSlots();


};
  
try {
  
  document.onload = load();

} catch (error) {
  console.log(error);
}