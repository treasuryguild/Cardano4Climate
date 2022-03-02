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
        case 'Power Up Catalyst Circle':
          answer = "Fund6/Power-Up-The-Catalyst-Circle/";
          break;
        case 'CC Admin Team Scope Expansion':
          answer = "Fund7/CC-Admin-Team-Scope-Expantion/";
          break;
        case 'CCv3 Sustaining The Circle':
          answer = "Fund7/CCv3-Sustaining-the-circle/";
          break;
        case 'CC Funding Mechanism':
          answer = "Fund7/CC-Funding-Mechanism/";
          break;
        case 'CC Treasury Management':
          answer = "Fund7/CC-Treasury-Management/";
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
  window.open("https://github.com/treasuryguild/Cardano4Climate/new/main/content/en/blog/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
