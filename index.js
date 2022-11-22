const form = document.getElementById("form-cv");

function handleSubmit(e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  console.log("fullName", fullName);
  console.log("adasdasd");
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
  const formObject = [
    {
      //   avatar: urlImg,
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
    },
  ];

  localStorage.setItem("profileObject", JSON.stringify(formObject));
}

form.addEventListener("submit", handleSubmit);
