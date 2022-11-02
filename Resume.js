const { log } = console;


let Account_Information = document.querySelector
('.personal_wrapper .about_information');

let Personal = document.querySelector
('.personal');


Account_Information == true ? true : false;


function Query(target)
{
    let valid = false;

    if (target !== null)
    {
        valid = true;
    }

    return valid;
}


try
{
    if (Query(Personal) == true)
    {
        log(Query(Personal));
    } else
    {
         log(Query(Personal));
    }
   

}catch(error)
{
    const e = new Error("Error ");
    let errors = {
        echoError: e.message
    }

    log(errors['echoError'] + error);

}

