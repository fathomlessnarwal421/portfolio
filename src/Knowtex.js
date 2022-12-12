import NavBar from "./NavBar"
import "./styles/project.css"

function Knowtex() {
    return (
        <div>
            <NavBar/>
        
        <h1>Iterative Design</h1>
        <div class="info-div">
          <h2>Overview</h2>
          <p>
            In this project we worked in a group to design an interactive 
            interface for an emerging startup. The startup we chose was 
            called <a href="https://www.ycombinator.com/companies/knowtex">Knowtext</a>. Knowtex is a startup that aims to use artificial intelligence and voice recognition to help doctors take better visit notes and more easily assign diagnosis and service medical codes. Its goal is to ultimately allow doctors to be able to fully focus on their patients in visits, while the Knowtex AI application takes notes on the visit; ultimately, the only attention the doctor needs to pay to the application is to start the record and check the results of the AI.
          </p>
        </div>

        <div class="info-div">
    <h2>Sketching and Wireframing</h2>
    <p>We have chosen to design a desktop application for our startup Knowtex which creates visit notes and patient records using 
      AI technology. The primary user for this application would be doctors. Doctors would need to be able to see their meetings and list of patients, 
      and be able to access, edit, and create new patient records. We each created a set of sketches, displayed below. 
    </p>
    <h3>First set of sketches</h3>
    <div class="img_group">
    <img src="assets/IMG_8024.jpg" alt="First Set of sketches" class="center"/>
    <img src="assets/IMG_8026.jpg" alt="First Set of sketches" class="center"/>
    <img src="assets/IMG_8027.jpg" alt="First Set of sketches" class="center"/>
    </div>
  <h3>Second set of sketches</h3>
  <div class="img_group">
    <img src="assets/maxime_sketches/sketch-1.png" alt="Second set of sketches" class="center"/>
    <img src="assets/maxime_sketches/sketch-2.png" alt="Second set of sketches" class="center"/>
    <img src="assets/maxime_sketches/sketch-3.png" alt="Second set of sketches" class="center"/>
    <img src="assets/maxime_sketches/sketch-4.png" alt="Second set of sketches" class="center"/>
    <img src="assets/maxime_sketches/sketch-5.png" alt="Second set of sketches" class="center"/>
    <img src="assets/maxime_sketches/sketch-6.png" alt="Second set of sketches" class="center"/>
    </div>
    <h3>Third set of sketches</h3>
    <div class="img_group">
    <img src="assets/Screen Shot 2022-11-07 at 11.27.15 PM.png" alt="Third Set of sketches" class="center"/>
    <img src="assets/Screen Shot 2022-11-07 at 11.27.23 PM.png" alt="Third set of sketches" class="center"/>
    </div>
    <h3>Fourth set of sketches</h3>
    <div class="img_group">
    <img src="assets/Screen Shot 2022-11-08 at 11.11.22 PM.png" alt="Fourth Set of sketches" class="center"/>
    <img src="assets/Screen Shot 2022-11-08 at 11.11.32 PM.png" alt="Fourth Set of sketches" class="center"/>
    </div>

    <p>We combined our 4 sketches into a final wireframe shown below. Some relevant design decisions were: 
      <ul>
        <li>
          For our homepage, we chose to combine both the 
          calendar layout as well as the patient display page, but create separate tabs for each section. 
        </li>
        <li>
          We chose the display style for the visit records shown in the third set of sketches, but the overall structure
          and layout we used came from the second set of sketches. 
        </li>
        <li>
          We chose to include a separate calibration page to make this functionality clear.
        </li>
        <li>We display the patient information on each of the relevant pages for a specific patient's records
          for a user to be able to easily keep track of which patient the record corresponds to. 
        </li>
      </ul>
    </p>
    <div class="img_group">
        <div class="panel_img">
        <img src="assets/Screen Shot 2022-11-06 at 10.08.24 PM.png" class="center_img"/>
        <p class="caption">Login page</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 10.04.52 PM.png" class="center_img"/>
    <p class="caption">Homepage (Calendar)</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 10.05.07 PM.png" class="center_img"/>
    <p class="caption">Homepage (All patients)</p>
    </div>
    <div class="panel_img">
    <img src="assets/Patient Page.png" class="center_img"/>
    <p class="caption">Patient page</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 10.10.54 PM.png" class="center_img"/>
    <p class="caption">New record page</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 10.11.05 PM.png" class="center_img"/>
    <p class="caption">Past visit record page</p>
    </div>
    <div class="panel_img">
    <img src="assets/wireframe-record&code.png" class="center_img"/>
    <p class="caption">Service and code page</p>
    </div>
    <div class="panel_img">
    <img src="assets/wireframe-edit code.png" class="center_img"/>
    <p class="caption">Code edit/manual lookup page</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 6.46.26 PM.png" class="center_img"/>
    <p class="caption">Voice calibration page (pre-calibration)</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 6.46.38 PM.png" class="center_img"/>
    <p class="caption">Voice calibration page (during calibration)</p>
    </div>
    <div class="panel_img">
    <img src="assets/Screen Shot 2022-11-06 at 6.46.52 PM.png" class="center_img"/>
    <p class="caption">Voice calibration page (post-calibration)</p>
    </div>
    
    </div>
    
  </div>

  <div class="info-div">
    <h2>Mockups</h2>
    <p>We created a first iteration of our interactive high-fidelity mockup linked <a href="https://www.figma.com/proto/oMWi69NQH8sjUstxIuPn8l/Iterative-Design---Knowtex?scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A2&node-id=4%3A2">here</a> using Figma. 
      Some relevant design decisions we made were: 
      <ul>
        <li>
          We wanted to maintain the original color scheme of the startup. 
        </li>
        <li>
          We were aiming for a very minimalistic design to mimic other medical applications. 
        </li>
        <li>We display the patient information on each of the relevant pages for a specific patient's records
          for a user to be able to easily keep track of which patient the record corresponds to. </li>
      </ul>
    We received feedback on this design from the TAs and other students, and this feedback as well as how we responded to it is summarized below. </p>
    <ul>
      <li>Participants were split on whether adding symbols to buttons could make the page less dense and easier to navigate, or whether keeping the buttons with text labels gave the application a more official, medical feel.
        <ul>
          <li>We added some symbols to certain buttons (like the log out button), but largely decided to keep — but simplify — the text on buttons, hopefully keeping the same formal feel while making it faster to navigate.</li>
        </ul>
      </li>
      <li>Participants suggested that it would be helpful to be able to access the voice calibration page from other pages (such as in the middle of a visit, in case the system stops working).
        <ul>
          <li>We added a “re-calibrate voice recognition” button to the record in-progress page.</li>
        </ul>
      </li>
      <li>Participants noted that the locations of buttons felt unintuitive or unpredictable, with “back” buttons appearing in different locations on different pages.
        <ul>
          <li>We shifted the locations of buttons to hopefully clarify flow, while keeping the “back” button in the top right of every screen.</li>
        </ul>
      </li>
      <li>Some feedback was given about editing or deleting past records: however, the reality of the healthcare system is that once records have been published to a patient’s medical record, they may not be altered or removed.
        <ul>
          <li>
            We added warnings to the interface to more clearly specify to users that once published, records cannot be edited or deleted.
          </li>
        </ul>
      </li>


    </ul>
  </div>

  <div class="info-div">
    <h2>User Testing</h2>
    <p>Using the feedback we received during our mockup crit, we iterated on the design of our high-fidelity mockup. Our final draft can be found 
      <a href="https://www.figma.com/proto/oMWi69NQH8sjUstxIuPn8l/Iterative-Design---Knowtex?node-id=113%3A487&scaling=min-zoom&page-id=113%3A42&starting-point-node-id=113%3A487"> here</a>.
      We then had test users try out our interface through a <a href="https://www.usertesting.com/">remote user testing service. </a>
      Our overall task was to have the user replicate a typical workflow by creating a new record page for a patient. The testing instructions presented to the user were
      <div>
        <br/>
      <p class="caption"> Imagine you are a doctor. You use this healthcare application to manage patients’ visit records, as well as to help automate note-taking during visits and determining diagnostic/service medical codes after the visit.
        You want to focus on interacting with the imaginary patient, not on taking notes or navigating the application.
        <br/>
        TASK: complete a visit record for John Dough’s 9-10am appointment today (Thursday, May 5).
        Please think aloud while you perform the task so that we can better understand your thought process.
        <br/>
        BE AWARE: this is an interactive mockup made on prototyping software, NOT a fully-functioning application. Not all buttons will be functional; however, clicking on the screen will highlight which areas of the screen are clickable.</p>
      <br/>
      </div>
      We presented the user with 4 subtaks, which were:
      <ol>
        <li>Calibrate the live voice transcription system</li>
        <li>Create a new visit record for John Dough’s 9-10am visit on Thursday, May 5th</li>
        <li>Edit and save the Service & Code form (SC form for short)
        </li>
        <li>Complete and publish the Visit Record and Service & Code forms to John Dough’s medical record</li>
      </ol>
      Our post-test questions were:
      <ol>
        <li>
          Did you encounter any challenges or confusions while attempting to complete the tasks?
        </li>
        <li>
          Were you able to navigate through the interface easily? How intuitive was the application structure and flow?
        </li>
        <li>
          After completing these four tasks, do you feel that you have a clear understanding of where you could find any information or options you might need to use in the app?
        </li>
        <li>
          Would you change anything about this application? If so, what?
        </li>
      </ol>
      Links to each user testing video can be found here: 
      <center>
      <h3>User 1</h3>
      <iframe src="https://drive.google.com/file/d/1wZigjTE9Djzu1GYfyIXyDCfB_eYOiS92/preview" width="640" height="480" allow="autoplay" class="centered_img"></iframe>
      <h3>User 2</h3>
      <iframe src="https://drive.google.com/file/d/1zry0i_t-D5ZhK4DTpdhV3HihmzMlfdlq/preview" width="640" height="480" allow="autoplay" class="centered_img"></iframe>
      <h3>User 3</h3>
      <iframe src="https://drive.google.com/file/d/1CBE381lRtan6UYxqSosFQcJQNuWYuivB/preview" width="640" height="480" allow="autoplay" class="centered_img"></iframe>
      </center>
    </p>
    <h3>Summary of Feedback</h3>
    <p>Our main points of feedback were:</p>
    <ul>
      <li>
        Make the location of voice recognition calibration more intuitive
      </li>
      <li>
        There were too many things highlighted in bold — difficult to identify what’s most important and actually distracts the user more rather than allowing them to focus on the patient
      </li>
      <li>
        That the interface was confusing for a first-time user, but would become intuitive after using it a few times.
        <ul>
          <li>
            For a medical system, we hope that we won’t have as many first-time users as long-time users, and most first-time users will be walked through it in an onboarding process at their hospital of employment.
          </li>
        </ul>
      </li>
      <li>
        Wanting more confirmation of completion, and wanting the interface to react more to their input
        <ul>
          <li>
            This was difficult due to the limitations of Figma and building a Hi-Fi prototype in only 10 screens.
          </li>
        </ul>
      </li>
      <li>
        Some users were confused that there was only one Publish button for both the Visit Record form and the Service & Code form.
      </li>
      <li>
        Limiting the number of buttons and options on various screens in order to simplify the flow
      </li>
    </ul>
    For each specific task
    <ol>
      <li>Calibrate the live voice transcription system
      <ul>
        <li>
          This subtask presented the largest obstacle to testers due to its wording and ordering among subtasks. Testers commented that they thought the voice calibration was for the entire application and would be done before entering into the patient page — rather than needing to be calibrated at the start of each patient visit (which was our assumption). Since the calibration option was on the patient page, which requires multiple click-throughs, making this the first subtask confused the testers. Thus, some testers weren’t able to complete this task as they stayed on the home page. This was not in line with our expectation as we did not realize that testers would expect the first subtask to be immediately accessible on the first page.
        </li>
      </ul>
    </li>
      <li>Create a new visit record for John Dough’s 9-10am visit on Thursday, May 5th
        <ul>
          <li>
            This subtask was completed without difficulty, because our design had a very obvious “new record” button. The largest difficulty was testers who did not realize that clicking this button was enough to consider the task completed, as in a functioning product, the AI would auto-populate most of the information on this record.
          </li>
        </ul>
      </li>
      <li>Edit and save the Service & Code form (SC form for short)
        <ul>
          <li>
            There were multiple difficulties associated with completing this subtask. One tester failed to located the SC form because the form title wasn’t highlighted enough. Another tester thought the “edit record” button for medical record form would also allow him to edit the SC form. This was a surprise to us as we didn’t realize having two edit buttons, though with different specifications, would be confusing. 
          </li>
        </ul>
      </li>
      <li>Complete and publish the Visit Record and Service & Code forms to John Dough’s medical record
        <ul>
          <li>
            This subtask was completed relatively quickly, though a common feedback was that it wasn’t clear the task was done. After hitting the “publish” button, users were directed back to the original patient page without any change. This was a limitation of our prototype being under 10 pages, otherwise we would’ve built a changed patient page that indicates the task has been complete.
          </li>
        </ul>
      </li>
    </ol>
  </div>

        </div>
    )

}

export default Knowtex