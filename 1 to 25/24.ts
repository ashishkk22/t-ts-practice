//get the surnames from the Names
type Names = [
  "Ashish Kachhadiya",
  "Vivek patel",
  "Deep vekariya",
  "Yash javiya",
  "Vishal ghadiya"
];

//this will return the
type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

type MySurname = GetSurname<Names[0]>; //string = first name's surname
