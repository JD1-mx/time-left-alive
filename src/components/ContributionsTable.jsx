import React from 'react';
import PropTypes from 'prop-types';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Function to generate fake data
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

// Function to generate week status array based on given weeks and leftover days
const generateWeekStatusArray = (weeksdays) => {
  const data = [];
  const pastWeeks = weeksdays.weeks;
  const leftoverdays = weeksdays.leftoverdays;
  for (let i = 0; i < pastWeeks; i++) {
    data.push({ count: 7 });
  }
  data.push({ count: leftoverdays });
  const weeksToLive = (52 * 90 - (pastWeeks + 1));
  for (let i = 0; i < weeksToLive; i++) {
    data.push({ count: 0 });
  }
  return data;
};

// Function to get weeks data from input data
const getWeekData = (data) => {
  if (!data || !Array.isArray(data)) {
    return []; // Return an empty array if data is undefined or not an array
  }
  const weeks = [];
  let currentWeek = [];
  data.forEach((day, index) => {
    currentWeek.push(day);
    if ((index + 1) % 90 === 0) { // Changed 52 to 90 to align horizontally
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length) {
    weeks.push(currentWeek);
  }
  return weeks;
};

// ContributionsTable component
const ContributionsTable = ({ data }) => {
  const weeks = getWeekData(data);

  return (
    <div className="w-full h-screen flex flex-col items-center overflow-y-auto">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="flex justify-between w-full mb-1">
          {week.map(({ date, count }, dayIndex) => (
            <div
              key={dayIndex}
              className={`flex items-center justify-center w-[calc(100%/90-0.1rem)] max-w-2 min-h-1.5 rounded-lg ${getWeekStatus(count)}`}
              title={`${count} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// Function to determine background color based on count
const getWeekStatus = (count) => {
  if (count >= 7) return 'bg-black';
  if (count >= 3) return 'bg-gray-500'; // Changed to 3 contributions to match your requirement
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

// Define weeksdays object
const weeksdays = { weeks: 1214, leftoverdays: 3 }; // Removed 'new'

ContributionsTable.defaultProps = {
  data: generateWeekStatusArray(weeksdays),
};

export default ContributionsTable;
