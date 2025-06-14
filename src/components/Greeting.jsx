let name =  "John";
let date = new Date().toLocaleDateString();

const Greeting = () => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Today is : {date}</p>
    </div>
  );
};

export default Greeting;
