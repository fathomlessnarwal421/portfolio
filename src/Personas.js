import NavBar from "./NavBar"
import "./styles/project.css"

function Personas() {
    return (
        <div>
            <NavBar />
        <h1>Personas and Storyboarding</h1>

        <div class="info-div">
        <h2>Overview</h2>
            <p>This assignment details the user journey of someone using the drink machine at our school's dining hall
            We will step into the users' shoes, observe them, create personans for them, and finally create a storyboard that 
            details their journey from start to finish. 
            </p>
        </div>

        <div class="info-div">
        <h2>Annotated sketch and description of interface</h2>
        <div class="img_group">
      <img src="assets/IMG_ED6721A4E18E-1.jpeg"  class="center"/>
      <img src="assets/IMG_0E491D545F16-1.jpeg"  class="center"/>
    </div>
    <p>The goal of the interface is to provide the user a clear display of the drink options available to them, and then dispense the drink into the cup placed 
          under the dispenser. The user can select the kind of drink they want, and they will then be taken to a different screen to display flavor options. 
          The flavor options also display the calories in the drink. 
          Once they select the flavor option they want, they push on the dispenser and it dispenses their drink. 
          The user has the option to filter all drinks, low/no calorie drinks, or caffeine free drinks. They also have the option to change the display to Spanish. 
          In the top left corner, there is an option for a user to use contact-free pouring, and select their drink through their phone if they do not want to touch the screen. There is a QR code to allow users to 
          navigate to this option. In the top right, there is also an option to "Try Exclusive Flavors".
      </p>
            
        </div>

        <div class="info-div">
        <h2>Questions and Observations</h2>
        <div class="column">
            <div class="elem">
        <p>The questions asked to the users were: </p>
      <ol>
          <li>What do you think about the grouping of the drink options on the screen?</li>
          <li>Where you able to easily locate your drink of choice?</li>
          <li>Did the filter options at the bottom of the screen suit your needs?</li>
          <li>Are there any features you would add or remove to this interface?</li>
          <li>What was your thought process while using this interface?</li>
          <li>Would you use the contact-free pouring option?</li>
      </ol>
      </div>
      <div class="elem">
      <p> Some observations made were: </p>
      <ul>
          <li>There was a person who was in a rush who selected the wrong drink at first then had to navigate back to the main screen to select the correct drink. 
              This person did not seem to have trouble navigating back, but I noticed the drink they clicked on first and the drink they actually wanted had a similar color scheme on the display. 
          </li>
          <li> Some people would choose to just get water out of this machine, even though there was a normal water dispenser right next to it in the dining hall</li>
          <li> People did not spend much time looking for a drink, most of them knew what they wanted before they got to the drink machine, and just automatically chose their drink instead of thinking and choosing one.</li>
          <li>
              Nobody I observed used the filter options at the bottom. The majority of people knew what their drink of choice would be. 
          </li>
          <li>
              Nobody used contact-free pouring, even though this was an option being advertised on the machine. 
          </li>
          <li>
              Almost everyone dispensed ice and then chose their drink. 
          </li>
      </ul>
      </div>
      </div>
        </div>

<div class="info-div">
<h2> Interviews </h2>
    <div class="column">
        <div class="elem">
            <h3>Person 1</h3>
            <ol>
                <li>
                    This person found the interface to be fairly intuivite. They thought the 
                    grouping of the drinks made sense, but they thought the drinks were grouped by type of 
                    drink and not by brand. 
                </li>
                <li>
                    This person always goes for the same drink, so they were able to easily locate their drink of choice. 
                </li>
                <li>They did not use the filter options at the bottom of the screen, and had never even noticed that those options were there. </li>
                <li>There were not any features they would add or remove</li> 
                <li> They did not have to think much while using this interface because they always got the same drink.</li>
                <li>They would not use contact-free pouring.</li>
            </ol>
        </div>
        <div class="elem">
            <h3>Person 2</h3>
            <ol>
                <li>This person found the interface to be intuitive. However, they mentioned they did not realize they needed to put ice into the drink first until it splashed on them. </li>
                <li>This person also had a drink of choice, so knew where to locate it.</li>
                <li>They did not use the filters, since they said they did not have a need for those filter options.</li>
                <li>There were no features they thought should be added. </li>
                <li>When asked about their thought process, they said they really only look at the drinks in the center ring of the screen, since their drink of choice was a Coke.</li>
                <li>They would not use contact-free pouring. </li>
            </ol>
        </div>
        <div class="elem">
            <h3>Person 3</h3>
            <ol>
                <li> This person found the drink machine to be intuivite and easy to use.</li>
                <li> This person was not a frequent user of the drink machine, so they spent time looking at the options
                    to decide what they wanted. They said that there should be a clearer indication of when something is unavailable. 
                </li>
                <li>
                    They did not use the filter options and said they did not really have the need for them since there were not that many drink options. 
                </li>
                <li>
                    They said there should be a feature that shows when to stop pouring or how much of the drink has already been poured that corresponds to the calorie count displayed for each drink and the size of the drink.
                </li>
                <li> When asked about their thought process, they also look immediately at the center ring of drinks, then look at the other options. They did not notice the "exclusive flavor" option in the top right corner. </li>
                <li> They would not use contact-free pouring, and said that that seemed really inconvenient. </li>
            </ol>
        </div>
    </div>
</div>

<div class="info-div">
<h2>Empathy Maps </h2>
      <div class="column">
          <div class="elem">
      <img src="assets/rushed_user.png" class="column_img"/>
      <ul>
     <li>This user is in a rush. They are late for a meeting but they really want to grab a drink before leaving the dining hall. 
          They already know what they want but they need to be able to find it and get the drink as quickly as possible. 
        </li>
        <li> Interface problems this user could encounter is easily distinguishing between drinks, since they are in a rush. They would also need the interface to be responsive and transition between drinks quicky. 
            They would also benefit from the feature of having the drink indicate how much it is pouring since they are in a rush and may not pay attention to it.
        </li>
        <li> This persona is representative of users who need to interact with this drink machine without giving it too much thought, or any user that is rushing and needs to use the drink machine
            as quickly and efficiently as possible. 
        </li>
    </ul>
        </div>
        <div class="elem">
          <img src="assets/user_with_choices.png" class="column_img"/>
      <ul>
          <li>
              This user is enjoying a casual lunch with a friend, and they see their friend using the ratty drink machine. Our user usually just gets water but they decide to get 
              something more fancy today. 
          </li>
          <li> This person is not a regular user, and they do not have a drink of choice. Their main interface problems would be understanding how the drinks are grouped, 
              how to filter between different options, and how to tell when a drink option has run out.
          </li>
          <li> This persona is representative of non-frequent users, or users who are actually looking for new options 
              instead of going for their drink of choice. The interface needs to be intuitive and easy to navigate for these new users. 
          </li>
      </ul>
    </div>
    </div>

</div>

<div class="info-div">
<h2>Storyboard</h2>
      <div class="scrollmenu">
    
      <div class="panel">
      <img src="assets/storyboard/IMG_7990.jpg" class="panel_image"/>
      <p>Our user is at the dining hall called the "Ratty", where she has just finished her meal with her friend. 
          She starts to feel thirsty.
      </p>
    </div>

    <div class="panel">
      <img src="assets/storyboard/IMG_7991.jpg" class="panel_image"/>
      <p>Our user looks down at her watch and notices the time is 6:58pm, and she has a meeting at 7pm. She quickly starts hurrying towards the exit of the dining hall.</p>
    </div>

    <div class="panel">
      <img src="assets/storyboard/IMG_7992.jpg" class="panel_image"/>
      <p>While cleaning her plate, she notices the drink machine and remembers that she is thirsty. 
          It is a long meeting, and she probably won't be able to get something to drink later. 
          She thinks about whether or not she should go grab a drink quickly from the drink machine, then decides to do it. 
      </p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_7995.jpg" class="panel_image"/>
      <p>She decides to go get a drink and grabs a to-go cup. She knows what she wants to get, which is the Minute-Maid lemonade she always gets.</p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_7996.jpg" class="panel_image"/>
      <p>She scans the options, and locates the Minute-Maid drink grouping, then chooses the lemonade.</p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_7997.jpg" class="panel_image"/>
      <p>After clicking on the Minute-Maid option she sees the next screen, which displays all the flavors. Since she is rushing, she just selects the first one.</p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_7999.jpg" class="panel_image"/>
      <p>After selecting the drink of choice, she fills her cup halfway with ice.</p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_8001.jpg" class="panel_image"/>
      <p>She then moves to the drink dispenser, and fills the cup. The cup is almost too full, because there is no indication on the screen how much is being poured out.</p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_8003.jpg" class="panel_image"/>
      <p>Our user successfully got lemonade from the drink machine. </p>
      </div>

      <div class="panel">
      <img src="assets/storyboard/IMG_8004.jpg" class="panel_image"/>
      <p>The user looks at the time, realizes she is a little late for her meeting and takes off in a rush.</p>
    </div>

    </div>

</div>


        </div>
    )
}

export default Personas