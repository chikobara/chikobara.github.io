#import "@preview/basic-resume:0.2.9": *

// Put your personal information here, replacing mine
#let name = "Albaraa I. Alsmail"
#let location = "Deir Azzur, SY"
#let email = "albaraa.as.2002@gmail.com"
#let github = "github.com/Chikobara"
#let githubio = "chikobara.github.io"
#let linkedin = "linkedin.com/in/albaraa-alsmail"
#let phone = "+963 (988)-527682"

#show: resume.with(
  author: name,
  // All the lines below are optional.
  location: location,
  email: email,
  github: github,
  personal-site: githubio,
  linkedin: linkedin,
  phone: phone,
)

== Professional Summary
Highly motivated Artificial Intelligence Engineer (Graduation: Sept 2025) with a strong foundation in deep learning, data manipulation, and full-stack system deployment. Proficient in Python (TensorFlow, Keras) and modern JavaScript (React, Next.js). Eager to leverage a research-driven background and end-to-end project ownership to solve complex, real-world problems.

== Technical Skills
- *Programming Languages*: JavaScript, Python, C/C++, HTML/CSS, Java, Bash, R, Flutter, Dart
- *Technologies*: Pandas, NumPy, scikit-learn, TensorFlow, Keras, XGBoost, Git, UNIX/Linux, Jupyter, Data Visualization (Matplotlib, Seaborn), GPU Computing (CUDA), Docker, Google Cloud Platform
- *Open-Source Contributor & Linux Customization*
- Developed a GNOME extension to enhance user experience and system customization.
- Customized Hyprland and GNOME window managers, optimizing workflows and aesthetics.
- Actively contribute to open-source projects on GitHub, engaging in commits, issues, pull requests, and discussions.

== Education
#edu(
  degree: "Bachelor's of ITE, Artificial Intelligence",
  institution: "Al-Sham Private University",
  location: "Damascus, SY",
  dates: dates-helper(start-date: "Sep 2021", end-date: "Sep 2025"),
  gpa: "2.77/4.0",
)
- Dean's List: Dr. George Karraz, Dr. Iyad Alkhayat, Dr. Afaf Alshalabi
- Cumulative GPA: 2.77/4.0 | Completed in 4 years accelerated 5-year curriculum.
- *Relevant Coursework*: Data Structures, Program Development, Microprocessors, Abstract Algebra, Linear Algebra, Discrete Mathematics, Multivariable & Single Variable Calculus, Principles and Practice of Comp Sci, Information Retrieval Systems, Expert Systems, Machine Learning, Neural Networks, Deep Learning.
- Completed the degree in an accelerated timeframe by focusing on rigorous coursework and practical projects.


/*
== Work Experience


#work(
  title: "Title",
  location: "Damascus, SY",
  company: "Company",
  dates: dates-helper(start-date: "Jun 2022", end-date: "Aug 2022"),
)
-
-
*/

== Projects
#project(
  name: "AI-Driven Exoplanet Biosignature Classification (Lumos Project)",
  role: "AI Developer & Researcher (Graduation Project)",
  dates: dates-helper(start-date: "Oct 2024", end-date: "Sep 2025"),
  url: "chikobara.github.io/Lumos",
)
- Developed a full-stack AI pipeline to classify exoplanet biosignatures from low-SNR synthetic spectra.
- External Validation: Successfully exhibited the project at Tech Expoland 2025, validating its technical quality and practical application.
- Media Recognition: Project results and methodology were published in a detailed article by the Syrian Arab News Agency (SANA). Link to the article: https://sana.sy/locals/2316044/

#project(
  name: "Memoir (open-memoir.vercel.app), ",
  // Role is optional
  role: "Full-Stack/AI DEV, Semester Project",
  // Dates is optional
  dates: dates-helper(start-date: "Jul 2024", end-date: "Sep 2024"),
  // URL is also optional
  url: "open-memoir.vercel.app",
)
- Developed an open-source, real-time cross-platform note-taking app using Next.js, ElectronJS, React, and TypeScript.
- Implemented a chatbot feature using the Gemini API to enhance user interactions.
- Designed and optimized a scalable NoSQL backend (Convex) to ensure high performance and reliability for real-time collaboration.
- Managed PR reviews, resolved bugs, and drove continuous open-source collaboration based on user feedback.

== Professional Development & Extracurricular

#project(
  name: "Python For Everybody Specialization - Coursera",
  dates: "Jul 2021",
  url: "coursera.org/verify/N8K8SZACWR24",
)

#project(
  name: "Python Data Structures - Coursera",
  dates: "Oct 2021",
  url: "coursera.org/verify/VRJ4Q8TCX2TB",
)


#project(
  name: "Using Python to Access Web Data - Coursera",
  dates: "Dec 2021",
  url: "coursera.org/verify/8CEUJRLBK4M2",
)


#project(
  name: "What is Data Science? - Coursera",
  dates: "Sep 2023",
  url: "coursera.org/verify/XFXJFKWMDYXH",
)

#project(
  name: "Machine Learning with Python",
  dates: "Jan 2025",
  url: "coursera.org/verify/O8V2EE8WCBV5"
)

#extracurriculars(
  activity: "IBM AI Engineering Professional Certificate",
  dates: dates-helper(start-date: "Sep 2024", end-date: "Present"),
)

// #extracurriculars(
//   activity: "Science Olympiad Volunteering",
//   dates: "Sep 2023 --- Present"
// )
// - Volunteer and write tests for tournaments, including LA Regionals and SoCal State \@ Caltech

// #certificates(
//   name: "OSCP",
//   issuer: "Offensive Security",
//   // url: "",
//   date: "Oct 2024",
// )
