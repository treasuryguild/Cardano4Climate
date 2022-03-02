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
        case 'CC member remuneration':
          answer = "CC-member-remuneration/";
          break;
        case 'CC - Comm/Org tools':
          answer = "CC-Comm-Org-tools/";
          break;
        case 'CC Admin staff remuneration':
          answer = "CC-Admin-staff-remuneration/";
          break;
        case 'CC Admin - Comm/Org tools':
          answer = "CC-Admin-Comm-Org-tools/";
          break;
        case 'CC Treasurer remuneration':
          answer = "CC-Treasurer-remuneration/";
          break;
        case 'CC Treasury system':
          answer = "CC-Treasury-system/";
          break;
        case 'CC Treasury system documentation':
          answer = "CC-Treasury-system-documentation/";
          break;
        case 'Project funding - Community Advisors':
          answer = "Project-funding-Community-Advisors/";
          break;
        case 'Project funding - Funded Proposers':
          answer = "Project-funding-Funded-Proposers/";
          break;
        case 'Project funding - General ADA Holder':
          answer = "Project-funding-General-ADA-Holder/";
          break;
        case 'Project funding - Stake Pool Operators':
          answer = "Project-funding-Stake-Pool-Operators/";
          break;
        case 'Project funding - Toolmakers & Maintainers':
          answer = "Project-funding-Toolmakers-&-Maintainers/";
          break;
        case 'Other':
          answer = "Other/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/cctreasury/Treasury-system/new/main/content/en/blog/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
