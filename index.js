const form = document.getElementById("form-cv");
const fullName = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const address = document.getElementById("address");
const detail = document.getElementById("detail");
const company = document.getElementById("company");
const position = document.getElementById("position");
const descriptExperience = document.getElementById("descriptExperience");
const university = document.getElementById("university");
const dateStart = document.getElementById("dateStart");
const dateEnd = document.getElementById("dateEnd");
const specialization = document.getElementById("specialization");
const graduationClassified = document.getElementById("graduationClassified");
const dateCertificate = document.getElementById("dateCertificate");
const certificateName = document.getElementById("certificateName");
const skill = document.getElementById("skill");
function handleSubmit(e) {
  e.preventDefault();
  const formObject = {
    fullName: fullName.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    address: address.value,
    detail: detail.value,
    skill: skill.value,
    experience: {
      company: company.value,
      position: position.value,
      descriptExperience: descriptExperience.value,
    },
    study: {
      university: university.value,
      dateStart: dateStart.value,
      dateEnd: dateEnd.value,
      specialization: specialization.value,
      graduationClassified: graduationClassified.value,
    },
    certificate: {
      dateCertificate: dateCertificate.value,
      certificateName: certificateName.value,
    },
  };
  localStorage.setItem("profileObject", JSON.stringify(formObject));

  window.location.href = "profile.html"
}

form && form.addEventListener("submit", handleSubmit);

const print = document.querySelector(".button-print");

if (window.location.href.indexOf("profile.html") > -1) {
  print.onclick = () => {
    window.print();
  };
}
console.log(window.location.href.indexOf("index.html") > -1);
const convertJsonDataObject = JSON.parse(localStorage.getItem("profileObject"));

window.onload = function () {
  if (
    typeof Storage !== "undefined" &&
    window.location.href.indexOf("profile.html") > -1
  ) {
    console.log("sadasda");
    document.getElementById("full-name-profile").innerHTML =
      convertJsonDataObject.fullName;
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

  if (window.location.href.indexOf("index.html") > -1) {
    fullName.value = convertJsonDataObject.fullName;
    phoneNumber.value = convertJsonDataObject.phoneNumber;
    email.value = convertJsonDataObject.email;
    address.value = convertJsonDataObject.address;
    detail.value = convertJsonDataObject.detail;
    skill.value = convertJsonDataObject.skill;
    company.value = convertJsonDataObject.experience.company;
    position.value = convertJsonDataObject.experience.position;
    descriptExperience.value =
      convertJsonDataObject.experience.descriptExperience;

    university.value = convertJsonDataObject.study.university;
    dateStart.value = convertJsonDataObject.study.dateStart;
    dateEnd.value = convertJsonDataObject.study.dateEnd;
    specialization.value = convertJsonDataObject.study.specialization;
    graduationClassified.value =
      convertJsonDataObject.study.graduationClassified;
    dateCertificate.value = convertJsonDataObject.certificate.dateCertificate;
    certificateName.value = convertJsonDataObject.certificate.certificateName;
  }
};
