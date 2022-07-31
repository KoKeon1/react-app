import logo from './logo.svg';
import './App.css';

function Header(){
  return <header>
           <h1><a href='/'>Web112221</a></h1>
         </header>
}

function Nav(){
  return <nav>
          <ol>
            <li><a href='/read/1'>html2</a></li>
            <li><a href='/read/2'>css2</a></li>
            <li><a href='/read/3'>js2</a></li>
          </ol>
        </nav>
}

function Article(){
  return <article>
          <h2 color='red'>welcome222</h2>
        </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      
      <Nav></Nav>
      
      <Article></Article>
    </div>
  );
}

export default App;
