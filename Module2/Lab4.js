class MyFirstCompoment extends React.Component {
  render() {
    return (
      <div>
        <h2 className = "class-highlight">Hello world from a component!</h2>
      </div>
    );
  }
}

class MyFruitList extends React.Component {
  render() {
    const orange_str = "Orange";
    const apple_str = "Apple";
    const banana_str = "Banana";

    const fruit_img = 'images/fruit.jpg';
    const image_el = <img src= {fruit_img}/>

	var items = ['Jackfruit', 'Mango', 'Strawberry', 'Grapes', 'Peach',
                'Pineapple', 'Watermelon', 'Papaya', 'Guava', 'Lychee',
                'Pomegranate', 'Coconut', 'Cherry', 'Fig', 'Date', 'Raspberry',
                'Blueberry', 'Lemon', 'Lime', 'Tangerine', 'Cantaloupe',
                'Honeydew', 'Kiwifruit', 'Passionfruit', 'Dragonfruit',
                'Persimmon', 'Starfruit', 'Clementine', 'Nectarine',
                'Mandarin', 'Currant', 'Gooseberry', 'Mulberry', 'Boysenberry',
                'Elderberry', 'Cloudberry', 'Salak', 'Sours'];

	var item = items[Math.floor(Math.random() * items.length)];

	const fruit_list = (
		<div>
		    <div key="el-key" >Some of my favorite fruits</div>
		    <ul>
		        <li key="O-key">{orange_str}</li>
		        <li key="A-key">{apple_str}</li>
		        <li key="B-key">{banana_str}</li>
		        <li key="N-key" className="my-fruit" >{item}</li>
		    </ul>
		    {image_el}
		</div>
	);

	return fruit_list;
  }
}

const rootEl = document.getElementById('my-first-component');
const firstComponent = ReactDOM.createRoot(rootEl);
firstComponent.render(<MyFirstCompoment />);


const rootEl2 = document.getElementById('my-fruit-list');
const myFruitListComponent = ReactDOM.createRoot(rootEl2);
function on_tick() {
	myFruitListComponent.render(<MyFruitList />);
}

setInterval(on_tick, 2000);
