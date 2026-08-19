import { DashboardView } from "./ui/DashboardView.js";
import { Simulation } from "./simulation/Simulation.js";
import { Controls } from "./ui/Controls.js";


const dashboardView = new DashboardView();
const simulation = new Simulation();
const controller = new Controls(dashboardView, simulation);

const rangeInputs = dashboardView.rangeInputs;
console.log(dashboardView.rangeInputs)

controller.initialize();