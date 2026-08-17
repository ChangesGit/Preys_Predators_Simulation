export class Controls {
    constructor(dashboardView, simulation) {
        this.dashboardView = dashboardView;
        this.simulation = simulation;
    }

    initialize() {
        this.dashboardView.playButton.addEventListener('click', () => {
            this.simulation.play();
            this.dashboardView.setSimulationStatus(this.simulation.isRunning);
        });
        this.dashboardView.pauseButton.addEventListener('click', () => {
            this.simulation.pause();
            this.dashboardView.setSimulationStatus(this.simulation.isRunning);
        });
        this.dashboardView.setSimulationStatus(this.simulation.isRunning);
    }
}