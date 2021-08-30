import "./App.css";
import BarChartDemo from "./components/ReactCharts/BarChartDemo";
import DoughnutChartDemo from "./components/ReactCharts/DoughnutChartDemo";
import LineChartDemo from "./components/ReactCharts/LineChartDemo";
import ReactColorPickerDemo from "./components/ReactColorPicker/ReactColorPickerDemo";
import ReactCountupDemo from "./components/ReactCountup/ReactCountupDemo";
import ReactCreditCardDemo from "./components/ReactCreditCard/ReactCreditCardDemo";
import ReactDatePickerDemo from "./components/ReactDatePicker/ReactDatePickerDemo";
import ReactIconDemo from "./components/ReactIcons/ReactIconDemo";
import ReactIdleTimerDemo from "./components/ReactIdleTimer/ReactIdleTimerDemo";
import ReactModalDemo from "./components/ReactModal/ReactModalDemo";
import ReactSpinnerDemo from "./components/ReactSpinners/ReactSpinnerDemo";
import ReactToastifyDemo from "./components/ReactToastify/ReactToastifyDemo";
import ReactTooltipDemo from "./components/ReactTooltip/ReactTooltipDemo";
import ReactVideoPlayerDemo from "./components/ReactVideoPlayer/ReactVideoPlayerDemo";

function App() {
  return (
    <div className="App">
      <ReactIconDemo />
      <ReactToastifyDemo />
      <ReactModalDemo />
      <ReactTooltipDemo />
      <ReactCountupDemo />
      <ReactIdleTimerDemo />
      <ReactColorPickerDemo />
      <ReactDatePickerDemo />
      <ReactSpinnerDemo />
      <ReactVideoPlayerDemo />
      <div className="chart">
        <LineChartDemo />
        <BarChartDemo />
        <DoughnutChartDemo />
      </div>
      <ReactCreditCardDemo />
    </div>
  );
}

export default App;
