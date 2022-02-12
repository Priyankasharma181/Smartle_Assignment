knex = require("../database/db")

// course
insert = (req, res) => {
    obj = {
        Title: "hindi",
        Description: "Hindi or more precisely Modern Standard Hindi, is an Indo-Aryan language spoken chiefly in North India. Hindi has been described as a standardised and Sanskritised register of the Hindustani language, which itself is based primarily on the Khariboli dialect of Delhi and neighbouring areas of Northern India.",
        duration: new Date()
    }
    knex("Course").insert(obj)
        .then((data) => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        })

}

// Student

insert1 = (req, res) => {
    obj = {
        Full_name: "Priyankasharma",
        Age: 22,
        Contact: 8085540441,
        Location: "ujaain"
    }
    knex("Student").insert(obj)
        .then((data) => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        })

}


// Trainer

insert2 = (req, res) => {
    obj = {
        Full_name: "pinki",
        Contact: 1927410127,
        Country: "india",
        availability: "yes"
    }
    knex("Trainer").insert(obj)
        .then((data) => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        })

}

// Session


insert3 = (req, res) => {
    obj = {
        title: "i am",
        session_time: "2131",
        duration: "indore",
        course_id: 1,
        trainer_id: 1

    }
    knex("Session").insert(obj)
        .then((data) => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        })

}

// Enrolment

insert4 = (req, res) => {
    obj = {
        Enrolment_date: new Date(),
        student_id: 1,
        session_id: 1
    }
    knex("Enrolment").insert(obj)
        .then((data) => {
            res.send("insert")
        }).catch((err) => {
            res.send(err)
        });

}


module.exports = {
    insert,
    insert1,
    insert2,
    insert3,
    insert4
}