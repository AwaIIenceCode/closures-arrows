//function  for create user profile with arrows methods and closures methods
function createUserProfile()
{
    return {
        name: function(name)
        {
             return this;
        },

        skills: function(userSkills)
        {
            console.log()
        },

        introduce: function()
        {
            setTimeout(() => {
                console.log(this)
            }, 1000);
        }
    };
}

function main()
{

}

main();