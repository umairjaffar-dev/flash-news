import FlishNewsHeader from "./sharedComponents/FlishNewsHeader";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 grid grid-rows-[auto_1fr]">
      <FlishNewsHeader />

      <div className="flex gap-5">
        <div>Sidebar</div>
        <div>Main Content</div>
      </div>
    </div>
  );
};

export default App;
