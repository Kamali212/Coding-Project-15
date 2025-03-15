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

    const departmentLabel = document.createElement("p");
    departmentLabel.textContent = department;
    
    // Task 4: Categorizing Risks by Level
    if (riskLevel.toLowerCase() === "high") {
        riskItem.classList.add("high-priority");
    
    } else if (riskLevel.toLowerCase() === "medium") {
        riskItem.classList.add("medium-priority");
    
    } else if (riskLevel.toLowerCase() === "low") {
        riskItem.classList.add("low-priority");
    }
    
    // Task 3 Removing Risk Items
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function()
        {riskDashboard.removeChild(riskItem)})

   
    
    riskItem.appendChild(nameHeading);
    riskItem.appendChild(riskLabel);
    riskItem.appendChild(departmentLabel);
    riskItem.appendChild(resolveButton);

riskDashboard.appendChild(riskItem);
}

 // Task 5 Implementing Bulk Updates 

 const updateButton = document.createElement("button");
 updateButton.textContent = "Increase Risk Levels";
 updateButton.classList.add("update-button");
 updateButton.addEventListener("click", function(){
     const riskItems = document.querySelectorAll(".risk-item");
     riskItems.forEach(item => {
         const riskLabel = item.querySelector("span");
         const currentLevel = riskLabel.textContent.toLocaleLowerCase();

         if (currentLevel === "low") {
             riskLabel.textContent = "Medium";
             item.classList.remove("low-priority");
             item.classList.add("medium-priority");
         }

         if (currentLevel === "medium") {
            riskLabel.textContent = "High";
            item.classList.remove("medium-priority");
            item.classList.add("high-priority");
         }
     })
 })

 riskDashboard.appendChild(updateButton)

// Test Case Task 2
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Test Case Task 3
// Clicking "Resolve" should remove this risk from the dashboard.
addRiskItem("Market Fluctuations", "High", "Finance");


// Test Case Task 4

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Test Case Task 5
addRiskItem("Employee Retention", "Low", "HR");