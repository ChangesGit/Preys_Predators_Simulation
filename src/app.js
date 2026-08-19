import { DashboardView } from "./ui/DashboardView.js";
import { Simulation } from "./simulation/Simulation.js";
import { Controls } from "./ui/Controls.js";


const dashboardView = new DashboardView();
const simulation = new Simulation();
const controller = new Controls(dashboardView, simulation);


controller.initialize();