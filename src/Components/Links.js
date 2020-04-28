//Links.js
import React, {Component} from 'react';

export class Links extends Component {
  render() {
    return (
      <div className='Links'>
        
        <div class="body-block" id="main-extlinks">
          <div class="block-content">
            <div><h2>Social Media</h2></div>
            <div class="elem"><a href="https://www.facebook.com/lillian.liu.3532">Facebook</a></div> <br/>
            <div class="elem"><a href="https://www.linkedin.com/in/lillian-liu-657748171/">LinkedIn</a></div> <br/>
          </div>
          <div class="block-content">
            <div><h2>External Links</h2></div>
            <div class="elem"><a href="https://github.com/liulillian/LillianLiu-CS185">Site GitHub</a></div> <br/>
            <div class="elem"><a href="https://gauchospace.ucsb.edu/courses/course/view.php?id=76596">CMPSC 185 Course Website</a></div> <br/>
          </div>
        </div>
          
      </div>
    );
  }
}

export default Links;
