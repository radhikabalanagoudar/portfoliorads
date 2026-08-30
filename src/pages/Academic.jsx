import "./pages.css";

function Academic() {
  const history = [
    {
      year: "2026 — Present",
      title: "B.E. in AIML",
      place: "SDMCET",
      note: "Currently pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning, focusing on developing skills in AI, ML, and full-stack web development, with a 9.58 CGPA."
    },
    {
      year: "2023 — 2025",
      title: "Pre-University",
      place: "DR.R B PATIL MAHESH PU COLLEGE",
      note: "Completed Pre-University education with a focus on PCMCs, achieving a 90% score."
    },
    {
      year: "2023",
      title: "Class X",
      place: "st. anthony's public school",
      note: "Completed Class X with a 86%, laying the foundation for future academic pursuits."
    }
  ];

  return (
    <div className="page container">
      <p className="eyebrow">02 — academics</p>
      <h2>Academic background</h2>

      <div className="timeline section-gap">
        {history.map((item) => (
          <div className="timeline-item" key={item.title}>
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;
