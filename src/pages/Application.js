import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Application() {

  const navigate = useNavigate();

  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState('');
  const [idnumber, setIdnumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [secondNationality, setSecondNationality] = React.useState('');
  const [educationLevel, setEducationLevel] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [disabilityType, setDisabilityType] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [university, setUniversity] = React.useState('');
  const [dateOfGrad, setDateOfGrad] = React.useState('');
  const [gpa, setGpa] = React.useState('');
  const [documentType, setDocumentType] = React.useState('');
  const [documentName, setDocumentName] = React.useState('');
  const [documentFile, setDocumentFile] = React.useState('');
  const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  const id = sessionStorage.getItem('idnumber');
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

        const response = await axios.post("http://localhost:3001/application",{
          name,
          email,
          phone,
          idnumber,
          dateOfBirth,
          nationality,
          gender,
          secondNationality,
          educationLevel,
          disability,
          disabilityType,
          address,
          university,
          dateOfGrad,
          gpa,
          documentType,
          documentName,
          documentFile,
        }
        );
        console.log(response);
        if(response.status === 200){
            setSuccess("The application has been successfully received.");
            setName('');
            setEmail('');
            setPhone('');
            setDateOfBirth('');
            setNationality('');
            setGender('');
            setSecondNationality('');
            setEducationLevel('');
            setDisability('');
            setDisabilityType('');
            setAddress('');
            setUniversity('');
            setDateOfGrad('');
            setGpa('');
            setDocumentType('');
            setDocumentName('');
            setDocumentFile('');
            setError('');

  
            navigate('/portal');
        }else{
            setError(response.data.error);
        }


    }catch(err){
        console.log(err);
        setError("An error occurred in the database connection. ", err);
    }
}



  return (
    <div className='application'>
      <Sidebar/>  
      <div className='application_content'>
        <h1>Application</h1>
        {step === 1 && (
          <form className='app_form' onSubmit={handleSubmit}>
            <input type="text" 
              placeholder="Name Surname" 
              value={name} 
              onChange= {(e) => setName(e.target.value)}
              required /><br/>
            <input type="email" 
              placeholder="E-mail adress" 
              value={email} 
              onChange= {(e) => setEmail(e.target.value)}
              required /><br/>
            <input type="phone" 
              placeholder="Phone Number" 
              value={phone} 
              onChange= {(e) => setPhone(e.target.value)}
              required /><br/>
            <input type="idnumber" 
              placeholder="ID Number" 
              value={idnumber} 
              onChange= {(e) => setIdnumber(e.target.value)}
              required /><br/>
            <textarea type="address" 
              rows="5"
              cols="27"
              placeholder="Home Address" 
              value={address} 
              onChange= {(e) => setAddress(e.target.value)}
              required /><br/>
            <button type='button' onClick={handleNextStep}>Next</button>
          </form>
        )}
        {step === 2 && (
          <form className='app_form' onSubmit={handleSubmit}>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <br/>
            <input type="date"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required /><br/>
          
          
            <select className="form-select form-select-m mb-3"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required >
              <option value="" selected disabled hidden>Choose Your Nationality</option>
              <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Samoa">Samoa</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Tuvalu">Turkiye</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
         
      
            <br/>
            <select className="form-select form-select-m mb-3"
              value={secondNationality}
              onChange={(e) => setSecondNationality(e.target.value)}
              required >
              <option value="" selected disabled hidden>Choose Your 2nd Nationality</option>
              <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Samoa">Samoa</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Tuvalu">Turkiye</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <br/>
            <select className="form-select form-select-m mb-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}>  
              <option value="" selected disabled hidden>Choose your gender</option>
              <option value="woman">Woman</option>
              <option value="man">Man</option>
              <option value="nonbinary">Non-binary</option>
            </select>
            <br/>
            <br/>
            <div>
      <span>Do you have a disability?</span>
      <div>
        <label>
          <input
            type="radio"
            value="yes"
            checked={disability === "yes"}
            onChange={() => {
              
              setDisability("yes");
              setDisabilityType("");
            }}
          />
          Yes
          <br/>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={disability === "no"}
            onChange={() => {
              setDisability("no");
              setDisabilityType("");
            }}
          />
          No
        </label>
      </div>
    </div>
    <br/>
    {disability === 'yes' && (
      <>
        <br/>
        <span id="disabilityType">Please explain the type of disability you have:</span>
        <br/>
        <textarea id="story" 
                  name="story"
                  rows="5"
                  cols="50"
                  onChange={(e) => setDisabilityType(e.target.value)}
                  value={disabilityType}
                />
      </>
    )}

<br/>
<button type='button' className="back-button" onClick={handlePrevStep}>Back</button>
<button type='button' onClick={handleNextStep}>Next</button>
          </form>
        )} 

        {step === 3 && (
          <form className='app_form' onSubmit={handleSubmit}>
            <select className="form-select form-select-m mb-3"
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}>  
              <option value="" selected disabled hidden>Choose your education level</option>
              <option value="highschool">Highschool</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
            </select>
            <br/>

            <select className="form-select form-select-m mb-3"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}>  
              <option value="" selected disabled hidden>Choose your university</option>
                                    <option value="Ahi Evran Üniversitesi">Ahi Evran Üniversitesi</option>
                                    <option value="Akdeniz Üniversitesi">Akdeniz Üniversitesi</option>
                                    <option value="Akev Üniversitesi">Akev Üniversitesi</option>
                                    <option value="Aksaray Üniversitesi">Aksaray Üniversitesi</option>
                                    <option value="Bilkent Üniversitesi">Bilkent Üniversitesi</option>
                                    <option value="Bingöl Üniversitesi">Bingöl Üniversitesi</option>
                                    <option value="Biruni Üniversitesi">Biruni Üniversitesi</option>
                                    <option value="Bitlis Eren Üniversitesi">Bitlis Eren Üniversitesi</option>
                                    <option value="Bozok Üniversitesi">Bozok Üniversitesi</option>
                                    <option value="Boğaziçi Üniversitesi">Boğaziçi Üniversitesi</option>
                                    <option value="Çağ Üniversitesi">Çağ Üniversitesi</option>
                                    <option value="Çukurova Üniversitesi">Çukurova Üniversitesi</option>
                                    <option value="Deniz Harp Okulu">Deniz Harp Okulu</option>
                                    <option value="Dicle Üniversitesi">Dicle Üniversitesi</option>
                                    <option value="Dokuz Eylül Üniversitesi">Dokuz Eylül Üniversitesi</option>
                                    <option value="Doğuş Üniversitesi">Doğuş Üniversitesi</option>
                                    <option value="Düzce Üniversitesi">Düzce Üniversitesi</option>
                                    <option value="Ege Üniversitesi">Ege Üniversitesi</option>
                                    <option value="Erciyes Üniversitesi">Erciyes Üniversitesi</option>
                                    <option value="Erzincan Üniversitesi">Erzincan Üniversitesi</option>
                                    <option value="Galatasaray Üniversitesi">Galatasaray Üniversitesi</option>
                                    <option value="Gazi Üniversitesi">Gazi Üniversitesi</option>
                                    <option value="Gaziantep Üniversitesi">Gaziantep Üniversitesi</option>
                                    <option value="Gaziosmanpaşa Üniversitesi">Gaziosmanpaşa Üniversitesi</option>
                                    <option value="Gebze Teknik Üniversitesi">Gebze Teknik Üniversitesi</option>
                                    <option value="Gedik Üniversitesi">Gedik Üniversitesi</option>
                                    <option value="Gümüşhane Üniversitesi">Gümüşhane Üniversitesi</option>
                                    <option value="Hacettepe Üniversitesi">Hacettepe Üniversitesi</option>
                                    <option value="Hakkari Üniversitesi">Hakkari Üniversitesi</option>
                                    <option value="Haliç Üniversitesi">Haliç Üniversitesi</option>
                                    <option value="Harran Üniversitesi">Harran Üniversitesi</option>
                                    <option value="Hasan Kalyoncu Üniversitesi">Hasan Kalyoncu Üniversitesi</option>
                                    <option value="Kadir Has Üniversitesi">Kadir Has Üniversitesi</option>
                                    <option value="Kara Harp Okulu">Kara Harp Okulu</option>
                                    <option value="Karabük Üniversitesi">Karabük Üniversitesi</option>
                                    <option value="MEF Üniversitesi">MEF Üniversitesi</option>
                                    <option value="Maltepe Üniversitesi">Maltepe Üniversitesi</option>
                                    <option value="Mardin Artuklu Üniversitesi">Mardin Artuklu Üniversitesi</option>
                                    <option value="Marmara Üniversitesi">Marmara Üniversitesi</option>
                                    <option value="Mersin Üniversitesi">Mersin Üniversitesi</option>
                                    <option value="Mevlana Üniversitesi">Mevlana Üniversitesi</option>
                                    <option value="Mustafa Kemal Üniversitesi">Mustafa Kemal Üniversitesi</option>
                                    <option value="İbn-u Haldun Üniversitesi">İbn-u Haldun Üniversitesi</option>
                                    <option value="İnönü Üniversitesi">İnönü Üniversitesi</option>
                                    <option value="İstanbul Üniversitesi">İstanbul Üniversitesi</option>
                                    <option value="İstanbul Şehir Üniversitesi">İstanbul Şehir Üniversitesi</option>
                                    <option value="İstinye Üniversitesi">İstinye Üniversitesi</option>
                                    <option value="İzmir Ekonomi Üniversitesi">İzmir Ekonomi Üniversitesi</option>
                                    <option value="Özyeğin Üniversitesi">Özyeğin Üniversitesi</option>
                                    <option value="Pamukkale Üniversitesi">Pamukkale Üniversitesi</option>
                                    <option value="Piri Reis Üniversitesi">Piri Reis Üniversitesi</option>
                                    <option value="Sakarya Üniversitesi">Sakarya Üniversitesi</option>
                                    <option value="Sanko Üniversitesi">Sanko Üniversitesi</option>
                                    <option value="Selçuk Üniversitesi">Selçuk Üniversitesi</option>
                                    <option value="Siirt Üniversitesi">Siirt Üniversitesi</option>
                                    <option value="Sinop Üniversitesi">Sinop Üniversitesi</option>
                                    <option value="Süleyman Şah Üniversitesi">Süleyman Şah Üniversitesi</option>
                                    <option value="Şifa Üniversitesi">Şifa Üniversitesi</option>
                                    <option value="TED Üniversitesi">TED Üniversitesi</option>
                                    <option value="Trakya Üniversitesi">Trakya Üniversitesi</option>
                                    <option value="Tunceli Üniversitesi">Tunceli Üniversitesi</option>
                                    <option value="Turgut Özal Üniversitesi">Turgut Özal Üniversitesi</option>
                                    <option value="Türk Alman Üniversitesi">Türk Alman Üniversitesi</option>
                                    <option value="Ufuk Üniversitesi">Ufuk Üniversitesi</option>
                                    <option value="Uludağ Üniversitesi">Uludağ Üniversitesi</option>
                                    <option value="Uşak Üniversitesi">Uşak Üniversitesi</option>
                                    <option value="Üsküdar Üniversitesi">Üsküdar Üniversitesi</option>
                                    <option value="Yalova Üniversitesi">Yalova Üniversitesi</option>
                                    <option value="Yaşar Üniversitesi">Yaşar Üniversitesi</option>
                                    <option value="Zirve Üniversitesi">Zirve Üniversitesi</option>
            </select>
            <br/>

            <input type="gpa" 
              placeholder="Grade Point Average" 
              value={gpa} 
              onChange= {(e) => setGpa(e.target.value)}
              required /><br/><br/>
            <label htmlFor="dateOfGrad">Date of Graduation:</label>
            <br/>
            <input type="date"
              placeholder="Date of Graduation"
              value={dateOfGrad}
              onChange={(e) => setDateOfGrad(e.target.value)}
              required /><br/>

            <br/>

              <button type='button' className="back-button" onClick={handlePrevStep}>Back</button>
              <button type='button' onClick={handleNextStep}>Next</button>
      
           
          </form>
        )}

{step === 4 && (
          <form className='app_form'>
                <h5>Please upload the documents below:</h5>
                <div className='form-group'>
    <label htmlFor='cvFile'>CV:</label>
    <input type='file' className='form-control-file' id='cvFile' />
  </div>

  <div className='form-group'>
    <label htmlFor='sopFile'>Statement of Purpose:</label>
    <input type='file' className='form-control-file' id='sopFile' />
  </div>

  <div className='form-group'>
    <label htmlFor='passportFile'>Copy of Passport:</label>
    <input type='file' className='form-control-file' id='passportFile' />
  </div>

  <div className='form-group'>
    <label htmlFor='residenceFile'>Certificate of Residence:</label>
    <input type='file' className='form-control-file' id='residenceFile' />
  </div>

  <div className='form-group'>
    <label htmlFor='diplomaFile'>Copy of Diploma:</label>
    <input type='file' className='form-control-file' id='diplomaFile' />
  </div>

  <div className='form-group'>
    <label htmlFor='englishFile'>Certificate of English Proficiency:</label>
    <input type='file' className='form-control-file' id='englishFile' />
  </div>
                                <button type='button' className="back-button" onClick={handlePrevStep}>Back</button>
                                <button type='button' className="submit-button" onClick={handleSubmit}>Submit</button>

          </form>

          
        )}
{error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}

      </div>
    </div>
  );
}

export default Application;
