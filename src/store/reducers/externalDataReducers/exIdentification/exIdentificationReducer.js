const studentsIdentification = [
  {
    std_id: "111",
    name: "Agatha",
    other: null,
    surname: "Matthews",
    identity_number: "qaeworflsel",
    residential_address: "North Industrial area, Windhoek, Namibia",
    postal_address: "Northen Industrial zone post office", 
    gender: "female",
    name_of_guardian: "George Matthews",
    name_of_mother: "Martha Thompson",
    occupation_of_guardian: "Plumber",
    occupation_of_mother: "Doctor",
    home_phone: "061344893",
    business_phone: "0813685221",
    church: "Angican",
    home_language: "Afrikaans",
    dob: {
      month: "06",
      day: "28",
      year: "1996",
    },
  },
  {
    std_id: "222",
    name: "Roman",
    other: null,
    surname: "Tali",
    identity_number: "asdfvcvedvm;ld",
    residential_address: "Windhoek, Namibia",
    postal_address: "post office",
    gender: "male",
    name_of_guardian: "James Edgar",
    name_of_mother: "Sharon Manin",
    occupation_of_guardian: "Teacher",
    occupation_of_mother: "Shrink",
    home_phone: "061344893",
    business_phone: "0813685221",
    church: "Catholic",
    home_language: "Spanish",
    dob: {
      month: "06",
      day: "28",
      year: "1996",
    },
  },
  {
    std_id: "333",
    name: "Shelly",
    other: null,
    surname: "Knoll",
    identity_number: "ekjnevejefvev",
    residential_address: "Ludaritz",
    postal_address: "Ludaritz central",
    gender: "female",
    name_of_guardian: "Timoth Conor",
    name_of_mother: "Angelina Rose",
    occupation_of_guardian: "Taxi driver",
    occupation_of_mother: "Sales lady",
    home_phone: "061344893",
    business_phone: "0813685221",
    church: "AFM",
    home_language: "English",
    dob: {
      month: "06",
      day: "28",
      year: "1996",
    },
  },
];
const exIdentificationReducer = (state = studentsIdentification, action) => {
  return state;
};

export default exIdentificationReducer;
