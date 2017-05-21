var klass =require('./klass')
var klasses =[{teacherName:'lee',students:['11','22','33','44']},{teacherName:'ming',students:['66','77','88','99']}]

function add(klasses){
    klasses.forEach(function(item,index){
        var _klass =item;
        var teacherName = item.teacherName;
        var students = item.students;
        console.log(teacherName,students)
        klass.add(teacherName,students);
    })
}
add(klasses);