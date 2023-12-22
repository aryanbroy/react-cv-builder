import { useState } from 'react';
import './styles/App.css'

function App() {
  const [fullName, setFullName] = useState('Aryan Balwantroy');
  const [email, setEmail] = useState('example@gmail.com');
  const [phNumber, setPhNumber] = useState('+91-9439xxxxxx');
  const [schoolName, setSchoolName] = useState('Some Random College');
  const [degree, setDegree] = useState('BTech');
  const [startDate, setStartDate] = useState('33/01/1997');
  const [endDate, setEndDate] = useState('01/02/1997');
  const [companyName, setCompanyName] = useState(' Quantum Innovations Co.');
  const [position, setPosition] = useState('Boss');
  const [desc, setDesc] = useState('A master of mediocrity, I possess a unique talent for blending into the background and avoiding any form of recognition. With a remarkable ability to procrastinate and a knack for overlooking details, she is the ideal candidate for a position that demands little to no ambition.');
  const [companyStartDate, setCompanyStartDate] = useState('32/01/1990');
  const [companyEndDate, setCompanyEndDate] = useState('36/02/2023');
  const [location, setLocation] = useState('Blue Lagoon, Iceland')
  const [isActiveId, setIsActiveId] = useState(0);
  const [collegeLocation, setCollegeLocation] = useState('Quantum U - Skyline City')
  const [expComponents, setExpComponents] = useState([]);
  const [counter, setCounter] = useState(1);

  // handleAdd, companyName, handleCompanyName

  function handleAdd() {
    const newComponent = [...expComponents, { id: counter, text: <div><h4>Company Name: {companyName}</h4><p className='pos'>Position: {position}</p><p>{desc}</p></div> }];
      
    setExpComponents(newComponent);
    setCounter(counter + 1);
  }

  function handleRemove(id) {
    const updatedComponents = expComponents.filter((component) => component.id !== id)
    setExpComponents(updatedComponents)
  }

  const handleEdit = (id) => {
    let selectId = expComponents.filter(component => component.id === id);
    let name = selectId[0].text.props.children[0].props.children[1];
    let role = selectId[0].text.props.children[1].props.children[1];
    let description = selectId[0].text.props.children[2].props.children;
    setCompanyName(name);
    setPosition(role);
    setDesc(description)
    handleRemove(id);
  }

  function handleCompanyStartDate(e) {
    setCompanyStartDate(e.target.value);
  }

  function handleCompanyEndDate(e) {
    setCompanyEndDate(e.target.value)
  }

  function handleFullName(e) {
    setFullName(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePhNumber(e) {
    setPhNumber(e.target.value)
  }

  function handleSchoolName(e) {
    setSchoolName(e.target.value);
  }

  function handleDegree(e) {
    setDegree(e.target.value);
  }

  function handleStartDate(e) {
    setStartDate(e.target.value);
  }

  function handleEndDate(e) {
    setEndDate(e.target.value);
  }

  function handleCompanyName(e) {
    setCompanyName(e.target.value)
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handleCollegeLocation(e) {
    setCollegeLocation(e.target.value)
  }

  let handleDisable = false;
  if (expComponents.length >= 3) {
    handleDisable = true;
  }

  return (
    <div className='container'>
      <div className='editable'>
        <div className='insideEditable'>
          <PersonalInfo fullName={fullName} email={email} phNumber={phNumber} location={location} handleLocation={handleLocation} handleFullName={handleFullName} handleEmail={handleEmail} handlePhNumber={handlePhNumber} isActive={isActiveId === 0} onShow={() => setIsActiveId(0)}/>
          <EducationalInfo schoolName={schoolName} degree={degree}  startDate={startDate} endDate={endDate} collegeLocation={collegeLocation} handleCollegeLocation={handleCollegeLocation} handleSchoolName={handleSchoolName} handleDegree={handleDegree} handleStartDate={handleStartDate} handleEndDate={handleEndDate} isActive={isActiveId === 1} onShow={() => setIsActiveId(1)}/>
          <Experience handleDisable={handleDisable} handleAdd={handleAdd} companyName={companyName} position={position} startDate={companyStartDate} endDate={companyEndDate} desc={desc} handleCompanyName={handleCompanyName} handlePosition={handlePosition} handleStartDate={handleCompanyStartDate} handleEndDate={handleCompanyEndDate} handleDesc={handleDesc} isActive={isActiveId === 2} onShow={() => setIsActiveId(2)}/>
        </div>
      </div>
      <div className='display'>
        <div className='insideDisplay'>
          <div className='top'>
            <h1 className='name'>{fullName}</h1>
            <div className='numNemail'>
              <h3>{phNumber}</h3>
              <div className='imageH3'>
                <img src="./images/locationLogo.png" alt="" />
                <h3>{location}</h3>
              </div>
                <h3>{email}</h3>
            </div>
          </div>
          <div className='grid'>
            <div className='grid1'>
              <h2>Education</h2>
              <p>{schoolName}</p>
              <p>{degree}</p>
              <p>{collegeLocation}</p>
              <p>{startDate} - {endDate}</p>
            </div>
            <div className='grid2'>
              {/* <div className='expDivs'>
                <h2 className='exp'>Experience</h2>
                <h4>Company Name: {companyName}</h4>
                <p className='pos'>Position: {position}</p>
                <p>{desc}</p>
              </div> */}
              {expComponents.map((component) =>
                <div className='expDivs' key={component.id}>{component.text}
                  <div>
                    <button className='deleteBtn' onClick={() => handleEdit(component.id)}>Edit</button>
                  <button className='deleteBtn' onClick={() => handleRemove(component.id)}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonalInfo({fullName, email, phNumber, location, handleLocation, handleFullName, handleEmail, handlePhNumber, isActive, onShow}) {

  return (
    <>
      {isActive ? (
        <>
        <button className='heading' onClick={onShow}><h1>Personal Information: </h1></button>
        <label htmlFor="fullName">Full Name:
        <input type="text" value={fullName} onChange={handleFullName} id='fullName'/>
        </label>

        <br />  <br />

        <label htmlFor="email">Email:
          <input type="email" value={email} onChange={handleEmail} id='email'/>
        </label>

        <br /><br />

        <label htmlFor="phNumber">Phone Number:
          <input type="mobile" id='phNumber' value={phNumber} placeholder='+91-xxxxxxxxxx' onChange={handlePhNumber}/>
        </label>
        
          <label htmlFor="location">Location:
            <input type="text" id='location' value={location} onChange={handleLocation}/>
          </label>
      </>
      ): (
          <button className='heading' onClick={onShow}><h1>Personal Information: </h1></button>
      )
    }
    </>
  )
}

function EducationalInfo({schoolName, degree, startDate, endDate, collegeLocation, handleCollegeLocation, handleSchoolName, handleDegree, handleStartDate, handleEndDate, isActive, onShow}) {
  
  return (
    <>
      {isActive ? (
        <>
          <button className='heading' onClick={onShow}><h1>Educational Information: </h1></button>
          <label htmlFor="schoolName">College Name:
            <input type="text" id='schoolName' value={schoolName} onChange={handleSchoolName}/>
          </label>

          <br /><br />

          <label htmlFor="degree">Degree:
            <input type="text" id='degree' value={degree} onChange={handleDegree}/>
          </label>

          <br /><br />

          <label htmlFor="collegeLocation">Location:
            <input type="text" id='collegeLocation' value={collegeLocation} onChange={handleCollegeLocation} />
          </label>

          <br />

          <label htmlFor="startDate">Start Date:
            <input type="text" id='startDate' value={startDate} placeholder='DD-MM-YYYY' onChange={handleStartDate}/>
          </label>
          

          <label htmlFor="endDate">End Date:
            <input type="text" id='endDate' value={endDate} placeholder='DD-MM-YYYY' onChange={handleEndDate}/>
          </label>
        </>
      ): (
          <button className='heading' onClick={onShow}><h1>Educational Information: </h1></button>
      )
    }
    </>
  )
}

function Experience({companyName, position, startDate, endDate, desc, handleDisable , handleCompanyName, handlePosition, handleStartDate, handleEndDate, handleDesc, isActive, onShow, handleAdd }) {


  // function handleChange(e, i) {
    
  // }
  
  return (
    <>
      
      {isActive ? (
        <>
          <button className='heading' onClick={onShow}><h1>Experience:</h1></button>
          <label htmlFor="companyName">Company Name:
            <input type="text" id='companyName' value={companyName} onChange={handleCompanyName} />
          </label>

          <br /><br />

          <label htmlFor="position">Position Title:
            <input type="text" id='position' value={position} onChange={handlePosition} />
          </label>

          {/* <label htmlFor="startDate">Start Date:
                  <input type="text" id='startDate' value={startDate} placeholder='DD-MM-YYYY' onChange={handleStartDate}/>
                </label>
                

                <label htmlFor="endDate">End Date:
                  <input type="text" id='endDate' value={endDate} placeholder='DD-MM-YYYY' onChange={handleEndDate}/>
                </label> */}

          <br />

          <label htmlFor="desc">Description:
            <textarea name="desc" id="desc" cols="40" rows="3" onChange={handleDesc} value={desc}></textarea>
          </label>
          <button className='add' onClick={handleAdd} disabled={handleDisable}>+</button>
          {/* {datas.map((data, i) => {
            // return <input type="text" onChange={handleChange} key={i}/>
            return (
              <div key={i}>
                
                <label htmlFor="companyName">Company Name:
                <input type="text" id='companyName' value={companyName} onChange={handleCompanyName}/>
                </label>

                <br /><br />

                <label htmlFor="position">Position Title:
                  <input type="text" id='position' value={position} onChange={handlePosition}/>
                </label>

                <br /><br />

                <label htmlFor="startDate">Start Date:
                  <input type="text" id='startDate' value={startDate} placeholder='DD-MM-YYYY' onChange={handleStartDate}/>
                </label>
                

                <label htmlFor="endDate">End Date:
                  <input type="text" id='endDate' value={endDate} placeholder='DD-MM-YYYY' onChange={handleEndDate}/>
                </label>

                <br /><br />

                <label htmlFor="desc">Description:
                  <textarea name="desc" id="desc" cols="40" rows="3" onChange={handleDesc} value={desc}></textarea>
                </label>
                {datas.length - 1 === i &&
                  <button className='add' onClick={handleAdd}>+</button>
                }
                </div>
              )
          })} */}
        </>
      ) : (
          <button className='heading' onClick={onShow}><h1>Experience:</h1></button>
      )}
    </>
  )
}
export default App
