//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const txid = getValue('txid')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".md"
    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `---
Date: ${new Date().toUTCString()}
---

##### ${name} ${ada} ADA

| Date      | Name | Funded Proposal | Budget Item | ADA | Transaction|
| :---        | :---  | :--- | :--- | :--- | :--- |
| ${new Date().toUTCString()} | ${name} | ${pool} | ${budgetB} | ${ada} | [link](https://cardanoscan.io/transaction/${txid})|

Description: ${description}`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    
    function githubQueryLink(pool) {
      var answer = "";
      switch(pool) {
        case 'Cardano4Climate Community Events':
          answer = "Fund7/Cardano4Climate-Community-Events/";
          break;
        case 'Cardano4Climate Community Hub':
          answer = "Fund7/Cardano4Climate-Community-Hub/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }

    function githubQueryLink2(budgetB) {
      var answer = "";
      switch(budgetB) {
        case 'Remuneration (3 UBI)':
          answer = "Remuneration-3xUBI/";
          break;
        case 'Subscriptions & webhosting':
          answer = "Subscriptions-&-webhosting/";
          break;
        case 'Event Incentives & C4C Veritree contribution':
          answer = "Event-Incentives-&-C4C-Veritree-contribution/";
          break;
        case 'Seed fund for C4C determined project':
          answer = "Seed-fund-for-C4C-determined-project/";
          break;
        case 'Weekly meeting':
          answer = "Weekly-meeting/";
          break;
        case 'Monthly event':
          answer = "Monthly-event/";
          break;
        case 'Event Remuneration':
          answer = "Event-Remuneration/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/treasuryguild/Cardano4Climate/new/main/Transactions/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
