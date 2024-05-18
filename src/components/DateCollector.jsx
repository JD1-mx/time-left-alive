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

// funtions for later
const getTimeSinceBirth = (birthDate) => {
  const today = new Date();
  const diff = today - birthDate;
  const weeksdays = {};
  weeksdays.weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  weeksdays.leftoverdays = Math.floor(diff / (1000 * 60 * 60 * 24)) % 7;
  return weeksdays;
}
const birthDate = new Date('2001-02-07'); // Example birth date
console.log(getTimeSinceBirth(birthDate));

