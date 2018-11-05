window.addEventListener('load', function()
{
    class task
    {
        constructor()
        {
            this.TaskName = TaskName;
            this.TaskDesc = TaskDesc;
        }
    }

    let txt_taskname = document.getElementsByName("taskname");
    let txt_taskdesc = document.getElementsByName("taskdesc");
    let todoForm = document.getElementById("todoForm");
    todoForm.addEventListener('submit', onFormSubmit(event));
    //todo async submit and create new task object

    function onFormSubmit(event)
    {
        event.preventDefault();
        alert("asd");
    }
})   