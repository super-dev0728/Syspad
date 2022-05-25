import React from 'react';
import { Col, Row } from 'react-bootstrap';

const PersonalData = () => {
  var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  return (
    <div className='mt-4 presonalData'>
      <Row className='m-0'>
        <Col className='col-12 col-md-6'>
          <div>
            <h5>Full Name</h5>
            <input type="text" placeholder='Your Name' />
          </div>
        </Col>
        <Col className='col-12 col-md-6'>
          <div>
            <h5>Email Address</h5>
            <input type="text" placeholder='Your Email Address' />
          </div>
        </Col>
        <Col className='col-12 col-md-6'>
          <div>
            <h5>Mobile Number</h5>
            <input type="text" placeholder='Your Mobile Number' />
          </div>
        </Col>
        <Col className='col-12 col-md-6'>
          <div>
            <h5>Date of Birth</h5>
            <input type="date" placeholder='dd/mm/yy' />
          </div>
        </Col>
        <Col className='col-12 col-md-6'>
          <div>
          <h5 className='pt-1'>Nationality</h5>
               <select  className='nationality-input mt-0'>
                 {
                   countryList.map(country=> <option className='input-option-field text-dark' value="TypeThree">{country}</option>)
                 }
                 
                </select>
          </div>
        </Col>
      </Row>
  
      <div className='buyMoreBtn mt-5 mx-2'>
      <button>Update Profile <i class="fa-solid fa-floppy-disk mx-1"></i></button>
      </div>
     
    </div>
  );
};

export default PersonalData;