function template(
    {
        name,
        address,
        code,
        phone,
        email,
        role,
        intro,
        skills,
        careers,
        educations,
        courses,
        interests
    }) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum Vitae</title>
</head>

<body
    style="font-family: 'Poppins', sans-serif; background-color: #f4f4f4; display: flex; justify-content: center; align-items: center; min-height: 100vh;">

    <div 
        style="margin: 0 auto; text-align: center; max-width: 500px; width: 100%; padding: 3rem; border: 1px solid #e1e1e1; border-radius: 20px; background-color: white; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); margin-bottom: 10px;">
        <h4 class="name-heading" style="text-align: center;  font-weight: 600; color: #333333;">${name}
        </h4>
        <h4 class="role-heading"
            style="text-align: center; font-size: 18px; font-weight: 400; margin-bottom: 2rem; color: #333333; letter-spacing: 5px;">
            ${role}</h4>
        <div class="institute-details">
            <h5>${code}${phone} | ${email}</h5>
            <h5>${address}</h5>
        </div>

        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <p>${intro}</p>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h4 class="section-heading"
            style="text-align: center;  font-weight: 600; margin-bottom: 2rem; color: #333333;">Key
            Skills</h4>
        <div class="institute-details">
            ${skills.map((value) => (
        ` <h6 style="font-weight: 400;">${value.skill}</h6> `
    )).join('')}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h4 class="section-heading"
            style="text-align: center; font-weight: 600; margin-bottom: 2rem; color: #333333;">
            Employment History</h4>
        <div>
            ${careers.map((value) => (
        ` <div class="job-item">
                <div class="institute-details">
                    <h5 style="font-weight: 400;" >${value.job} <span> | </span> ${value.timeperiod}</h5>
                    <h5 style="font-weight: 400;" >Company: ${value.company}</h5>
                    <h5 style="font-weight: 400;" >Address: ${value.address}</h5>
                    <h5 style="font-weight: 400;" >Phone: ${value.phone}</h5>
                    <hr style="width: 30%;" />
                </div>
            </div> `
    )).join('')}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h4 class="section-heading"
            style="text-align: center;  font-weight: 600; margin-bottom: 2rem; color: #333333;">
            Qualifications</h4>
        <div class="institute-details">
            ${educations.map((value) => (
        ` <h5 style="font-weight: 400;">${value.qualification} <span> | </span> ${value.timeperiod}</h5> <hr style="width: 30%;" /> `
    )).join('')}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h4 class="section-heading"
            style="text-align: center;  font-weight: 600; margin-bottom: 2rem; color: #333333;">Training
            Courses</h4>
        <div class="institute-details">
            ${courses.map((value) => (
        ` <h5 style="font-weight: 400;">${value.course} <span> | </span> ${value.timeperiod}</h5> <hr style="width: 30%;" /> `
    )).join('')}
        </div>
        <hr class="separator" style="margin-top: 2rem; border-top: 2px solid #e1e1e1;">
        <h4 class="section-heading"
            style="text-align: center;  font-weight: 600; margin-bottom: 2rem; color: #333333;">
            Interests</h4>
        <div class="institute-details">
            ${interests.map((value) => (
        ` <h5 style="font-weight: 300;">${value.interest}</h5> `
    )).join('')}
        </div>
    </div>

</body>

</html>`
        ;
};

module.exports = {template}
