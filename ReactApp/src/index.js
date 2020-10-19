import React, { useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar.js";
import CoverPic from "./Components/CoverPic";
import "./style.css";
import FormContainer from "./Components/FormContainer.js";
import FormContext from "./Components/formContext";
import Footer from "./Components/Footer";
var currDate = new Date();
currDate.setDate(currDate.getDate());
const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [finalData, setFinalData] = useState([]);
  const [form1Data, setForm1Data] = React.useState({
    FirstName: "",
    SecondName: "",
    ThirdName: "",
    ArabicFirstName: "",
    ArabicSecondName: "",
    ArabicThirdName: "",
    Country: "",
    City: "",
    Gender: "",
    Street: "",
    Zip: "",
    birthDate: currDate,
    CountryCode: "",
    PhoneNumber: "",
    PhoneNumber2: "",
    Landline: "",
    Email: "",
  });

  const [form2Data, setForm2Data] = useState({
    University: "",
    Specialization: "",
    HighestLevelOfEdu: "",
    Percentage: 0,
    GPA: 0,
    LetterGrade: "",
    Transcript: "",
    Certificate: "",
  });
  const [form3Data, setForm3Data] = React.useState({
    Faculty: "",
    Program: "",
    EntryTerm: "",
  });
  return (
    <React.StrictMode>
      <NavBar />
      <CoverPic />
      <FormContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          form1Data,
          setForm1Data,
          form2Data,
          setForm2Data,
          form3Data,
          setForm3Data,
          finalData,
          setFinalData,
        }}
      >
        <FormContainer />
      </FormContext.Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
