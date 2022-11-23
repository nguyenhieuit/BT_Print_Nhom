const form = document.getElementById("form-cv");

function showError(input, message) {
  //gets the parent div
  const formControl = input.parentElement;
  //applies error class and reapplies form-control class
  console.log(formControl);
  formControl.classList.add('form-control error');
  //finds the small tag within this div
  const small = formControl.querySelector('small');
  //inserts the message parameter into the small tag
  small.innerText = message;
}


//Show success outline
function showSuccess(input) {
  //gets the parent div
  const formControl = input.parentElement;
  //applies success class and reapplies form-control class
  formControl.className = 'form-control success';
}

function handleSubmit(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const detail = document.getElementById("detail").value;
  const company = document.getElementById("company").value;
  const position = document.getElementById("company").value;
  const descriptExperience =
    document.getElementById("descriptExperience").value;
  const university = document.getElementById("university").value;
  const dateStart = document.getElementById("dateStart").value;
  const dateEnd = document.getElementById("dateEnd").value;
  const specialization = document.getElementById("specialization").value;
  const graduationClassified = document.getElementById(
    "graduationClassified"
  ).value;
  const dateCertificate = document.getElementById("dateCertificate").value;
  const certificateName = document.getElementById("certificateName").value;
  const skill = document.getElementById("skill").value;
  
  let flag = true;
  

  if (fullName === '') {
    flag = false;
    showError(, 'Not a real email bub');

  }
  if (phoneNumber === '') {
    flag = false;
    errorMess.innerHTML = "Vui lòng nhập số điện thoại";
  }
  if (email === '') {
    flag = false;
    
  }
  if (address === '') {
    flag = false;
    
  }
  if (company === '') {
    flag = false;
    
  }
  if (position === '') {
    flag = false;
    
  }
  
  if (university === '') {
    flag = false;
    
  }
  if (dateStart === '') {
    flag = false;
    
  }
  if (dateEnd === '') {
    flag = false;
    
  }else{
    if (dateEnd > dateStart) {
      
    }
  }

  if (specialization === '') {
    flag = false;
    
  }
  if (graduationClassified === '') {
    flag = false;
    
  }
  if (dateCertificate === '') {
    flag = false;
    
  }
  if (certificateName === '') {
    flag = false;
    
  }
  


  const formObject = {
    fullName,
    phoneNumber,
    email,
    address,
    detail,
    skill,
    experience: {
      company,
      position,
      descriptExperience,
    },
    study: {
      university,
      dateStart,
      dateEnd,
      specialization,
      graduationClassified,
    },
    certificate: {
      dateCertificate,
      certificateName,
    },
  };

  if (flag) {
    localStorage.setItem("profileObject", JSON.stringify(formObject));
  }

}

form && form.addEventListener("submit", handleSubmit);

const print = document.querySelector(".button-print");

if (window.location.href.indexOf('profile.html') > -1) {
  print.onclick = () => {
    window.print();
  };
}
console.log(window.location.href.indexOf('index.html') > -1);
const convertJsonDataObject = JSON.parse(localStorage.getItem("profileObject"));

window.onload = function () {
  if (typeof Storage !== "undefined" && window.location.href.indexOf('profile.html') > -1) {
    console.log('sadasda');
    document.getElementById("full-name-profile").innerHTML = convertJsonDataObject.fullName;
    document.getElementById("address-profile").innerHTML =
      convertJsonDataObject.address;
    document.getElementById("phone-profile").innerHTML =
      convertJsonDataObject.phoneNumber;
    document.getElementById("email-profile").innerHTML =
      convertJsonDataObject.email;
    document.getElementById("detai-profile").innerHTML =
      convertJsonDataObject.detail;
    document.getElementById("description-profile").innerHTML =
      convertJsonDataObject.detail;
    document.getElementById("company-profile").innerHTML =
      convertJsonDataObject.experience.company;
    document.getElementById("position-profile").innerHTML =
      convertJsonDataObject.experience.position;
    document.getElementById("descript-experience-profile").innerHTML =
      convertJsonDataObject.experience.descriptExperience;
    document.getElementById("education-date-profile").innerHTML =
      convertJsonDataObject.certificate.dateCertificate;

    document.getElementById(
      "study-date-profile"
    ).innerHTML = `${convertJsonDataObject.study.dateStart} - ${convertJsonDataObject.study.dateEnd}`;
    document.getElementById("graduation-classified").innerHTML =
      convertJsonDataObject.certificate.certificateName;
    document.getElementById("skill-profile").innerHTML =
      convertJsonDataObject.skill;

    document.getElementById("university-classified").innerHTML =
      convertJsonDataObject.study.university;
    document.getElementById("specialization-classified").innerHTML =
      convertJsonDataObject.study.specialization;
    document.getElementById("graduation-classified-classified").innerHTML =
      convertJsonDataObject.study.graduationClassified;
  }
};
