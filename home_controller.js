const Task = require('../models/task')
module.exports.home = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log(`Error in fetching tasks from db: ${err}`);
            return;
        }

        return res.render('home',{
            title: "To-Do Application",
            tasks_list: tasks,
            months: ['Jan','FEB','MARCH','APRIL','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC']
        })
    });
}

// controller for create tast
module.exports.createTask = function(req,res){
    Task.create(req.body,function(err,newTask){
        if(err){
            console.log(`Error in creating contact: ${err}`);
            return;
        }

        console.log(`New Task Created: ${newTask}`);
        return res.redirect('back');
    });
}

// controller for deleting task
module.exports.deleteTasks = function(req,res){
    Task.deleteMany({_id:{$in:req.body.checked}},function(err,deletedTasks){
        if(err){
            console.log(`Error deleting the tasks from database: ${err}`);
            return;
        }
        console.log("Tasks deleted: ",deletedTasks);
        res.redirect('back');
    })
}