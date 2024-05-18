const DefaultCalendar = () => {
    const weeks = Array.from({ length: 52 }, (_, weekIndex) => ({
      week: weekIndex + 1,
      years: Array.from({ length: 90 }, () => 0),
    }));
  
    return (
      <div className="p-4 min-w-full">
        <div className="min-w-full">
          <div className="grid grid-flow-col auto-cols-max gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-1 gap-1">
                {week.years.map((count, yearIndex) => (
                  <div
                    key={yearIndex}
                    className="w-2 h-2 rounded-sm bg-gray-300"
                    title={`week ${week.week}, year ${yearIndex + 1}: ${count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default DefaultCalendar