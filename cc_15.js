// Task 1: Creating the Base Structure

const riskDashboard = document.querySelector("#riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically 

function addRiskItem(riskName, riskLevel, department) {
    const riskItem = document.createElement("div");
    riskItem.classList.add("risk-item");
    
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = riskName;

    const riskLabel = document.createElement("span");
    riskLabel.textContent =  riskLevel;
    
    // Task 3 Removing Risk Items
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function()
        {riskDashboard.removeChild(riskItem)})

    const departmentLabel = document.createElement("p");
    departmentLabel.textContent = department;
    
    riskItem.appendChild(nameHeading);
    riskItem.appendChild(riskLabel);
    riskItem.appendChild(departmentLabel);
    riskItem.appendChild(resolveButton);

riskDashboard.appendChild(riskItem);
}

// Test Case
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
