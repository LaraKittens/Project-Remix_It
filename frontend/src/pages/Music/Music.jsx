export default function Music() {
  return (
    <main className="">
      <header>
        <div className="h-screen flex justify-start flex-col items-center bg-stone-900">
          <h1 className="text-red-800 text-6xl p-8 m-4">Music</h1>
          <h2 className="text-red-800 text-3xl p-8 m-4">
            Please insert your music file here :
          </h2>

          <form action="music">
            <input type="file" />
          </form>
        </div>
      </header>
    </main>
  );
}
