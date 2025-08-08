#import "@preview/basic-resume:0.2.1": *

// Put your personal information here, replacing mine
#let name = "Albaraa I. Alsmail"
#let location = "Damascus, SY"
#let email = "albaraa.as.2002@gmail.com"
#let github = "github.com/Chikobara"
#let linkedin = "linkedin.com/in/albaraa-alsmail"
#let phone = "+963 (988)-527682"

#show: resume.with(
  author: name,
  // All the lines below are optional.
  // For example, if you want to to hide your phone number:
  // feel free to comment those lines out and they will not show.
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  phone: phone,
  //personal-site: personal-site,
)

/*
 * Lines that start with == are formatted into section headings
 * You can use the specific formatting functions if needed
 * The following formatting functions are listed below
 * #edu(dates: "", degree: "", gpa: "", institution: "", location: "")
 * #work(company: "", dates: "", location: "", title: "")
 * #project(dates: "", name: "", role: "", url: "")
 * certificates(name: "", issuer: "", url: "", date: "")
 * #extracurriculars(activity: "", dates: "")
 * There are also the following generic functions that don't apply any formatting
 * #generic-two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "")
 * #generic-one-by-two(left: "", right: "")
 */
== Education

#edu(
  institution: "Al-Sham Private University",
  location: "Damascus, SY",
  dates: dates-helper(start-date: "Sep 2021", end-date: "2025"),
  degree: "Bachelor's of ITE, Artificial Intelligence",
)

Dean's List: Dr. George Karraz, Dr. Iyad Alkhayat, Dr. Afaf Alshalabi
- Cumulative GPA: 3.0\/4.0 | Supposed to be completed in 4 years – accelerated 5-year curriculum.
- Relevant Coursework: Data Structures, Program Development, Microprocessors, Abstract Algebra, Linear Algebra, Discrete Mathematics, Multivariable & Single Variable Calculus, Principles and Practice of Comp Sci, Information Retrieval Systems, Expert Systems, Machine Learning, Neural Networks, Deep Learning.
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
- None - Focuse

== Projects

#project(
  name: "Semester Project: Memoir",
  // Role is optional
  role: "Full-Stack/AI DEV",
  // Dates is optional
  dates: dates-helper(start-date: "Nov 2023", end-date: ""),
  // URL is also optional
  url: "open-memoir.vercel.app",
)
- Developed an open-source, real-time cross-platform note-taking app using Next.js, ElectronJS, React, and TypeScript.
- Implemented a chatbot feature using the Gemini API to enhance user interactions.
- Designed and optimized a scalable NoSQL backend with Convex to ensure high performance and reliability.
- Managed PR reviews, bug fixes, and ensured 99.99% uptime during peak loads.
- Contributed to open-source collaboration and continuously improved the app based on user feedback.

== Extracurricular Activities

- Completed
#extracurriculars(
  activity: "Python For Everybody - Coursera",
  dates: "Jul 2021",
)

#extracurriculars(
  activity: "Python Data Structures - Coursera",
  dates: "Oct 2021",
)

#extracurriculars(
  activity: "Using Python to Access Web Data - Coursera",
  dates: "Dec 2021",
)

#extracurriculars(
  activity: "What is Data Science? - Coursera",
  dates: "Sep 2023",
)

#extracurriculars(
  activity: "Machine Learning with Python (IBM AI Engineering Professional Certificate)",
  dates: "Jan 2025",
)

- Uncompleted courses yet
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
== Skills
- *Programming Languages*: JavaScript, Python, C/C++, HTML/CSS, Java, Bash, R, Flutter, Dart
- *Technologies*: Pandas, TensorFlow, Git, UNIX/Linux, Docker, Google Cloud Platform
- *Open-Source Contributor & Linux Customization*
  - Developed a GNOME extension to enhance user experience and system customization.
  - Customized Hyprland and GNOME window managers, optimizing workflows and aesthetics.
  - Actively contribute to open-source projects on GitHub, engaging in commits, issues, pull requests, and discussions.
