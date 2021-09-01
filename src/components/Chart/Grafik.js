import "./Grafik.css";
import GrafikBar from "./GrafikBar";

const Grafik = (props) => {
    const nilaiDataPoint = props.items.map(items => items.value);
    const nilaiMaksimumBulan = Math.max(...nilaiDataPoint);
  return (
    <div className="chart">
      {props.items.map((items) => (
        <GrafikBar
          key={items.label}
          value={items.value}
          maxValue={nilaiMaksimumBulan}
          label={items.label}
        />
      ))}
    </div>
  );
};

export default Grafik;
