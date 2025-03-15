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
    
    // Task 4: Categorizing Risks by Level
    if (riskLevel.toLowerCase() === "high") {
        riskItem.classList.add("high-priority")
        riskItem.style.backgroundColor = "#95b584";
        riskItem.style.color = "black";
    
    } else if (riskLevel.toLowerCase() === "medium") {
        riskItem.classList.add("medium-priority")
        riskItem.style.backgroundColor = "#8bb6d9";
        riskItem.style.color = "black";
    
    } else if (riskLevel.toLowerCase() === "low") {
        riskItem.classList.add("low-priority");
        riskItem.style.backgroundColor = "#e0a6d4";
        riskItem.style.color = "black";
    }
    
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
