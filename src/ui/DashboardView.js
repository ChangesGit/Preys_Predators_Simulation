export class DashboardView {
  constructor() {
    this.ecosystemCanvas = this.getRequiredElement("ecosystem-canvas");
    this.playButton = this.getRequiredElement("play-button");
    this.pauseButton = this.getRequiredElement("pause-button");
    this.simulationState = this.getRequiredElement("simulation-state");
  }

  getRequiredElement(elementId) {
    const element = document.getElementById(elementId);

    if (element === null) {
      throw new Error(
        `DashboardView : l'élément #${elementId} est introuvable.`
      );
    }

    return element;
  }

  setSimulationStatus(state) {
    if(state === true) {
        this.simulationState.innerText = "Simulation active";
    }
    else if(state === false) {
        this.simulationState.innerText = "Simulation en pause";
    }
  }
}