const DefaultCalendar = () => {
    const years = Array.from({ length: 90 }, (_, yearIndex) => ({
      year: yearIndex + 1,
      weeks: Array.from({ length: 52 }, () => 0),
    }));
  
    return (
      <div className="p-4 min-w-full">
        <div className="min-w-full">
          <div className="grid grid-flow-col auto-cols-max gap-1">
            {years.map((year, yearIndex) => (
              <div key={yearIndex} className="grid grid-rows-52 gap-1">
                {year.weeks.map((count, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="w-2 h-2 rounded-sm bg-gray-300"
                    title={`Year ${year.year}, Week ${weekIndex + 1}: ${count} contributions`}
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