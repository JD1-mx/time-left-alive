import PropTypes from 'prop-types';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const generateFakeData = () => {
  const data = [];
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    data.push({ date, count: Math.floor(Math.random() * 7) });
  }
  return data.reverse();
};

const getWeekData = (data) => {
    if (!data || !Array.isArray(data)) {
      return []; // Return an empty array if data is undefined or not an array
    }
    const weeks = [];
    let currentWeek = [];
    data.forEach((day, index) => {
      currentWeek.push(day);
      if ((index + 1) % 52 === 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
    if (currentWeek.length) {
      weeks.push(currentWeek);
    }
    return weeks;
};  

// i think before continuing with the layout, its important to define a static / default calendar
// then work on the function that will produce the table 

const ContributionsTable = ({ data }) => {
  const weeks = getWeekData(data);
  return (
    <div className="p-4 min-w-full		">
      <div className="flex">
        {/* <div className="flex flex-col">
          {DAYS.map((day) => (
            <div key={day} className="h-4 w-8 text-xs text-gray-500">{day}</div>
          ))}
        </div> */}
        <div className="min-w-full	">
          <div className="grid grid-flow-col auto-cols-max gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-52 gap-1">
                {week.map(({ date, count }, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-2 h-2 rounded-sm ${getWeekStatus(count)}`}
                    title={`${date.toDateString()}: ${count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between mt-2 text-xs text-gray-500">
        {MONTHS.map((month, index) => (
          <div key={index} className="w-12 text-center">{month}</div>
        ))}
      </div> */}
    </div>
  );
};

// this sets the appeareance of the square


//
const getWeekStatus = (count) => {
    // if (count >= 7) return 'bg-black'
    if (count >= 6) return 'bg-black';
    if (count >= 5) return 'bg-gray-900';
    if (count >= 4) return 'bg-gray-700';
    if (count >= 3) return 'bg-gray-500';
    if (count >= 2) return 'bg-gray-300';
    if (count >= 1) return 'bg-gray-300';
    return 'bg-gray-200';
};

ContributionsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

ContributionsTable.defaultProps = {
  data: generateFakeData(),
};

export default ContributionsTable;