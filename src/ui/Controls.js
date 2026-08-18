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
        
        this.dashboardView.setActiveSpeedButton(this.simulation.speed);
        //currentTarget au lieu de target pour éviter que l'utilisateur puisse cliquer sur un élément enfant
        this.dashboardView.speedButtons.forEach(speedButton => {
            speedButton.addEventListener('click', (e) => {
                const speed = Number(e.currentTarget.value);
                this.simulation.setSpeed(speed);
                this.dashboardView.setActiveSpeedButton(this.simulation.speed);
            });
        });
    }
}