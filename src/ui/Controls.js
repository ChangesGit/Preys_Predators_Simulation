export class Controls {
    constructor(dashboardView, simulation) {
        this.dashboardView = dashboardView;
        this.simulation = simulation;
        this.hasPendingSettings = false;
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

        this.hasPendingSettings = false;
        this.dashboardView.setResetNoticeVisibility(false);
        this.dashboardView.rangeInputs.forEach(rangeInput => {
            rangeInput.addEventListener('input', (e) => {
                const cursor = e.currentTarget;
                this.dashboardView.updateRangeControl(cursor);
                this.displayResetNotice(true);
            })
            this.dashboardView.updateRangeControl(rangeInput);
        })


    }

    displayResetNotice(isTrue) {
        if(this.hasPendingSettings!== isTrue){            
            this.hasPendingSettings = isTrue;
            this.dashboardView.setResetNoticeVisibility(isTrue);
        }
    }
}