export class DashboardView {
  constructor() {
    this.ecosystemCanvas = this.getRequiredElement("ecosystem-canvas");
    this.playButton = this.getRequiredElement("play-button");
    this.pauseButton = this.getRequiredElement("pause-button");
    this.simulationState = this.getRequiredElement("simulation-state");
    this.speedButtons = this.getRequiredElements("[name='speed']");
    this.rangeInputs = this.getRequiredElements("[type='range']");
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

  getRequiredElements(selector) {
    const elements = document.querySelectorAll(selector);

    if(elements.length === 0) {
      throw new Error(
        `DashboardView : les éléments correspondant à ${selector} sont introuvables.`
      );
    }
    else {
      return elements;
    }
  }

  setSimulationStatus(state) {
    if(state === true) {
        this.simulationState.innerText = "Simulation active";
    }
    else if(state === false) {
        this.simulationState.innerText = "Simulation en pause";
    }
  }

  setActiveSpeedButton(speed) {
    this.speedButtons.forEach(speedButton => {
      if(Number(speedButton.value) === speed) {
        speedButton.classList.add("is-active");
        speedButton.ariaPressed = "true";
      }
      else {
        speedButton.classList.remove("is-active");
        speedButton.ariaPressed = "false";
      }
    });
  }

  getRangeOutput(rangeInput) {
    const outputId = rangeInput.id + "-output";
    return this.getRequiredElement(outputId);
  }

  updateRangeControl(rangeInput) {
    const value = Number(rangeInput.value);
    const rangeOutput = this.getRangeOutput(rangeInput);
    const min = Number(rangeInput.min);
    const max = Number(rangeInput.max);
    const fillPercentage = ((value - min) / (max - min)) * 100;
    if(rangeInput.name === "worldCapacity") {
      const numberFormatter = new Intl.NumberFormat("fr-FR");

      rangeOutput.textContent = numberFormatter.format(value);
    }
    else {
      rangeOutput.textContent = value + " %";
    }

    rangeInput.style.setProperty('--range-fill', fillPercentage+"%");

  }
}