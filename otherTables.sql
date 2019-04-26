CREATE TABLE plan (
    planId int NOT NULL,
    name varchar(30) NOT NULL,
    gender varchar(10) NOT NULL,
    age int NOT NULL,
    weight int NOT NULL,
    height int NOT NULL,
    lifestyle varchar(40) NOT NULL,
    autolife varchar(40) NOT NULL,
    idealWeight decimal(12,4) NOT NULL,
    bmr decimal(8,3) NOT NULL,
    reqCal decimal(8,3) NOT NULL,
    initialCal decimal(8,3) NOT NULL,
    goalStart DATE NOT NULL,
    goalEnd DATE NOT NULL,
    userId int NOT NULL,
    PRIMARY KEY (planId),
    FOREIGN KEY (userId) REFERENCES users(id)
);


CREATE TABLE foodchart (
    id int NOT NULL,
    planId int NOT NULL,
    foodId int NOT NULL,
    servings int NOT NULL,
    week int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (planId) REFERENCES plan(planId),
    FOREIGN KEY (foodId) REFERENCES food_items(food_id)
);

CREATE TABLE exchart (
    id int NOT NULL,
    planId int NOT NULL,
    exId int NOT NULL,
    minutes int NOT NULL,
    calories int NOT NULL,
    week int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (planId) REFERENCES plan(planId),
    FOREIGN KEY (exId) REFERENCES exercise(ex_id)
);