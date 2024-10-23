import "./App.css";
import One from "./components/One";
import Student from "./components/Student";
import Background from "./components/Background";
import Form from "./components/Form";

function App() {
  const name = "Cyber Tech";
  const student = [
    {
      name: "aung aung",
      live: 18,
    },
    {
      name: "mg mg",
      live: 19,
    },
    {
      name: "tun tun ",
      live: 20,
    },
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <One name={name}></One>
      <Background>
      <Student name={student[0].name} live={student[0].live}></Student>
      <Student name={student[1].name} live={student[1].live}></Student>
      <Student name={student[2].name} live={student[2].live}></Student>
      </Background>
      <Background>
        <Form></Form>
      </Background>
    </div>
  );
}

export default App;
