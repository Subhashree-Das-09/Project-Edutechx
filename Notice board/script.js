var sidetexts = document.querySelectorAll(".labels > div");


for (let i = 0; i < 4; i++) {
  sidetexts[i].addEventListener("click", () => {
    for (let q = 0; q < 4; q++) {
      sidetexts[q].classList.remove("active");
    }
    sidetexts[i].classList.add("active");

  });
}


for (let i = 0; i < 4; i++) {
sidetexts[i].addEventListener("click", () => {
//change text
const activelabel = document.querySelector(".active>p");
const important = document.querySelectorAll("p.imp");
const latest = document.querySelectorAll("p.lat");
const year = document.querySelectorAll("p.year");

if(activelabel.textContent == "Parents"){
      important[0].textContent = "University Implements Enhanced Safety Measures, Prioritizing Student Well-being on Campus";
      important[1].textContent = "New Financial Aid Program Announced, Offering Increased Support for Students and Families";
      important[2].textContent = "Parental Involvement Program Launched, Fostering Stronger Connections Between Families and the University Community";
     
      latest[0].textContent = "University Introduces Parent Orientation Program, Providing Resources and Guidance for Families Transitioning to College Life";
      latest[1].textContent = "Cutting-Edge Technology Initiative Enhances Communication Between Parents and Faculty, Promoting Student Success";
      latest[2].textContent = "Innovative Parental Support Network Established, Offering Guidance and Assistance Throughout the Academic Journey";

      year[0].textContent = "Parental Advisory Board Formed to Provide Feedback and Insights on University Policies and Programs";
      year[1].textContent = "Family Weekend Events Planned, Offering Opportunities for Parents to Engage with Their Students and Experience Campus Life";
      year[2].textContent = "Parent Education Series Launched, Addressing Topics Such as Financial Planning, Academic Support, and Student Wellness";
} 


if(activelabel.textContent === "Faculties"){
  important[0].textContent = "New Faculty Development Program Launched to Enhance Teaching Methods and Classroom Engagement";
  important[1].textContent = "Faculty Research Grants Available to Support Innovative Projects and Scholarly Endeavors";
  important[2].textContent = "Faculty Appreciation Week Celebrates the Dedication and Hard Work of Our Educators";
 
  latest[0].textContent = "Upcoming Faculty Symposium to Showcase Research and Collaborative Opportunities Across Departments";
  latest[1].textContent = "Faculty Mentoring Program Introduced to Support Professional Growth and Career Advancement";
  latest[2].textContent = "Faculty Wellness Initiatives Implemented to Promote Work-Life Balance and Mental Health Support";

  year[0].textContent = "Invitation to Participate in Faculty-Led Workshops on Diversity, Equity, and Inclusion in the Classroom";
  year[1].textContent = "Reminder: Deadline Approaching for Faculty Nominations for Prestigious Awards and Recognitions";
  year[2].textContent = "Call for Proposals: Faculty-Student Collaboration Grants to Foster Interdisciplinary Projects and Experiential Learning Opportunities";
} 


if(activelabel.textContent === "General"){
  important[0].textContent = "Campus-wide Sustainability Campaign: Join Us in Reducing Waste and Promoting Environmental Responsibility";
  important[1].textContent = "Upcoming Town Hall Meeting: Your Chance to Voice Concerns and Engage in Open Dialogue";
  important[2].textContent = "Health and Wellness Fair: Explore Resources and Activities to Support Your Physical and Mental Well-being";
 
  latest[0].textContent = "Important Reminder: Deadline for Spring Semester Course Registration Approaching";
  latest[1].textContent = "Community Volunteer Day: Sign Up to Make a Positive Impact in the Local Area";
  latest[2].textContent = "Emergency Preparedness Workshop: Learn Vital Skills to Ensure Safety in Any Situation";

  year[0].textContent = "Celebrating Diversity: Cultural Festival Featuring Food, Music, and Performances from Around the World";
  year[1].textContent = "Library Renovation Update: Preview the Exciting Changes Coming Soon to Your Learning Spaces";
  year[2].textContent = "Campus-wide Survey: Share Your Feedback to Help Improve University Services and Programs";
} 


if(activelabel.textContent === "Students"){
  important[0].textContent = "Campus-wide Survey: Share Your Feedback to Help Improve University Services and Programs";
  important[1].textContent = "Campus Innovation: Students Develop Sustainable Solution to Reduce Food Waste in College Cafeterias";
  important[2].textContent = "Groundbreaking Study at ABC University Uncovers New Insights into Climate Change Impact on Local Ecosystems";
 
  latest[0].textContent = "University Launches Initiative to Promote Mental Health Awareness Among Student";
  latest[1].textContent = "Cutting-Edge Technology Initiative Enhances Communication Between Parents and Faculty, Promoting Student Success";
  latest[2].textContent = "Student Council Introduces New Campus Sustainability Program";

  year[0].textContent = "Record Number of Scholarships Awarded to Students, Easing Financial Burdens and Opening Doors to Success";
  year[1].textContent = "Students Win National Competition, Showcasing Talent and innovation on a Global Stage";
  year[2].textContent = "University Adopts Flexible Learning Model, Empowering Students to Customize Their Education";
} 
}); }

