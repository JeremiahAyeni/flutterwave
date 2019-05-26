var data = {

    "status": "success",
    "message": "BVN-DETAILS",
    "data": {
        "bvn": "12345678901",
        "first_name": "Wendy",
        "middle_name": "Chucky",
        "last_name": "Rhoades",
        "date_of_birth": "01-01-1905",
        "phone_number": "08012345678",
        "registration_date": "01-01-1921",
        "enrollment_bank": "044",
        "enrollment_branch": "Idejo"
    }
}

var obj = JSON.stringify(data);
// data.status; 
// data.data.bvn;
// data.data.first_name;
// data.data.last_name;
// data.data.last_name;
// data.data.date_of_birth;
// data.data.phone_number;
// data.data.registration_date;
// data.data.bvn;
console.log(data.data.bvn);
//console.log(obj.data[1].first_name + " " + obj.data[1].last_name);