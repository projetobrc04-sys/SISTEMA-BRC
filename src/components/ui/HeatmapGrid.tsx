import { heatmap } from "../../data/mockData";

const labels = ["Manhã", "Almoço", "Tarde", "Pico", "Noite", "Extra"];

export default function HeatmapGrid() {
  return (
    <div className="heatmap">
      {heatmap.flatMap((row, rowIndex) =>
        row.map((value, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}`}
            className="heatmap-cell"
            style={{ opacity: 0.28 + value / 140 }}
            title={`${labels[columnIndex]}: ${value}%`}
          >
            <strong>{value}%</strong>
            <span>{labels[columnIndex]}</span>
          </div>
        )),
      )}
    </div>
  );
}
