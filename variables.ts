let word: string;
word = 'Divya';
console.log(word);

let digit: number = 20;
console.log(digit);

//type for arguements in the function
function display(name: string, phone: number){
    console.log("Name",name);
    console.log("Contact Number:",phone);
}
display('Adam',2889383);




//Defining a  Class
class Employee {
    empId: number;
    eName: string;
    
    constructor(id: number, name: string ) {
            this.empId = id;
            this.eName = name;
    }

    display(){
        console.log(this.eName," ",this.empId);
    }
}

let emp = new Employee(100,"Adam");
emp.display();





//Interface
interface Employer {
    empCode: number;
    empName: string;
}

let empObj1:Employer = {  
    empCode:200,
    empName:"Eve"
}

