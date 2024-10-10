function App() {
  function challenge(){
    alert('Mujhe pta hai padhne ka mn nhi krta lekin tu kuchh bhi kr ke apne aap ko jeet')
  }
  return (
    

        <header className="text-center text-[2.2rem] font-bold text-red-700  rounded leading-[1] py-1 border-2 border-blue-700 max-w-[1200px] m-auto mb-4">
          {/* Tailwindcss ko react app me install kr liya iski bhen ki maze maze */}
          <h1 onClick={challenge}> Kya tum apne man ko jeet sakte ho???</h1>
        </header>

   
  );
}

export default App;
