// //function  for create user profile with arrows methods and closures methods

let userProfile = {
    name: "Oleg",       
    skills: ["JavaScript","C++","Web3"],       

    introduce: function() {
        setTimeout(() => {
            console.log(`Hi, I'm ${this.name}. My skills: ${this.skills.join(", ")}`);
        }, 1000);
    }
};

function main()
{
    userProfile.introduce();
}

main();
