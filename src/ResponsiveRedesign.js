import NavBar from "./NavBar"
import "./styles/project.css"

function ResponsiveRedesign() {
    return (
        <div>
            <NavBar/>
            <h1>Responsive Redesign</h1>
            <div class="info-div">
                <h2>Overview</h2>
                <p>The goal of this assignment is to practice and replicate the workflow of redesigning a simple
                website. We will analyze and identify flaws in an existing interface, create low-fidelity and high-fidelity 
                prototypes for various screen sizes, and finally build a responsive website based on 
                these prototypes. 
            </p>
            </div>
            <div class="info-div">
            <h2>Identifying Usability Problems</h2>
            <h3>The Website</h3>
            <p>My chosen interface can be found <a href="https://www.booksq.com/">here</a>.
        I chose this website because there is a lot of room for improvement to make it more usable and 
        accessable. In particular, the layout can be improved to establish a visual hierarchy and reading path
        to allow a user to better navigate the site and find relative information. 
      </p>
      <div class="panel_img">
      <img src="assets/Screen Shot 2022-10-14 at 8.46.25 PM.png" class="center_img"></img>
      </div>

      <h3>Problems</h3>
      <p>Some problems with the interface are: 
          <ol>
              <li>
                  The element groupings do not make sense. Relevant information is not really grouped together and it 
                  is difficult to find what you are looking for on this site. For example, there should be a section 
                  for events rather than having these events displayed haphazardly on the homepage. 
              </li>
              <li>
                  There is no established hierarchy in the layout that lets the user know where the most
                  relevant information on the page can be found. 
              </li>
              <li>
                  There is no reading path for the user on this page, so one thing that can be improved is establishing
                  a reading path and having action buttons located at the end of the scan patterns to improve efficiency 
                  of use. 
              </li>
              <li>
                  The website is not tailored for efficient use. Popular action items such as purchasing or searching for 
                  a specific books are hard to find on the page. 
              </li>
              <li>
                  This page does not follow aesthetic or minimal design. There is a lot of extra information displayed on the homepage that could be compartmentalized. 
                  The ammount of text on the page in general is overwhelming. 
              </li>
              <li> 
                  The website does not provide help and documentation for the user to figure out how to navigate the content 
                  of the site. 
              </li>
          </ol>
      </p>

      <h3>Accessibility</h3>
      <p>I used <a href="https://wave.webaim.org/report#/https://www.booksq.com/">WebAIM WAVE</a> to detect
        possible accessibility problems in the interface. A lot of the problems that were flagged were areas of low contrast on the 
        page, where there was olive green text on an off-white background. 
        <div class="panel_img">
        <img src="assets/Screen Shot 2022-10-14 at 9.15.37 PM.png" class="center_img"/>
        </div>
        I agree with this being an area with very low contrast. The shade is light for the background, and someone
        who is visualy impaired could have a hard time being able to see the text on this area. Other than the low contrast
        error there were other warnings about suspicious alternative text, but most of these warnings referred to the titles
        of books so can be ignored. 
    </p>
            </div>

        <div class="info-div">
        <h2>Low-fidelity Wireframing</h2>
      <p>Below I have included the low-fidelity wireframes that will be used for the redesign. Each wireframe
          represents a different screen size: website, tablet, and phone. Below I have also included annotations about 
          the changes made and how they address the previously mentioned usability problems. 
      </p>

          <div class="panel_img">
      <h3>Website</h3>
      <img src="assets/website_annotated.jpg"  class="center_img"/>
      </div>
      <div class="panel_img">
      <h3>Tablet</h3>
      <img src="assets/table_annotated.jpg"  class="center_img"/>
      </div>
      <div class="panel_img">
      <h3>Phone</h3>
      <img src="assets/phone_annotated.jpg"  class="center_img"/>
      </div>
        </div>

        <div class="info-div">
        <h2>Visual Design Style Guide</h2>
    <p>Link to the Visual Design Style Guide can be found <a href="https://www.figma.com/file/wInR6uBHWOsaDps8f8LyMa/Visual-Design-Style-Guide?node-id=0%3A1">here </a>. 
    The Visual Design Style Guide displays the main colors, typography, and reusable components' different states.</p>
    <div class="panel_img">
    <img src="assets/visual design style guide.png" class="center_img"/>
    </div>
        </div>

        <div class="info-div">
        <h2>High-Fidelity Prototyping</h2>
        <p>Link to the High-Fidelity Prototypes completed in Figma can be found 
            <a href="https://www.figma.com/file/QceBYSpflMxzRis01zHJlY/Books-on-the-Square?node-id=5%3A63">here</a>.
            Included are 3 different prototypes, one for each screen size (mobile, tablet, and desktop). With each 
            prototype key design elements that make the website responsive have been annotated. The most important design elements 
            are the 3 primary columns in the body of the website that become rows when the screen size is made smaller, in the phone or table 
            version. Additionally, each column allows for horizontal/vertical scrolling to be able to view the elements in the columns. 
        </p>
        <div class="img_group">
        <img src="assets/IMG_8020.jpg" class="center" />
        <img src="assets/IMG_8019.jpg" class="center" />
        <img src="assets/IMG_8018.jpg" class="center" />
        </div>
        </div>

        <div class="info-div">
        <h2>Responsive Redesign</h2>
        <form action="bookstore.html">
        <button class="button" href={process.env.PUBLIC_URL+"bookstore.html"}>Click to visit redesigned homepage!</button>
    </form>
        <p><a href="bookstore.html">Here</a> is the link to the final redesign of the hompage of our chosen website. 
        This redesign follows the layout and style choices outlined in our low-fidelity wireframe and high-fidelity prototypes. 
        It addresses the problems identified with the layout and design of our original webpage by improving the organization of 
        elements on the page and making it easy for users to find common functions through the addition of a navigation bar. 
        Shown below are screenshots of the webpage being tested for responsiveness at each screen size we created prototypes for.
    </p>
    <div class="img_group">
    <img src="assets/Screen Shot 2022-10-20 at 8.38.55 PM.png" class="center"/>
    <img src="assets/Screen Shot 2022-10-20 at 8.39.09 PM.png" class="center"/>
    <img src="assets/Screen Shot 2022-10-20 at 8.39.23 PM.png" class="center"/>
    </div>
        </div>

        </div>

    );
}
export default ResponsiveRedesign