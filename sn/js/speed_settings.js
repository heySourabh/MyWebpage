function getTotalSN() {
    return parseInt(document.getElementById("totalSN").value);
}

let avgCountGapMs;
function setAvgCountGapMs(avgGapMs) {
    avgCountGapMs = avgGapMs;
    document.getElementById("speed_range").value = `${avgGapMs}`;
    totalSN_changed();
}

function getAvgCountGapMs() {
    return avgCountGapMs;
}

function getModalAvgCountGapMs() {
    return parseFloat(document.getElementById("modal-speed-range").value);
}

let numCyclesSelected;
const modalNumCyclesSelect = document.getElementById("modal-num-speed-cycles");
function updateNumCyclesSelection() {
    numCyclesSelected = modalNumCyclesSelect.value;
}
updateNumCyclesSelection();
modalNumCyclesSelect.addEventListener("change", () => updateNumCyclesSelection());

function getNumCycles() {
    const totalSN = getTotalSN();
    const num_cycles = (numCyclesSelected == "auto")
        ? Math.max(1, Math.floor((totalSN / 40) + 1))
        : parseInt(numCyclesSelected);
    return num_cycles;
}

let speed_variation;
const modalSpeedVarianceRange = document.getElementById("modal-speed-variance-input");
function updateSpeedVariation() {
    speed_variation = parseFloat(modalSpeedVarianceRange.value) / 100.0;
}
updateSpeedVariation();
modalSpeedVarianceRange.addEventListener("change", () => updateSpeedVariation());

function getSpeedVariation() {
    return speed_variation;
}

let isConstantSpeed = false;
const modalVariableSpeedSwitch = document.getElementById("modal-variable-speed-switch");
function updateIsConstantSpeed() {
    isConstantSpeed = !modalVariableSpeedSwitch.checked;
}
updateIsConstantSpeed()
modalVariableSpeedSwitch.addEventListener("change", () => updateIsConstantSpeed());

function getIsConstantSpeed() {
    return isConstantSpeed;
}

// Update speed value
const modalSpeedValue = document.getElementById("modal-speed-value");
const modalSpeedRange = document.getElementById("modal-speed-range");
function updateSpeedValueModalText() {
    modalSpeedValue.innerText = "Avg. count: " + (parseInt(modalSpeedRange.value) / 1000) + " seconds";
}
updateSpeedValueModalText();
modalSpeedRange.addEventListener("input", () => {
    updateSpeedValueModalText();
});

// Update speed variation percentage
const modalSpeedVarianceOutput = document.getElementById("modal-speed-variance-output");
function updateSpeedVarianceText() {
    modalSpeedVarianceOutput.textContent = modalSpeedVarianceRange.value + "%";
}
updateSpeedVarianceText();
modalSpeedVarianceRange.addEventListener("input", () => {
    updateSpeedVarianceText();
});

// Enable / disable inputs for speed variance (handle toggle switch)
function enableSpeedSettingsFieldSet(enable) {
    const modalVariableSpeedFieldset = document.getElementById("modal-variable-speed-fieldset");
    modalVariableSpeedFieldset.disabled = !enable;
}
enableSpeedSettingsFieldSet(modalVariableSpeedSwitch.checked);
modalVariableSpeedSwitch.addEventListener("input", () => {
    enableSpeedSettingsFieldSet(modalVariableSpeedSwitch.checked);
});

// Chart for displaying speed variations
const chart = new Chart(document.getElementById('modal-speed-chart'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Count interval',
            data: [],
            borderWidth: 4,
            pointStyle: false,
            cubicInterpolationMode: 'monotone'
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                title: { text: "Interval (sec)", display: true },
                beginAtZero: true
            },
            x: {
                title: { text: "Surya Namaskar", display: true },
            }
        }
    }
});

let countSamples;
function updateSpeedChartXTicks() {
    // Add x-axis tick labels
    const totalSN = getTotalSN();
    const numPlotPoints = 600;
    const maxCount = totalSN * 12 - 1;
    const dCount = maxCount / numPlotPoints;
    countSamples = [];
    for (let i = 0; i < numPlotPoints; i++) {
        countSamples.push(i * dCount);
    }

    chart.data.labels = []
    for (const count of countSamples) {
        const label = Math.max(0, Math.min(maxCount, Math.round(count / 12)));
        chart.data.labels.push(label);
    }
}
updateSpeedChartXTicks();

function updateSpeedChartData() {
    chart.data.datasets[0].data = [];
    const constantSpeed = !document.getElementById("modal-variable-speed-switch").checked;
    for (const count of countSamples) {
        const snCount = Math.floor(count / 12);
        const stepCount = count - snCount * 12;
        const gapMs = gapBetweenCountsMs(snCount, stepCount, getModalAvgCountGapMs(), constantSpeed);
        chart.data.datasets[0].data.push(gapMs / 1000);
    }
    chart.update();
}
updateSpeedChartData();

// Add update chart listeners
document.getElementById("modal-speed-settings").addEventListener("change", () => updateSpeedChartData());

const mainScreenSpeedRange = document.getElementById("speed_range");
const settingsModal = document.getElementById("speedSettingsModal");
let prevSpeedRangeValue, prevIsConstantSpeed, prevNumCyclesSelection, prevSpeedVariation;
let speedSettingsSaved;
document.getElementById("modal-speed-settings-save-btn").addEventListener("click", () => {
    speedSettingsSaved = true;
});
settingsModal.addEventListener("show.bs.modal", _ => {
    // Save old values
    prevSpeedRangeValue = mainScreenSpeedRange.value;
    prevIsConstantSpeed = isConstantSpeed;
    prevNumCyclesSelection = numCyclesSelected;
    prevSpeedVariation = speed_variation;

    modalSpeedRange.value = prevSpeedRangeValue;
    modalVariableSpeedSwitch.checked = !prevIsConstantSpeed;
    modalNumCyclesSelect.value = prevNumCyclesSelection;
    modalSpeedVarianceRange.value = `${prevSpeedVariation * 100}`;

    updateSpeedValueModalText();
    updateSpeedVarianceText();
    updateSpeedChartXTicks();
    updateSpeedChartData();

    speedSettingsSaved = false;
});

// Handle modal closing and restore previous value if not saved.
settingsModal.addEventListener("hidden.bs.modal", _ => {
    // Restore the values to previous if not saved.
    if (!speedSettingsSaved) {
        setAvgCountGapMs(parseFloat(prevSpeedRangeValue));
        isConstantSpeed = prevIsConstantSpeed;
        enableSpeedSettingsFieldSet(!isConstantSpeed);
        numCyclesSelected = prevNumCyclesSelection;
        speed_variation = prevSpeedVariation;
    } else {
        setAvgCountGapMs(parseFloat(modalSpeedRange.value));
    }
});
