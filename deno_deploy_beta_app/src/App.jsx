import logo from './logo.svg';

// You need to import `h` factory function as Deno Deploy
// uses it instead of `React.createElement`
import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
  return (
    <div className="bg-gray-400 flex flex-col h-screen">
      <header className="flex-grow font-semibold ml-20">
        <img src={logo} className="h-40 w-40 flex flex-wrap mx-auto justify-center" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className=""
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="ml-6">
        <p>Another <a href="https://mountaintopcoding.dev" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-blue-200 hover:bg-white">mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project</p>
      </footer>
    </div>
  );
}

addEventListener("fetch", (event) => {
  // renderToString generates html string from JSX components.
  const response = new Response(renderToString(<App />), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });

  event.respondWith(response);
});

export default App;
