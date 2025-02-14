export function JourneyTimeline() {
  const events = [
    { date: "2021-01-01", description: "Started the Gospel Tech Journey" },
    { date: "2022-06-15", description: "Launched first product for Gospel Tech" },
    { date: "2023-11-10", description: "Reached 10k users" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Journey Timeline</h2>
      <ul className="mt-4 space-y-2">
        {events.map((event, idx) => (
          <li key={idx} className="p-4 border rounded-lg">
            <strong>{event.date}</strong>: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
