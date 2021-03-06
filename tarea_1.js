//256995 Tania Aranda López
use students;
db.grades.count()

//cuantos registros arrojo el comando count? 800

//3) Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({"student_id":4});
//R= 87.89071881934647, 5.244452510818443, 28.656451042441, 27.29006335059361
//4) ¿Cuantos registros hay de tipo exam?
db.grades.count({"type":"exam"});
//R= 200
//5) ¿Cuantos registros hay de tipo homework?
db.grades.count({"type":"homework"});
//R= 400
//6) ¿Cuantos registros hay de tipo quiz?
db.grades.count({"type":"quiz"});
//R= 200
//7) Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.remove({"student_id":3});
//resultado: WriteResult({"nRemoved": 4})
//8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({"score": 75.29561445722392});
/*resultado: {"_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type": "homework", 
"score": 75.29561445722392 }*/
//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
db.grades.update({"_id":  ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score": 100}});
//resultado: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified": 1})
//10) A que estudiante pertenece esta calificación.
db.grades.find({"score": 100});
/*resultado: {"_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type": "homework", 
"score": 100}*/
