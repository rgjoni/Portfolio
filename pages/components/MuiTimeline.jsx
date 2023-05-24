import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function MuiTimeline() {
  const [selectedDots, setSelectedDots] = React.useState([]);
  const [visibleItems, setVisibleItems] = React.useState([]);

  const handleDotClick = (index) => {
    if (selectedDots.includes(index)) {
      setSelectedDots(selectedDots.filter((dotIndex) => dotIndex !== index));
    } else {
      setSelectedDots([...selectedDots, index]);
    }
  };
  const timelineData = [
    { id: 0, date: "January 8th 2000", content: "Born!" },
    { id: 1, date: "January 12th 2022", content: "Began Development of the Experiential Learning Center" },
    { id: 2, date: "March 3rd 2022", content: "Started app development for Shade Inc" },
    { id: 3, date: "March 14th 2022", content: "Interned for Hymes Barrera and Kim!" },
    { id: 4, date: "May 15th 2022", content: "Graduated USC!" },
    { id: 5, date: "June 1st, 2022", content: "Began full-time work at Hymes, Barrera and Kim!" },
  ];

  return (
    <div className="max-h-80vh overflow-y-auto bg-[#091930]">
      <h2 className="text-center text-4xl font-mono text-teal-500 ">Timeline</h2>
      <h2 className = "text-blue-400 text-center text-lg font-mono">(Click the dots!!)</h2>
      <Timeline position="alternate">
        {timelineData.map((data) => (
          <TimelineItem key={data.id}>
            <TimelineOppositeContent
              className={"text-blue-300"}
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              <div className={`text-lg font-mono rounded-lg h-75 w-300 flex justify-center items-center hover:shadow-md hover:shadow-blue-500 hover:scale-100 duration-500 bg-[#112240] ${selectedDots.includes(data.id) ?  "scale-95 duration-500" : "invisible"}`}>
                <span className="text-left">{data.content}</span>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{backgroundColor: selectedDots.includes(data.id) ? '#3b83f6' : ''}}
                onClick={() => handleDotClick(data.id)}
                className={selectedDots.includes(data.id) ? "bg-red-500" : ""}
              />
              {data.id !== timelineData.length - 1 && <TimelineConnector sx={{ height: 200, width: 4 }} />}
            </TimelineSeparator>
            <TimelineContent>
              <span className={`font-mono text-xl text-blue-500 ${selectedDots.includes(data.id) ? "scale-105 duration-500" : "invisible"}`}>
                {data.date}
              </span>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}