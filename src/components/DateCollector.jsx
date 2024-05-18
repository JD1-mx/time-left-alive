const DataCollector = () => {
  return (
    <div className="flex justify-center py-2">
      <input type="date" className="border rounded-lg" />
      <button className="px-4 font-semibold rounded-lg shadow-md text-white bg-gray-500 hover:bg-green-700">
        Submit
      </button>
    </div>
  );
};

export default DataCollector;
