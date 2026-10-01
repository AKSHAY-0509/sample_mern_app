from fastapi import FastAPI

try:
    from .models import Student
    from .database import students_collection
except ImportError:
    from models import Student
    from database import students_collection


app = FastAPI()

def student_data(student):
    return {
        "id": str(student["_id"]),
        "name": student["name"],
        "email": student["email"],
        "age": student["age"],
        "marks": student["marks"]
    }   

@app.get("/getstudents")
def getStudents():
    students = students_collection.find()
    return [student_data(student) for student in students]



@app.post("/register")
def register(stu: Student):
    result = students_collection.insert_one(stu.model_dump())
    return {"message": "data inserted "}
    





@app.put("/updateprofile")
def update_profile():
    return "update profile called";
@app.delete("/deleteprofile")
def delete_profile():
    return "delete profile called";
@app.get("/getstudentDet/{userid}")
def getstudentDet(userid: int):
    return {"userid": userid,}
@app.get("/getstudentDetails")
def getstudentDetails(page: int = 1, limit: int = 10):
    return {"page": page, "limit": limit}
    