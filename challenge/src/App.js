import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {

  const { price, setPrice } = useState();

  function handlePrice() {
    setPrice(price);
  }

  return (
    <div>
      <BillInput isPrice={handlePrice}>
        <p style={{ display: "inline-block" }}>How much was the bill </p>
      </BillInput>
      
      <SelectPercentage>
        <p style={{ display: "inline-block" }}>How did you like the service </p>
      </SelectPercentage>

      <SelectPercentage >
        <p style={{ display: "inline-block" }}>How did you friend like the service </p>
      </SelectPercentage>
      <Output />
    </div>
  );
} 

function SelectPercentage({children}) {
  return (
    <div>
      {children}

      <select>
        <option value="0">Dissatisfied</option>
        <option value="5">it was ok (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>

    </div>);
}

function BillInput({isPrice,children}) {
  return (
    <div>
      {children}
      <input type="text" value={isPrice} onChange="isPrice" />
    </div>
  );
}

function Output(){

}